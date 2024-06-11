using API.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<BookingContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DbConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Migrate database if unused migrations exist
var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<BookingContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    await context.Database.MigrateAsync();
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration, see exception message");
}

app.Run();
