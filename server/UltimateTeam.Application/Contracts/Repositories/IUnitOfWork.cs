﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Application.Contracts.Repositories;
using UltimateTeam.Application.Contracts.Repositories;

namespace Dev33.UltimateTeam.Application.Contracts.Repositories
{
    public interface IUnitOfWork
    {
        ITagRepository TagRepository { get; }
        IUserRepository UserRepository { get; }
        INoteRepository NoteRepository { get; }
        IContainerRepository ContainerRepository { get; }
        IInformationRepository InformationRepository { get; }
        Task SaveChangesAsync();
    }
}
