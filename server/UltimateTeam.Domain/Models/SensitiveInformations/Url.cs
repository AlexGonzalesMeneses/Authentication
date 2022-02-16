using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Url
    {
        public Guid Id { get; set; }
        public string Address { get; set; }
        public Guid CredentialId { get; set; }
        public Credential Credential { get; set; }
    }
}
