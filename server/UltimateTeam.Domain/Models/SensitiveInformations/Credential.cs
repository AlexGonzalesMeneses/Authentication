using System;
using System.Collections.Generic;
using Dev33.UltimateTeam.Domain.Models;
using Dev33.UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Credential
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public List<Url> Urls { get; set; } = new List<Url>();
    }
}