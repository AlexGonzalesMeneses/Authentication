using System;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Key
    {
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Serial { get; set; }
    }
}