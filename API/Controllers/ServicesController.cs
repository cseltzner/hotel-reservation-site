using API.Interfaces.Repositories;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServiceRepository _serviceRepository;
    private readonly IMemoryCache _cache;

    public ServicesController(IServiceRepository serviceRepository, IMemoryCache cache)
    {
        _serviceRepository = serviceRepository;
        _cache = cache;
    }

    ////////////
    // Routes //
    ////////////

    /// <summary>
    /// @route   GET /api/services              <br/>
    /// @desc    Get all room services          <br/>
    /// @access  Public                         <br/>
    ///                                         <br/>
    /// @status  200 - returns List of Services <br/>
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetServices()
    {
        // Check cache
        var services = _cache.Get<List<Service>>("service");

        // If cache is empty, retrieve from database
        if (services == null)
        {
            services = await _serviceRepository.GetServices();
            // Write response to cache
            _cache.Set("service", services, TimeSpan.FromMinutes(10));
        }

        return StatusCode(200, services);
    }

    /// <summary>
    /// @route   GET /api/services                     <br/>
    /// @desc    Get single service by Id              <br/>
    /// @access  Public                                <br/>
    ///                                                <br/>
    /// @status  200 - returns service with given Id   <br/>
    /// @status  404 - Service with given Id not found <br/>
    /// </summary>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetService(int id)
    {
        // Get service from cache
        var service = _cache.Get<Service>($"service:{id}");

        // No cache data found, use database
        if (service == null)
        {
            service = await _serviceRepository.GetService(id);
            _cache.Set($"service:{id}", service, TimeSpan.FromMinutes(10)); // Write from DB to cache
        }

        if (service == null) return StatusCode(404);

        return StatusCode(200, service);
    }
}