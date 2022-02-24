using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Application.Contracts.Repositories
{
    public interface IAddressRepository : IAsyncRepository<Address>
    {
        Task<IEnumerable<Address>> GetAddressesByContactId(Guid contactId);
        Task RemoveAddressesByContactId(Guid contactId);
        Task AddAddresses(List<Address> addresses);
    }
}
