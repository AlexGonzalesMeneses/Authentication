using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Application.Dtos;
using Dev33.UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Application.Services
{
    public class AuthenticateService : IAuthenticateService
    {
        private readonly IUnitOfWork unitOfWork;

        public AuthenticateService(IUnitOfWork unitOfWork)
        { 
            this.unitOfWork = unitOfWork;
        }

        public async Task<UserResponseDto> AuthenticateAsync(UserRequestDto request)
        {
            var user = await unitOfWork.UserRepository.GetByEmailAsync(request.Email)
                ?? await unitOfWork.UserRepository.GetByUserNameAsync(request.UserName);
            
            if (user == null)
            {
                throw new Exception("User not found");
            }

            if (!user.Password.Equals(request.Password))
            {
                throw new Exception("Password is incorrect");
            }

            var response = new UserResponseDto
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
                FullName = user.FullName
            };

            return response;
        }

        public async Task<UserResponseDto> RegisterAsync(User request)
        {
            var user = await unitOfWork.UserRepository.GetByEmailAsync(request.Email)
                ?? await unitOfWork.UserRepository.GetByUserNameAsync(request.UserName);

            if (user != null)
            {
                throw new Exception("User already exists");
            }

            await unitOfWork.UserRepository.AddAsync(request);

            var response = new UserResponseDto { Id = request.Id, UserName = request.UserName, Email = request.Email, FullName = request.FullName };

            return response;
        }
    }
}
