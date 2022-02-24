using Dev33.UltimateTeam.Infrastructure.DataManagers;
using Dev33.UltimateTeam.Infrastructure.Repositories;
using UltimateTeam.Application.Contracts.Repositories;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class CredentialRepository : BaseRepository<Credential>, ICredentialRepository
    {
        public CredentialRepository(ContextDB context) : base(context)
        {
        }
    }
}