using System;
using Dev33.UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Application.Helpers
{
    public static class KeyMapper
    {
        public static Key Map(KeyRequestDto key, Guid id)
        {
            return new Key
            {
                Id = id,
                Serial = key.Serial
            };
        }

        public static KeyResponseDto Map(Key key, Information information)
        {
            return new KeyResponseDto
            {
                Name = information.Name,
                Description = information.Description,
                Serial = key.Serial,
                Favorite = information.Favorite,
                EncryptionType = information.EncryptorType.ToString(),
                Type = information.InformationType.ToString(),
                Tags = TagMapper.Map(information.Tags)
            };
        }
    }
}