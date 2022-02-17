using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Application.Contracts.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Application.Services
{
    public class InformationService : IInformationService
    {
        private readonly IUnitOfWork unitOfWork;

        public InformationService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        
        public async Task<NoteResponseDto> GetNoteById(Guid id)
        {
            var Information = await unitOfWork.InformationRepository.GetByIdAsync(id);

            if (Information == null)
            {
                throw new ArgumentException("Information not found");
            }

            var note = await unitOfWork.NoteRepository.GetByIdAsync(id);

            if (note == null)
            {
                throw new ArgumentException("Note not found");
            }

            return new NoteResponseDto
            {
                Name = Information.Name,
                Text = note.Text,
                Description = Information.Description,
                Type = Information.InformationType.ToString(),
                Favorite = Information.Favorite,
                EncryptionType = Information.EncryptorType.ToString()
            };
        }
    }
}
