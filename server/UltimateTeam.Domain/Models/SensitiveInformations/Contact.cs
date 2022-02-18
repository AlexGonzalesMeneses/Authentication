using System;
using System.Collections.Generic;
using Dev33.UltimateTeam.Domain.Models;
using Dev33.UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Contact : Information
    {
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Business { get; set; }
        public List<Email> Emails { get; set; } = new List<Email>();
        public List<Phone> Phones { get; set; } = new List<Phone>();
        public List<Address> Addresses { get; set; } = new List<Address>();
        public string Zip { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public DateTime? Birthday { get; set; }
    }
}