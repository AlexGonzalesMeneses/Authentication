using Dev33.UltimateTeam.Domain.Models;
using System;
using System.Collections.Generic;

#nullable disable

namespace Dev33.UltimateTeam.Domain
{
    public partial class Address
    {
        public Guid Id { get; set; }
        [Display(Encrypted=true, Sensitive=false)]
        public string Location { get; set; }
        public Guid ContactId { get; set; }

        public virtual Contact Contact { get; set; }
    }
}
