using System;
using System.Collections.Generic;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Application.Helpers
{
    public static class NoteMapper
    {
        public static Note Map(NoteRequestDto note, Guid id)
        {
            return new Note
            {
                Id = id,
                Text = note.Text,
            };
        }

        public static NoteResponseDto Map(Note note, Information information)
        {
            return new NoteResponseDto
            {
                Name = information.Name,
                Text = note.Text,
                Description = information.Description,
                Type = information.InformationType.ToString(),
                Favorite = information.Favorite,
                EncryptionType = information.EncryptorType.ToString(),
                Tags = TagMapper.Map(information.Tags)
            };
        }
    }
}