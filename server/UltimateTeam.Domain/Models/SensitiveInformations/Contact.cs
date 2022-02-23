using System;
using System.Collections.Generic;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Contact
    {
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string FullName { get; set; }

        [Display(Encrypted = false, Sensitive = false)]
        public string FirstName { get; set; }

        [Display(Encrypted = false, Sensitive = false)]
        public string LastName { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Business { get; set; }
        public List<Email> Emails { get; set; } = new List<Email>();
        public List<Phone> Phones { get; set; } = new List<Phone>();
        public List<Address> Addresses { get; set; } = new List<Address>();

        [Display(Encrypted = true, Sensitive = false)]
        public string Zip { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Country { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string State { get; set; }
        public DateTime Birthday { get; set; }
    }
}