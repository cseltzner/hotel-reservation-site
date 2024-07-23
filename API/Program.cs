using System.Text.Json.Serialization;
using API.Context;
using API.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(opt =>
    {
        opt.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

builder.Services.AddDbContext<BookingContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DbConnection"));
});

builder.Services.AddMemoryCache(); // Adds IMemoryCache to service collection

builder.Services.AddApplicationServices(); // Add custom services to the service collection

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:7002");
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("https://alpineluxurysuites.com");
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("https://www.alpineluxurysuites.com");
});

app.UseAuthorization();

app.MapControllers();

// Migrate database if unused migrations exist, and seed database
var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<BookingContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    await context.Database.MigrateAsync();
    await SeedData.Seed(context);

}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration, see exception message");
}

app.Run();
