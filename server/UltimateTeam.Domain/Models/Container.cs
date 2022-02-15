using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dev33.UltimateTeam.Domain.Models
{
    public class Container
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Favorite { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
