using API.Interfaces.Repositories;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServiceRepository _serviceRepository;

    public ServicesController(IServiceRepository serviceRepository)
    {
        _serviceRepository = serviceRepository;
    }

    /// <summary>
    /// Returns a list of services
    /// </summary>
    /// <returns>200 - List of services</returns>
    [HttpGet]
    public async Task<IActionResult> GetServices()
    {
        return Ok(await _serviceRepository.GetServices());
    }

    /// <summary>
    /// Returns service with the specified id
    /// </summary>
    /// <param name="id">Id of the service</param>
    /// <returns>
    ///   <para>200 - Service with the given Id</para>
    ///   404 - No service found with given Id
    /// </returns>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetService(int id)
    {
        var service = await _serviceRepository.GetService(id);

        if (service == null) return NotFound();

        return Ok(service);
    }
}