using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Domain.Contracts.Services
{
    public interface IUserService
    {
        User GetUserById(Guid id);
        IEnumerable<User> GetUsers();
        User InsertUser(User user);
        User UpdateUser(User user);
        void DeleteUser(Guid id);
    }
}
