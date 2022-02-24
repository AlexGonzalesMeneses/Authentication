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
    public class CreditCardConfiguration : IEntityTypeConfiguration<CreditCard>
    {
        public void Configure(EntityTypeBuilder<CreditCard> builder)
        {
            builder.ToTable("CreditCards");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("InformationsId")
                .IsRequired();

            builder.Property<string>(x => x.Number)
                .HasColumnName("Number");

            builder.Property<string>(x => x.Issuer)
                .HasColumnName("Issuer");

            builder.Property<string>(x => x.CardName)
                .HasColumnName("Name");

            builder.Property<string>(x => x.Cvv)
                .HasColumnName("Cvv");

            builder.Property<DateTime>(x => (DateTime)x.Expiration)
                .HasColumnName("Expiration");
        }
    }
}
