using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Infrastructure.DataManagers;
using UltimateTeam.Application.Contracts.Repositories;
using UltimateTeam.Infrastructure.Repositories;

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
        public IContainerRepository ContainerRepository => new ContainerRepository(context);
        public IInformationRepository InformationRepository => new InformationRepository(context);
        public INoteRepository NoteRepository => new NoteRepository(context);
        public ITagRepository TagRepository => new TagRepository(context);

        public async Task SaveChangesAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}