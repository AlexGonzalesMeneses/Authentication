using System;

namespace UltimateTeam.Domain.Models
{
    public class Tag
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid InformationId { get; set; }
        public Information Information { get; set; }
    }
}