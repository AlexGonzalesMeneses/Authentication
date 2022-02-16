using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Infrastructure.DataManagers;
using Dev33.UltimateTeam.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class InformationRepository : BaseRepository<Information>, IInformationRepository
    {
        public InformationRepository(ContextDB context) : base(context)
        {
        }

        public async Task<IEnumerable<Information>> GetInformationsByContainerId(Guid containerId)
        {
            return await context.Set<Information>().Where(x => x.ContainerId == containerId).ToListAsync();
        }
    }
}