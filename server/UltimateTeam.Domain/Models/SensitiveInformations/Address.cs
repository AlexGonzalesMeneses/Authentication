using System;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Address
    {
        public Guid Id { get; set; }
        public string AddressEntry { get; set; }
        public Guid ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}