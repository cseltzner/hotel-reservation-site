using API.Context;
using API.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<BookingContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DbConnection"));
});

builder.Services.AddMemoryCache(); // Adds IMemoryCache to service collection

builder.Services.AddApplicationServices(); // Add custom services to the service collection

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

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
