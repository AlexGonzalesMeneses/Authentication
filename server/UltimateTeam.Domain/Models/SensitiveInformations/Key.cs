using System;
using Dev33.UltimateTeam.Domain.Models;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Key
    {
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Serial { get; set; }
    }
}