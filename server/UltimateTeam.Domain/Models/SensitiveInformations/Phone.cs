using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Phone
    {
        public Guid Id { get; set; }
        public string Number { get; set; }
        public Guid ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}
