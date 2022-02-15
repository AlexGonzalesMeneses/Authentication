using Dev33.UltimateTeam.Application.Dtos;
using Dev33.UltimateTeam.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dev33.UltimateTeam.Application.Contracts.Services
{
    public interface IContainerService
    {
        Task<IEnumerable<ContainerResponseDto>> GetContainersByUserId(Guid request);

        Task<ContainerResponseDto> CreateContainer(Guid userId, ContainerRequestDto request);
        Task DeleteContainer(Guid userId, Guid containerId);
        Task<ContainerResponseDto> GetContainerById(Guid userId, Guid containerId);
        Task UpdateContainer(ContainerResponseDto container);
    }
}
