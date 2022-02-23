using System;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Note
    {
        [Display(Encrypted = false, Sensitive = false)]
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Text { get; set; }
    }
}