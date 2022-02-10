using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using Dev33.UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id");

            builder.Property<string>(x => x.UserName)
                .HasColumnName("UserName");

            builder.Property<string>(x => x.FullName)
                .HasColumnName("FullName");

            builder.Property<string>(x => x.Password)
                .HasColumnName("Password");

            builder.Property<string>(x => x.Email)
                .HasColumnName("Email");
        }
    }
}