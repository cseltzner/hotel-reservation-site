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
        return Ok(await _serviceRepository.GetServices());
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
        var service = await _serviceRepository.GetService(id);

        if (service == null) return NotFound();

        return Ok(service);
    }
}