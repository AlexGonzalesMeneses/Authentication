using System;
using Dev33.UltimateTeam.Domain.Models;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class CreditCard
    {
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = true)]
        public string Number { get; set; }

        [Display(Encrypted = true, Sensitive = true)]
        public string Issuer { get; set; }

        public DateTime Expiration { get; set; }

        [Display(Encrypted = true, Sensitive = true)]
        public string Cvv { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string CardName { get; set; }
    }
}