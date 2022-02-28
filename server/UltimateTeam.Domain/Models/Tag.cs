using System;
using System.Collections.Generic;

#nullable disable

namespace Dev33.UltimateTeam.Domain
{
    public partial class Tag
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid InformationId { get; set; }

        public virtual Information Information { get; set; }
    }
}
