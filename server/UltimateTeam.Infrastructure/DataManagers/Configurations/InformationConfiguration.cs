using System;
using Dev33.UltimateTeam.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class InformationConfiguration : IEntityTypeConfiguration<Information>
    {
        public void Configure(EntityTypeBuilder<Information> builder)
        {
            builder.ToTable("Informations");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id");

            builder.Property<string>(x => x.Name)
                .HasColumnName("Name");

            builder.Property<InformationType>(x => x.InformationType)
                .HasColumnName("Type");

            builder.Property<EncryptorType>(x => x.EncryptorType)
                .HasColumnName("EncryptionType");

            builder.Property<Guid>(x => x.ContainerId)
                .HasColumnName("ContainerId");

            builder.HasOne(x => x.Container)
                .WithMany(x => x.Informations)
                .HasForeignKey(x => x.ContainerId);

            builder.HasMany(x => x.Tags)
                .WithOne(x => x.Information)
                .HasForeignKey(x => x.InformationId);
        }
    }
}