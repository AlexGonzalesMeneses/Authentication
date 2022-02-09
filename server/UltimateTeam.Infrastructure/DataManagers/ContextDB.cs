using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Domain.Models;
using UltimateTeam.Infrastructure.DataManagers.Configurations;

namespace UltimateTeam.Infrastructure.DataManagers
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
        }
    }
}
