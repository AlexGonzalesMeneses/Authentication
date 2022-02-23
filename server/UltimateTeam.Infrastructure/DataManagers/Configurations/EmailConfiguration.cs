using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class EmailConfiguration : IEntityTypeConfiguration<Email>
    {
        public void Configure(EntityTypeBuilder<Email> builder)
        {
            builder.ToTable("Emails");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id")
                .IsRequired();

            builder.Property<string>(x => x.Mail)
                .HasColumnName("Mail")
                .HasMaxLength(100);

            builder.Property<Guid>(x => x.ContactId)
                .HasColumnName("ContactId")
                .IsRequired();

            builder.HasOne(x => x.Contact)
                .WithMany(x => x.Emails)
                .HasForeignKey(x => x.ContactId);
        }
    }
}