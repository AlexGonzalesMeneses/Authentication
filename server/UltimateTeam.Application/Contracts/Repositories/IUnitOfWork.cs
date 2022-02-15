using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;

namespace Dev33.UltimateTeam.Application.Contracts.Repositories
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }
        IContainerRepository ContainerRepository { get; }
        Task SaveChangesAsync();
    }
}
