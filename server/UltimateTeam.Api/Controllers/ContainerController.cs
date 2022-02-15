using Dev33.UltimateTeam.Api.Services.LoggerService;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Application.Dtos;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dev33.UltimateTeam.Api.Controllers
{
    [Route("api/users/{userId:guid}/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class ContainerController : ControllerBase
    {
        private IContainerService containerService;
        private readonly ILoggerManager loggerManager;

        public ContainerController(IContainerService containerService, ILoggerManager loggerManager)
        {
            this.containerService = containerService;
            this.loggerManager = loggerManager;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContainerResponseDto>>> GetContainersByUserId(Guid userId)
        {
            try
            {
                var containers = await containerService.GetContainersByUserId(userId);

                return Ok(containers);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ContainerResponseDto>> CreateContainer(Guid userId, ContainerRequestDto request)
        {
            try
            {
                var container = await containerService.CreateContainer(userId, request);

                return Ok(container);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{containerId:guid}")]
        public async Task<ActionResult<ContainerResponseDto>> DeleteContainer(Guid userId, Guid containerId)
        {
            try
            {
                await containerService.DeleteContainer(userId, containerId);

                return Ok(containerId);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{containerId:guid}")]
        public async Task<ActionResult<ContainerResponseDto>> GetContainerById(Guid userId, Guid containerId)
        {
            try
            {
                var container = await containerService.GetContainerById(userId, containerId);

                return Ok(container);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{containerId:guid}")]
        public async Task<ActionResult<ContainerResponseDto>> UpdateContainer(Guid userId, Guid containerId, ContainerRequestDto request)
        {
            try
            {
                var container = await containerService.GetContainerById(userId, containerId);

                container.Name = request.Name;
                container.Favorite = request.Favorite;

                await containerService.UpdateContainer(container);

                return Ok(container);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);
                return BadRequest(ex.Message);
            }
        }
    }
}
