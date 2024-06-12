using API.Context;
using API.Interfaces.Repositories;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class ServiceRepository : IServiceRepository
{
    private readonly BookingContext _context;

    public ServiceRepository(BookingContext context)
    {
        _context = context;
    }

    public async Task<List<Service>> GetServices()
    {
        var services = await _context.Services.ToListAsync();
        return services;
    }

    public async Task<Service?> GetService(int serviceId)
    {
        var service = await _context.Services.FirstOrDefaultAsync(s => s.Id == serviceId);
        return service;
    }
}