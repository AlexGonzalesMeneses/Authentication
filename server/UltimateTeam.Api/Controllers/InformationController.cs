using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Api.Services.LoggerService;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Domain.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UltimateTeam.Api.Controllers
{
    [Route("api/users/{userId:guid}/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class InformationController : ControllerBase
    {
        private readonly ISearchService searchService;
        private readonly ILoggerManager logger;

        public InformationController(ISearchService searchService, ILoggerManager logger)
        {
            this.searchService = searchService;
            this.logger = logger;
        }

        [HttpGet("searchTerm")]
        public async Task<IEnumerable<Information>> Search(Guid userId, [FromQuery] string searchTerm)
        {
            try
            {
                return await searchService.Search(userId, searchTerm);
            }
            catch (Exception ex)
            {
                logger.LogError(ex);
                return null;
            }
        }
    }
}