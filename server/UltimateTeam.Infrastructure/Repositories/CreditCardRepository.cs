
using Dev33.UltimateTeam.Domain;
using Dev33.UltimateTeam.Infrastructure;
using Dev33.UltimateTeam.Infrastructure.Repositories;
using UltimateTeam.Application.Contracts.Repositories;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class CreditCardRepository : BaseRepository<CreditCard>, ICreditCardRepository
    {
        public CreditCardRepository(SafeInformationDBContext context) : base(context)
        {
        }
    }
}