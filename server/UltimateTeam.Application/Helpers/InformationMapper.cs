using System;
using System.Collections.Generic;
using Dev33.UltimateTeam.Application.Dtos;
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
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), note.EncryptionType),
                Tags = TagMapper.GetTags(note.Tags, id)
            };
        }

        public static Information Map(KeyRequestDto key)
        {
            var id = Guid.NewGuid();

            return new Information
            {
                Id = id,
                ContainerId = key.ContainerId,
                Description = key.Description,
                Favorite = key.Favorite,
                Name = key.Name,
                InformationType = (InformationType)Enum.Parse(typeof(InformationType), key.Type),
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), key.EncryptionType),
                Tags = TagMapper.GetTags(key.Tags, id)
            };
        }

        public static Information Map(ContactRequestDto contact)
        {
            var id = Guid.NewGuid();

            return new Information
            {
                Id = id,
                ContainerId = contact.ContainerId,
                Description = contact.Description,
                Favorite = contact.Favorite,
                Name = contact.Name,
                InformationType = (InformationType)Enum.Parse(typeof(InformationType), contact.Type),
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), contact.EncryptionType),
                Tags = TagMapper.GetTags(contact.Tags, id)
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
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), note.EncryptionType),
                Tags = TagMapper.GetTags(note.Tags, id)
            };
        }

        public static Information Map(Guid id, KeyRequestDto key)
        {
            return new Information
            {
                Id = id,
                ContainerId = key.ContainerId,
                Description = key.Description,
                Favorite = key.Favorite,
                Name = key.Name,
                InformationType = (InformationType)Enum.Parse(typeof(InformationType), key.Type),
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), key.EncryptionType),
                Tags = TagMapper.GetTags(key.Tags, id)
            };
        }

        public static Information Map(Guid id, ContactRequestDto contact)
        {
            return new Information
            {
                Id = id,
                ContainerId = contact.ContainerId,
                Description = contact.Description,
                Favorite = contact.Favorite,
                Name = contact.Name,
                InformationType = (InformationType)Enum.Parse(typeof(InformationType), contact.Type),
                EncryptorType = (EncryptorType)Enum.Parse(typeof(EncryptorType), contact.EncryptionType),
                Tags = TagMapper.GetTags(contact.Tags, id)
            };
        }
    }
}