using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Dev33.UltimateTeam.Domain.Models;
using Dev33.UltimateTeam.Infrastructure.DataManagers.Configurations;
using UltimateTeam.Infrastructure.DataManagers.Configurations;

namespace Dev33.UltimateTeam.Infrastructure.DataManagers
{
    public class ContextDB : DbContext
    {
        public DbSet<User> Users { get; set; }

        public ContextDB(DbContextOptions<ContextDB> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ContainerConfiguration());
            modelBuilder.ApplyConfiguration(new InformationConfiguration());
            modelBuilder.ApplyConfiguration(new TagConfiguration());
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
    }
}
