using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Application.Encyptors;
using Dev33.UltimateTeam.Application.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Application.Helpers;
using UltimateTeam.Application.Helpers.Factories;
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

                IEncryptor encryptor = FactoryEncryptor.Create(note.EncryptionType);

                var informationMapped = InformationMapper.Map(note);

                var noteMapped = NoteMapper.Map(note, informationMapped.Id);

                var noteEncrypted = HandleEncryption.HandleEncryptData(noteMapped, encryptor, true);

                var inforamationCreated = await unitOfWork.InformationRepository.AddAsync(informationMapped);
                var noteCreated = await unitOfWork.NoteRepository.AddAsync((Note)noteEncrypted);

                var tags = await unitOfWork.TagRepository.GetTagsAsync(inforamationCreated.Id);
                inforamationCreated.Tags = (List<Tag>)tags;

                return NoteMapper.Map(noteCreated, inforamationCreated);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.InnerException.Message);
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
            var note = await unitOfWork.NoteRepository.GetByIdAsync(id);

            if (information == null || note == null)
            {
                throw new ArgumentException("Note not found");
            }

            IEncryptor encryptor = FactoryEncryptor.Create(information.EncryptorType.ToString());
            var noteDecrypted = HandleEncryption.HandleEncryptData(note, encryptor, false);

            return NoteMapper.Map((Note)noteDecrypted, information);
        }

        public async Task<NoteResponseDto> UpdateNote(NoteRequestDto note, Guid noteId)
        {
            var informationExisted = await unitOfWork.InformationRepository.GetByIdAsync(noteId);
            var noteExisted = await unitOfWork.NoteRepository.GetByIdAsync(noteId);

            if (informationExisted == null || noteExisted == null)
            {
                throw new ArgumentException("Note not found");
            }

            var informationMapped = InformationMapper.Map(noteId, note);
            var noteMapped = NoteMapper.Map(note, informationMapped.Id);
            await unitOfWork.TagRepository.RemoveTagsAsync(informationExisted.Id);
            await unitOfWork.TagRepository.AddTagsAsync(informationMapped.Tags);

            IEncryptor encryptor = FactoryEncryptor.Create(informationMapped.EncryptorType.ToString());
            var noteEncrypted = HandleEncryption.HandleEncryptData(noteMapped, encryptor, true);

            await unitOfWork.InformationRepository.UpdateAsync(informationMapped);
            await unitOfWork.NoteRepository.UpdateAsync((Note)noteEncrypted);

            return NoteMapper.Map(noteMapped, informationMapped);
        }
    }
}
