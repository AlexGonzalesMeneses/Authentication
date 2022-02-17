using System;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Api.Services.LoggerService;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UltimateTeam.Application.Dtos;

namespace UltimateTeam.Api.Controllers
{
    [Route("api/users/{userId:guid}/containers/{containerId:guid}/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private IInformationService informationService;
        private readonly ILoggerManager loggerManager;

        public NoteController(IInformationService informationService, ILoggerManager loggerManager)
        {
            this.informationService = informationService;
            this.loggerManager = loggerManager;
        }

        [HttpGet("{noteId:guid}")]
        public async Task<ActionResult<NoteResponseDto>> GetNoteById(Guid containerId, Guid noteId)
        {
            try
            {
                var note = await informationService.GetNoteById(noteId);

                return Ok(note);
            }
            catch (Exception ex)
            {
                loggerManager.LogError(ex);

                return BadRequest(ex.Message);
            }
        }
    }
}