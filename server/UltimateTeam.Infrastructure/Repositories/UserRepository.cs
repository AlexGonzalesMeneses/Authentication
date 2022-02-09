using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UltimateTeam.Application.Contracts.Repositories;
using UltimateTeam.Domain.Models;
using UltimateTeam.Infrastructure.DataManagers;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(ContextDB context) : base(context)
        {
        }
        public async Task<User> GetByEmailAsync(string email)
        {
            return await context.Set<User>().FirstOrDefaultAsync(x => x.Email == email);
        }

        public async Task<User> GetByUserNameAsync(string userName)
        {
            return await context.Set<User>().FirstOrDefaultAsync(x => x.UserName == userName);
        }
    }
}