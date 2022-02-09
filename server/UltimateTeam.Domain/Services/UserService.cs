using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Contracts.Repositories;
using UltimateTeam.Domain.Contracts.Services;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        { 
            this.unitOfWork = unitOfWork;
        }

        public void DeleteUser(Guid id)
        {
            throw new NotImplementedException();
        }

        public User GetUserById(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetUsers()
        {
            var users = unitOfWork.UserRepository.GetAll();
            
            return users;
        }

        public User InsertUser(User user)
        {
            throw new NotImplementedException();
        }

        public User UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
    }
}
