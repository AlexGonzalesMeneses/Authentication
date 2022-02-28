using Dev33.UltimateTeam.Domain.Models;
using System;
using System.Collections.Generic;

#nullable disable

namespace Dev33.UltimateTeam.Domain
{
    public partial class Container
    {
        public Container()
        {
            Information = new HashSet<Information>();
        }

        public Guid Id { get; set; }
        [Display(Encrypted = true, Sensitive = false)]
        public string Name { get; set; }
        public bool Favorite { get; set; }
        public Guid UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Information> Information { get; set; }
    }
}
