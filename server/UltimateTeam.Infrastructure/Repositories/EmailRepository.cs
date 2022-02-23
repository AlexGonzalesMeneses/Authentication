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
    public class EmailRepository : BaseRepository<Email>, IEmailRepository
    {
        public EmailRepository(ContextDB context) : base(context)
        {
        }

        public async Task<IEnumerable<Email>> GetEmailsByContactId(Guid contactId)
        {
            return await context.Set<Email>().Where(x => x.ContactId == contactId).ToListAsync();
        }

        public async Task RemoveEmailsByContactId(Guid contactId)
        {
            var emails = await GetEmailsByContactId(contactId);

            foreach (var email in emails)
            {
                await DeleteAsync(email);
            }

            await context.SaveChangesAsync();
        }
    }
}
