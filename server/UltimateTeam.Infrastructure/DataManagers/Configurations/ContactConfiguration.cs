using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace Dev33.UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.ToTable("Contacts");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("InformationsId")
                .IsRequired();

            builder.Property<string>(x => x.FullName)
                .HasColumnName("FullName")
                .HasMaxLength(100);

            builder.Property<string>(x => x.FirstName)
                .HasColumnName("FirstName")
                .HasMaxLength(55);

            builder.Property<string>(x => x.LastName)
                .HasColumnName("LastName")
                .HasMaxLength(55);

            builder.Property<string>(x => x.Business)
                .HasColumnName("Business")
                .HasMaxLength(55);

            builder.Property<string>(x => x.Zip)
                .HasColumnName("Zip")
                .HasMaxLength(10);

            builder.Property<string>(x => x.Country)
                .HasColumnName("Country")
                .HasMaxLength(15);

            builder.Property<string>(x => x.State)
                .HasColumnName("State")
                .HasMaxLength(25);

            builder.Property<DateTime>(x => (DateTime)x.Birthday)
                .HasColumnName("Birthday")
                .HasColumnType("datetime2");

            builder.HasMany(x => x.Emails)
                .WithOne(x => x.Contact)
                .HasForeignKey(x => x.ContactId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.Phones)
                .WithOne(x => x.Contact)
                .HasForeignKey(x => x.ContactId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.Addresses)
                .WithOne(x => x.Contact)
                .HasForeignKey(x => x.ContactId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
