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
    public class PhoneRepository : BaseRepository<Phone>, IPhoneRepository
    {
        public PhoneRepository(ContextDB context) : base(context)
        {
        }

        public async Task<IEnumerable<Phone>> GetPhonesByContactId(Guid contactId)
        {
            return await context.Set<Phone>().Where(x => x.ContactId == contactId).ToListAsync();
        }

        public async Task RemovePhonesByContactId(Guid contactId)
        {
            var phones = await GetPhonesByContactId(contactId);

            foreach (var phone in phones)
            {
                await DeleteAsync(phone);
            }

            await context.SaveChangesAsync();
        }
    }
}
