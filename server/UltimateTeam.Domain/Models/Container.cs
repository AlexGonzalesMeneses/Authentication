using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Domain.Models
{
    public class Container : ModelBase
    {
        public Guid UserId { get; set; }
        public User User { get; set; }
        public List<Information> Informations { get; set; } = new List<Information>();
    }
}
