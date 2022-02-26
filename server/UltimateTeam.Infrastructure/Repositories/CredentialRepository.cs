using Dev33.UltimateTeam.Domain;
using Dev33.UltimateTeam.Infrastructure;
using Dev33.UltimateTeam.Infrastructure.Repositories;
using UltimateTeam.Application.Contracts.Repositories;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class CredentialRepository : BaseRepository<Credential>, ICredentialRepository
    {
        public CredentialRepository(SafeInformationDBContext context) : base(context)
        {
        }
    }
}