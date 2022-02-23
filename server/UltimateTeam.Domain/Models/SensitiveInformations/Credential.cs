using System;
using System.Collections.Generic;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Credential
    {
        public Guid Id { get; set; }
        [Display(Encrypted = true, Sensitive = false)]
        public string Username { get; set; }
        [Display(Encrypted = true, Sensitive = true)]
        public string Password { get; set; }
        public List<Url> Urls { get; set; } = new List<Url>();
    }
}