

using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UltimateTeam.Api.Services.LoggerService;
using UltimateTeam.Domain.Contracts.Services;

namespace UltimateTeam.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        private readonly ILoggerManager logger;

        public UserController(IUserService userService, ILoggerManager logger)
        {
            this.userService = userService;
            this.logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var users = userService.GetUsers();
                return Ok(users);
            }
            catch (Exception e)
            {
                logger.LogError(e);
                return StatusCode(500, e.Message);
            }
        }
    }
}