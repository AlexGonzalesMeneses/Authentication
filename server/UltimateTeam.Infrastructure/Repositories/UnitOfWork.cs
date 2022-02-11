using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Infrastructure.DataManagers;

namespace Dev33.UltimateTeam.Infrastructure.Repositories
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