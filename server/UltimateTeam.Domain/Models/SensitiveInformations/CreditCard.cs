using System;
using Dev33.UltimateTeam.Domain.Models;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class CreditCard : Information
    {
        public string Number { get; set; }
        public string Issuer { get; set; }
        public DateTime? Expiration { get; set; }
        public string Cvv { get; set; }
        public string CardName { get; set; }
    }
}