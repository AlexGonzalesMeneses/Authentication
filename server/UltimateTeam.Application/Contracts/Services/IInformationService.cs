using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Application.Contracts.Services
{
    public interface IInformationService
    {
        Task<NoteResponseDto> GetNoteById(Guid id);
    }
}
