using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Infrastructure.DataManagers.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
            .HasColumnName("Id");

            builder.Property(x => x.UserName)
            .HasColumnName("UserName");

            builder.Property(x => x.Password)
            .HasColumnName("Password");

            builder.Property(x => x.Email)
            .HasColumnName("Email");
        }
    }
}