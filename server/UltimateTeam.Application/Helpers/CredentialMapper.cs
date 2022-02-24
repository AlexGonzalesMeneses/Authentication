using System;
using Dev33.UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Application.Helpers
{
    public static class CredentialMapper
    {
        public static Credential Map(CredentialRequestDto credential, Guid id)
        {
            return new Credential
            {
                Id = id,
                Username = credential.Username,
                Password = credential.Password,
                Urls = UrlMapper.Map(credential.Urls, id)
            };
        }

        public static CredentialResponseDto Map(Credential credential, Information information)
        {
            return new CredentialResponseDto
            {
                Id = credential.Id,
                Username = credential.Username,
                Password = credential.Password,
                Urls = UrlMapper.Map(credential.Urls),
                Name = information.Name,
                Description = information.Description,
                Favorite = information.Favorite,
                ContainerId = information.ContainerId,
                Type = information.InformationType.ToString(),
                EncryptionType = information.EncryptorType.ToString(),
                Tags = TagMapper.Map(information.Tags)
            };
        }
    }
}