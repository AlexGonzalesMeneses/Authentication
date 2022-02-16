using System;

namespace UltimateTeam.Domain.Models
{
    public abstract class ModelBase
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Favorite { get; set; }
    }
}