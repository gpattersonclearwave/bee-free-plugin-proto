namespace BeeFreeEditor.Core.Abstractions
{
    using System.Collections.Generic;
    using System.Text.Json;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

    public class EmailTemplateContext : DbContext
    {
        public DbSet<BeeFreeEmailTemplate> EmailTemplates { get; set; }
        public DbSet<LocationEmailTemplateMap> LocationEmailTemplateMap { get; set; }
        public DbSet<MergeTag> MergeTags { get; set; }

        public EmailTemplateContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MergeTag>()
                .Property(email => email.Properties)
                .HasConversion(dictionary => JsonSerializer.Serialize(dictionary, null),
                    s => JsonSerializer.Deserialize<Dictionary<string, string>>(s, null));

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
                .HasKey(c => new {c.RegistrationLocationId, c.Type, c.Language});
        }
    }
}