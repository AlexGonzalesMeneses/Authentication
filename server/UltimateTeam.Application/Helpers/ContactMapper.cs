using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Dtos;
using UltimateTeam.Application.Helpers;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Application.Helpers
{
    public static class ContactMapper
    {
        public static Contact Map(ContactRequestDto contact, Guid id)
        {
            return new Contact
            {
                Id = id,
                FullName = contact.FullName,
                FirstName = contact.FirstName,
                LastName = contact.LastName,
                Business = contact.Business,
                Zip = contact.Zip,
                Country = contact.Country,
                State = contact.State,
                Birthday = contact.Birthday,
                Emails = EmailMapper.Map(contact.Emails, id),
                Phones = PhoneMapper.Map(contact.Phones, id),
                Addresses = AddressMapper.Map(contact.Addresses, id),
            };
        }

        public static ContactResponseDto Map(Contact contact, Information information)
        {
            return new ContactResponseDto
            {
                Id = contact.Id,
                FullName = contact.FullName,
                FirstName = contact.FirstName,
                LastName = contact.LastName,
                Business = contact.Business,
                Zip = contact.Zip,
                Country = contact.Country,
                State = contact.State,
                Birthday = contact.Birthday,
                Emails = EmailMapper.Map(contact.Emails),
                Phones = PhoneMapper.Map(contact.Phones),
                Addresses = AddressMapper.Map(contact.Addresses),
                Name = information.Name,
                Description = information.Description,
                Favorite = information.Favorite,
                Tags = TagMapper.Map(information.Tags),
                Type = information.InformationType.ToString(),
                EncryptionType = information.EncryptorType.ToString()
            };
        }
    }
}
