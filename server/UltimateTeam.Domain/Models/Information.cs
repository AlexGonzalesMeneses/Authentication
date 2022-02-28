﻿using Dev33.UltimateTeam.Domain.Enums;
using System;
using System.Collections.Generic;

#nullable disable

namespace Dev33.UltimateTeam.Domain
{
    public partial class Information
    {
        public Information()
        {
            Tags = new HashSet<Tag>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Favorite { get; set; }
        public string Description { get; set; }
        public Guid ContainerId { get; set; }
        public InformationType Type { get; set; }
        public EncryptorType EncryptionType { get; set; }

        public virtual Container Container { get; set; }
        public virtual Contact Contact { get; set; }
        public virtual Credential Credential { get; set; }
        public virtual Key Key { get; set; }
        public virtual Note Note { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}
