using Dev33.UltimateTeam.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dev33.UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class ContainerConfiguration : IEntityTypeConfiguration<Container>
    {
        public void Configure(EntityTypeBuilder<Container> builder)
        {
            builder.ToTable("Container");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id");

            builder.Property<string>(x => x.Name)
                .HasColumnName("Name");

            builder.Property<bool>(x => x.Favorite)
                .HasColumnName("Favorite");

            builder.Property<Guid>(x => x.UserId)
                .HasColumnName("UserId");

            builder.HasOne(x => x.User)
                .WithMany(x => x.Containers)
                .HasForeignKey(x => x.UserId);

            builder.HasMany(x => x.Informations)
                .WithOne(x => x.Container)
                .HasForeignKey(x => x.ContainerId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
