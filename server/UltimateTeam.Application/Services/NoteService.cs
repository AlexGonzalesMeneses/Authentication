using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Application.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Application.Helpers;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Application.Services
{
    public class NoteService : Contracts.Services.INoteService
    {
        private readonly IUnitOfWork unitOfWork;

        public NoteService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<NoteResponseDto> CreateNote(NoteRequestDto note)
        {
            try
            {
                var informationMapped = InformationMapper.Map(note);
                var noteMapped = NoteMapper.Map(note, informationMapped.Id);

                var inforamationCreated = await unitOfWork.InformationRepository.AddAsync(informationMapped);
                var noteCreated = await unitOfWork.NoteRepository.AddAsync(noteMapped);

                var tags = await unitOfWork.TagRepository.GetTagsAsync(inforamationCreated.Id);

                await unitOfWork.SaveChangesAsync();

                return NoteMapper.Map(noteCreated, inforamationCreated, tags);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<NoteResponseDto> DeleteNote(Guid id)
        {
            try
            {
                var note = await unitOfWork.NoteRepository.GetByIdAsync(id);
                var information = await unitOfWork.InformationRepository.GetByIdAsync(note.Id);
                var tags = await unitOfWork.TagRepository.GetTagsAsync(information.Id);

                await unitOfWork.NoteRepository.DeleteAsync(note);
                await unitOfWork.InformationRepository.DeleteAsync(information);

                return NoteMapper.Map(note, information, tags);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<NoteResponseDto> GetNoteById(Guid id)
        {
            var information = await unitOfWork.InformationRepository.GetByIdAsync(id);
            var tags = await unitOfWork.TagRepository.GetTagsAsync(information.Id);

            if (information == null)
            {
                throw new ArgumentException("Information not found");
            }

            var note = await unitOfWork.NoteRepository.GetByIdAsync(id);

            if (note == null)
            {
                throw new ArgumentException("Note not found");
            }

            return NoteMapper.Map(note, information, tags);
        }

        public Task<NoteResponseDto> UpdateNote(NoteRequestDto note)
        {
            throw new NotImplementedException();
        }
    }
}
