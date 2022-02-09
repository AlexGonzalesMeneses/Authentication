using System.Threading.Tasks;
using UltimateTeam.Domain.Contracts.Repositories;
using UltimateTeam.Infrastructure.DataManagers;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ContextDB context;
        
        public UnitOfWork(ContextDB context)
        {
            this.context = context;
        }

        public IUserRepository UserRepository => new UserRepository(context);

        public async Task SaveChangesAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}