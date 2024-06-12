using API.Models;

namespace API.Interfaces.Repositories;

public interface IServiceRepository
{
    public Task<List<Service>> GetServices();
    public Task<Service?> GetService(int serviceId);
}