using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Application.Dtos;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Application.Contracts.Services
{
    public interface IAuthenticateService
    {
        Task<UserResponseDto> AuthenticateAsync(UserRequestDto request);
        Task<UserResponseDto> RegisterAsync(User request);
    }
}
