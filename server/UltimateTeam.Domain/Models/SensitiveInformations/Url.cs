using System;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Url
    {
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Address { get; set; }
        public Guid CredentialId { get; set; }
        public Credential Credential { get; set; }
    }
}
