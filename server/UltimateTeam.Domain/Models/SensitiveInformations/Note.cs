using System;
using Dev33.UltimateTeam.Domain.Models;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Note
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
    }
}