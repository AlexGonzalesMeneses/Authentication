using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Application.Contracts.Repositories
{
    public interface IEmailRepository : IAsyncRepository<Email>
    {
        Task<IEnumerable<Email>> GetEmailsByContactId(Guid contactId);
        Task RemoveEmailsByContactId(Guid contactId);
        Task AddEmails(List<Email> emails);
    }
}
