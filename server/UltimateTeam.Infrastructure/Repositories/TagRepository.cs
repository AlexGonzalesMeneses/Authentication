using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Infrastructure.DataManagers;
using Dev33.UltimateTeam.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using UltimateTeam.Application.Contracts.Repositories;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class TagRepository : BaseRepository<Tag>, ITagRepository
    {
        public TagRepository(ContextDB context) : base(context)
        {
        }

        public async Task<IEnumerable<Tag>> GetTagsAsync(Guid informationId)
        {
            return await context.Set<Tag>().Where(x => x.InformationId == informationId).ToListAsync();
        }
    }
}