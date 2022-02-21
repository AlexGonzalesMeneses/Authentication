using AutoMapper;
using Dev33.UltimateTeam.Api.Services.LoggerService;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Application.Dtos;
using Dev33.UltimateTeam.Domain.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UltimateTeam.Application.Dtos;

namespace Dev33.UltimateTeam.Api.Controllers
{
    [Route("api/users/{userId:guid}/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class ContainerController : ControllerBase
    {
        private IContainerService containerService;
        private readonly ILoggerManager loggerManager;
        private IMapper mapper;

        public ContainerController(IContainerService containerService, ILoggerManager loggerManager, IMapper mapper)
        {
            this.containerService = containerService;
            this.loggerManager = loggerManager;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContainerResponseDto>>> GetContainersByUserId(Guid userId)
        {
            try
            {
                var containers = await containerService.GetContainersByUserId(userId);
                var containersDto = mapper.Map<IEnumerable<ContainerResponseDto>>(containers);

                return Ok(containersDto);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ContainerResponseDto>> CreateContainer(ContainerRequestDto request)
        {
            try
            {
                var containerMapped = mapper.Map<Container>(request);
                var container = await containerService.CreateContainer(containerMapped);
                var response = mapper.Map<ContainerResponseDto>(container);

                return Ok(response);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{containerId:guid}")]
        public async Task<ActionResult<ContainerResponseDto>> DeleteContainer(Guid containerId)
        {
            try
            {
                var container = await containerService.DeleteContainer(containerId);
                var response = mapper.Map<ContainerResponseDto>(container);

                return Ok(response);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{containerId:guid}")]
        public async Task<ActionResult<ContainerSpecifyResponseDto>> GetContainerById(Guid containerId)
        {
            try
            {
                var container = await containerService.GetContainerById(containerId);
                var response = mapper.Map<ContainerSpecifyResponseDto>(container);

                return Ok(response);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{containerId:guid}")]
        public async Task<ActionResult<ContainerSpecifyResponseDto>> UpdateContainer(Guid containerId, ContainerRequestDto request)
        {
            try
            {
                var container = await containerService.GetContainerById(containerId);
                container.Name = request.Name;
                container.Favorite = request.Favorite;
                var response = await containerService.UpdateContainer(container);

                return Ok(mapper.Map<ContainerSpecifyResponseDto>(response));
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);

                return BadRequest(ex.Message);
            }
        }
    }
}
