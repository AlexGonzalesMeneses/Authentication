using System;
using System.Collections.Generic;
using UltimateTeam.Domain.Contracts.Repositories;
using UltimateTeam.Domain.Models;
using UltimateTeam.Infrastructure.DataManagers;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(ContextDB context) : base(context)
        {
        }
    }
}