using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Application.Dtos;
using Dev33.UltimateTeam.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dev33.UltimateTeam.Application.Services
{
    public class ContainerService : IContainerService
    {
        private readonly IUnitOfWork unitOfWork;

        public ContainerService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<ContainerResponseDto> CreateContainer(Guid userId, ContainerRequestDto request)
        {
            var user = await unitOfWork.UserRepository.GetByIdAsync(userId);

            if (user == null)
            {
                throw new Exception("User id not found");
            }

            var container = new Container
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Favorite = request.Favorite,
                User = user,
                UserId = user.Id
            };

            await unitOfWork.ContainerRepository.AddAsync(container);
            await unitOfWork.SaveChangesAsync();

            return new ContainerResponseDto
            {
                Id = container.Id,
                Name = container.Name,
                Favorite = container.Favorite,
            };
        }

        public async Task DeleteContainer(Guid userId, Guid containerId)
        {
            var container = await unitOfWork.ContainerRepository.GetByIdAsync(containerId);

            if (container == null)
            {
                throw new Exception("Container id not found");
            }

            if (container.UserId != userId)
            {
                throw new Exception("Container id not found");
            }

            await unitOfWork.ContainerRepository.DeleteAsync(container);
            await unitOfWork.SaveChangesAsync();
        }

        public async Task<ContainerResponseDto> GetContainerById(Guid userId, Guid containerId)
        {
            var container = await unitOfWork.ContainerRepository.GetByIdAsync(containerId);

            if (container == null)
            {
                throw new Exception("Container id not found");
            }

            if (container.UserId != userId)
            {
                throw new Exception("Container id not found");
            }

            return new ContainerResponseDto
            {
                Id = container.Id,
                Name = container.Name,
                Favorite = container.Favorite,
            };
        }

        public async Task<IEnumerable<ContainerResponseDto>> GetContainersByUserId(Guid request)
        {
            var user = await unitOfWork.UserRepository.GetByIdAsync(request);

            if (user == null)
            {
                throw new Exception("User id not found");
            }

            var containers = await unitOfWork.ContainerRepository.GetAllAsync();

            var response = containers.Where(x => x.UserId == request)
                .Select(x => new ContainerResponseDto
                {
                    Id = x.Id,
                    Name = x.Name,
                    Favorite = x.Favorite
                });

            return response;
        }

        public async Task UpdateContainer(ContainerResponseDto container)
        {
            var containerToUpdate = await unitOfWork.ContainerRepository.GetByIdAsync(container.Id);

            if (containerToUpdate == null)
            {
                throw new Exception("Container id not found");
            }

            containerToUpdate.Name = container.Name;
            containerToUpdate.Favorite = container.Favorite;

            await unitOfWork.SaveChangesAsync();
        }
    }
}
