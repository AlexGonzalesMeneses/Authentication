using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;
using Dev33.UltimateTeam.Application.Contracts.Services;
using Dev33.UltimateTeam.Domain.Enums;
using Dev33.UltimateTeam.Domain.Models;
using UltimateTeam.Application.Contracts.Services;

namespace UltimateTeam.Application.Services
{
    public class SearchService : ISearchService
    {
        private readonly IUnitOfWork unitOfWork;

        public SearchService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Information>> Search(Guid userId, string searchTerm)
        {
            var allContainers = await unitOfWork.ContainerRepository.GetAllAsync();
            var containerByUser = allContainers.Where(x => x.UserId == userId);
            var response = new List<Information>();

            foreach (var container in containerByUser)
            {
                var items = await unitOfWork.InformationRepository.GetAllAsync();
                var itemsByContainer = items.Where(x => x.ContainerId == container.Id);

                foreach (var item in itemsByContainer)
                {
                    var information = await BuildInformation(item.Type, item.Id);
                    var tags = await unitOfWork.TagRepository.GetTagsAsync(item.Id);
                    item.Tags = (ICollection<Tag>)tags;
                    AddInformation(item, information);

                    if (SearchTermIsValid(item, searchTerm))
                    {
                        response.Add(item);
                    }
                }
            }

            return response;
        }

        private void AddInformation(Information item, object information)
        {
            switch (item.Type)
            {
                case InformationType.Note:
                    item.Note = (Note)information;
                    break;
                case InformationType.Credential:
                    item.Credential = (Credential)information;
                    break;
                case InformationType.CreditCard:
                    item.CreditCard = (CreditCard)information;
                    break;
                case InformationType.Contact:
                    item.Contact = (Contact)information;
                    break;
                case InformationType.Key:
                    item.Key = (Key)information;
                    break;
                default:
                    throw new NotImplementedException($"{item.Type} is not implemented");
            }
        }

        private async Task<object> BuildInformation(InformationType type, Guid id)
        {
            switch (type)
            {
                case InformationType.Note:
                    return await unitOfWork.NoteRepository.GetByIdAsync(id);
                case InformationType.Key:
                    return await unitOfWork.KeyRepository.GetByIdAsync(id);
                case InformationType.Credential:
                    return await unitOfWork.CredentialRepository.GetByIdAsync(id);
                case InformationType.Contact:
                    return await unitOfWork.ContactRepository.GetByIdAsync(id);
                case InformationType.CreditCard:
                    return await unitOfWork.CreditCardRepository.GetByIdAsync(id);
                default:
                    throw new NotImplementedException($"{type} is not implemented");
            }
        }

        private bool SearchTermIsValid(object itemEvaluated, string searchTerm)
        {
            var properties = itemEvaluated.GetType().GetProperties();

            foreach (var property in properties)
            {
                if (!property.PropertyType.IsGenericType)
                {
                    if (property.GetCustomAttributes<DisplayAttribute>()?.FirstOrDefault()?.Encrypted == false)
                    {
                        if (property.GetValue(itemEvaluated).ToString().ToLower().Contains(searchTerm.ToLower()))
                        {
                            return true;
                        }
                    }
                }
                else
                {
                    if (EvaluateGenericProperty(property, itemEvaluated, searchTerm))
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        private bool EvaluateGenericProperty(PropertyInfo property, object itemEvaluated, string searchTerm)
        {
            var genericProperty = property.GetValue(itemEvaluated);

            foreach (var propertyInGeneric in genericProperty as IEnumerable<object>)
            {
                if (SearchTermIsValid(propertyInGeneric, searchTerm))
                {
                    return true;
                }
            }

            return false;
        }
    }
}