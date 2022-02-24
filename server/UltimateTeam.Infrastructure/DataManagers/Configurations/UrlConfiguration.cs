using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class UrlConfiguration : IEntityTypeConfiguration<Url>
    {
        public void Configure(EntityTypeBuilder<Url> builder)
        {
            builder.ToTable("Urls");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id");

            builder.Property<string>(x => x.Address)
                .HasColumnName("Address");

            builder.Property<Guid>(x => x.CredentialId)
                .HasColumnName("CredentialId");

            builder.HasOne(x => x.Credential)
                .WithMany(x => x.Urls)
                .HasForeignKey(x => x.CredentialId);
        }
    }
}