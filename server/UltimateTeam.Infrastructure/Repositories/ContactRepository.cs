using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Infrastructure.DataManagers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Infrastructure.Repositories
{
    public class ContactRepository : BaseRepository<Contact>, IContactRepository
    {
        public ContactRepository(ContextDB context) : base(context)
        {
        }
    }
}
