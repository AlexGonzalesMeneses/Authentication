﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Application.Contracts.Repositories
{
    public interface IInformationRepository : IAsyncRepository<Information>
    {
        Task<IEnumerable<Information>> GetInformationsByContainerId(Guid containerId);
    }
}