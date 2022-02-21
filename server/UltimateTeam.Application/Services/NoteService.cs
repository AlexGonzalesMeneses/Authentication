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
    public class NoteService : INoteService
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
                var containerExisted = await unitOfWork.ContainerRepository.GetByIdAsync(note.ContainerId);

                if (containerExisted == null)
                {
                    throw new Exception("Not found container");
                }

                var informationMapped = InformationMapper.Map(note);
                //informationMapped.Container = containerExisted;

                var noteMapped = NoteMapper.Map(note, informationMapped.Id);

                var inforamationCreated = await unitOfWork.InformationRepository.AddAsync(informationMapped);
                var noteCreated = await unitOfWork.NoteRepository.AddAsync(noteMapped);

                var tags = await unitOfWork.TagRepository.GetTagsAsync(inforamationCreated.Id);
                inforamationCreated.Tags = (List<Tag>)tags;

                return NoteMapper.Map(noteCreated, inforamationCreated);
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

                information.Tags = (List<Tag>)tags;

                await unitOfWork.NoteRepository.DeleteAsync(note);
                await unitOfWork.InformationRepository.DeleteAsync(information);

                return NoteMapper.Map(note, information);
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
            information.Tags = (List<Tag>)tags;

            if (information == null)
            {
                throw new ArgumentException("Information not found");
            }

            var note = await unitOfWork.NoteRepository.GetByIdAsync(id);

            if (note == null)
            {
                throw new ArgumentException("Note not found");
            }

            return NoteMapper.Map(note, information);
        }

        public async Task<NoteResponseDto> UpdateNote(NoteRequestDto note, Guid noteId)
        {
            var informationExisted = await unitOfWork.InformationRepository.GetByIdAsync(noteId);
            var noteExisted = await unitOfWork.NoteRepository.GetByIdAsync(noteId);

            if (informationExisted == null)
            {
                throw new ArgumentException("Information not found");
            }

            if (noteExisted == null)
            {
                throw new ArgumentException("Note not found");
            }

            var informationMapped = InformationMapper.Map(noteId, note);
            var noteMapped = NoteMapper.Map(note, informationMapped.Id);
            await unitOfWork.TagRepository.RemoveTagsAsync(informationExisted.Id);
            await unitOfWork.TagRepository.AddTagsAsync(informationMapped.Tags);
            await unitOfWork.InformationRepository.UpdateAsync(informationMapped);
            await unitOfWork.NoteRepository.UpdateAsync(noteMapped);

            return NoteMapper.Map(noteMapped, informationMapped);
        }
    }
}
