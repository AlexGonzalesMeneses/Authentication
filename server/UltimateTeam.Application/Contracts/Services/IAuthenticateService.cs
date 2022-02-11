using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Dtos;
using Dev33.UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Application.Contracts.Services
{
    public interface IAuthenticateService
    {
        Task<UserResponseDto> AuthenticateAsync(UserRequestDto request);
        Task<UserResponseDto> RegisterAsync(User request);
    }
}
