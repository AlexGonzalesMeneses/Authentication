using Dev33.UltimateTeam.Application.Contracts.Repositories;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Application.Contracts.Repositories
{
    public interface ICreditCardRepository : IAsyncRepository<CreditCard>
    {
    }
}