using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("Addresses");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id")
                .IsRequired();

            builder.Property<string>(x => x.Location)
                .HasColumnName("Location");

            builder.Property<Guid>(x => x.ContactId)
                .HasColumnName("ContactId");

            builder.HasOne(x => x.Contact)
                .WithMany(x => x.Addresses)
                .HasForeignKey(x => x.ContactId);
        }
    }
}