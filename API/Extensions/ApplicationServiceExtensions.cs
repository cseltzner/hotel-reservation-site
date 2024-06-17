using API.Interfaces.Repositories;
using API.Repositories;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    /// <summary>
    /// Adds scoped and transient services to program
    /// </summary>
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // Repository services
        services.AddScoped<IServiceRepository, ServiceRepository>();
        services.AddScoped<IRoomRepository, RoomRepository>();
        services.AddScoped<IBookingRepository, BookingRepository>();
        services.AddScoped<IGuestRepository, GuestRepository>();

        return services;
    }
}