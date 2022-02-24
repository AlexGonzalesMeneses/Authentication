using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class CredentialConfiguration : IEntityTypeConfiguration<Credential>
    {
        public void Configure(EntityTypeBuilder<Credential> builder)
        {
            builder.ToTable("Credentials");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("InformationsId");

            builder.Property<string>(x => x.Username)
                .HasColumnName("Username");

            builder.Property<string>(x => x.Password)
                .HasColumnName("Password");

            builder.HasMany(x => x.Urls)
                .WithOne(x => x.Credential)
                .HasForeignKey(x => x.CredentialId);
        }
    }
}