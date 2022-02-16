using System;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Email
    {
        public Guid Id { get; set; }
        public string Mail { get; set; }
        public Guid ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}