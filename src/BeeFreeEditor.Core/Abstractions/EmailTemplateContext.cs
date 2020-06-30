namespace BeeFreeEditor.Core.Abstractions
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

    public class EmailTemplateContext : DbContext
    {
        public DbSet<BeeFreeEmailTemplate> EmailTemplates { get; set; }
        public DbSet<LocationEmailTemplateMap> LocationEmailTemplateMap { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<BeeFreeEmailTemplate>()
                .Property(e => e.Type)
                .HasConversion(new EnumToStringConverter<EmailTemplateType>());

            modelBuilder
                .Entity<LocationEmailTemplateMap>()
                .Property(e => e.Type)
                .HasConversion(new EnumToStringConverter<EmailTemplateType>());

            modelBuilder
                .Entity<LocationEmailTemplateMap>()
                .HasKey(c => new { c.RegistrationLocationId, c.Type, c.Language });
        }
    }
}