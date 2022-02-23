using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Infrastructure.DataManagers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Infrastructure.Repositories
{
    public class AddressRepository : BaseRepository<Address>, IAddressRepository
    {
        public AddressRepository(ContextDB context) : base(context)
        {
        }

        public async Task<IEnumerable<Address>> GetAddressesByContactId(Guid contactId)
        {
            return await context.Set<Address>().Where(x => x.ContactId == contactId).ToListAsync();
        }

        public async Task RemoveAddressesByContactId(Guid contactId)
        {
            var addresses = await GetAddressesByContactId(contactId);

            foreach (var address in addresses)
            {
                await DeleteAsync(address);
            }

            await context.SaveChangesAsync();
        }
    }
}
