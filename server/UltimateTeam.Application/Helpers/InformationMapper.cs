using System;
using System.Collections.Generic;
using Dev33.UltimateTeam.Domain.Enums;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Application.Helpers;
using UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Application.Helpers
{
    public class InformationMapper
    {
        public static Information Map(NoteRequestDto note)
        {
            var id = Guid.NewGuid();

            return new Information
            {
                Id = id,
                ContainerId = note.ContainerId,
                Description = note.Description,
                Favorite = note.Favorite,
                Name = note.Name,
                InformationType = (InformationType)Enum.Parse(typeof(InformationType), note.Type),
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), note.EncryptorType),
                Tags = TagMapper.GetTags(note.Tags, id)
            };
        }

        public static Information Map(Guid id, NoteRequestDto note)
        {
            return new Information
            {
                Id = id,
                ContainerId = note.ContainerId,
                Description = note.Description,
                Favorite = note.Favorite,
                Name = note.Name,
                InformationType = (InformationType)Enum.Parse(typeof(InformationType), note.Type),
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), note.EncryptorType),
                Tags = TagMapper.GetTags(note.Tags, id)
            };
        }
    }
}