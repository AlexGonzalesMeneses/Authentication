using System;
using Dev33.UltimateTeam.Application.Dtos;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Application.Helpers
{
    public static class CreditCardMapper
    {
        public static CreditCard Map(CreditCardRequestDto creditCard, Guid id)
        {
            return new CreditCard
            {
                Id = id,
                Number = creditCard.Number,
                Issuer = creditCard.Issuer,
                Cvv = creditCard.Cvv,
                Expiration = creditCard.Expiration,
                CardName = creditCard.CardName,
            };
        }

        public static CreditCardResponseDto Map(CreditCard creditCard, Information information)
        {
            return new CreditCardResponseDto
            {
                Id = creditCard.Id,
                Number = creditCard.Number,
                Issuer = creditCard.Issuer,
                Cvv = creditCard.Cvv,
                Expiration = (DateTime)creditCard.Expiration,
                Favorite = information.Favorite,
                Name = information.Name,
                EncryptionType = information.EncryptorType.ToString(),
                Type = information.InformationType.ToString(),
                Description = information.Description,
                Tags = TagMapper.Map(information.Tags)
            };
        }
    }
}