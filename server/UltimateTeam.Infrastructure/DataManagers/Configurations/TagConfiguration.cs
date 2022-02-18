using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.ToTable("Tags");

            builder.HasKey(x => x.Id);

            builder.Property<Guid>(x => x.Id)
                .HasColumnName("Id");

            builder.Property<string>(x => x.Name)
                .HasColumnName("Name");
            
            builder.Property<Guid>(x => x.InformationId)
                .HasColumnName("InformationId");

            builder.HasOne(x => x.Information)
                .WithMany(x => x.Tags)
                .HasForeignKey(x => x.InformationId);
        }
    }
}
