using System;
using System.Collections.Generic;
using Dev33.UltimateTeam.Domain.Enums;
using Dev33.UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Domain.Models
{
    public class Information : ModelBase
    {
        public InformationType InformationType { get; set; }
        public List<Tag> Tags { get; set; } = new List<Tag>();
        public EncryptorType EncryptorType { get; set; }
        public Guid ContainerId { get; set; }
        public Container Container { get; set; }
        public string Description { get; set; }
    }
}