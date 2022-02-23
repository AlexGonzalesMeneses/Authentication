using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class PhoneConfiguration : IEntityTypeConfiguration<Phone>
    {
        public void Configure(EntityTypeBuilder<Phone> builder)
        {
            builder.ToTable("Phones");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id")
                .IsRequired();

            builder.Property<string>(x => x.Number)
                .HasColumnName("Number")
                .HasMaxLength(55);

            builder.Property<Guid>(x => x.ContactId)
                .HasColumnName("ContactId")
                .IsRequired();

            builder.HasOne(x => x.Contact)
                .WithMany(x => x.Phones)
                .HasForeignKey(x => x.ContactId);
        }
    }
}