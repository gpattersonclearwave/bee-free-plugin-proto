namespace BeeFreeEditor.Core.Abstractions
{
    using System.IO;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Design;
    using Microsoft.Extensions.Configuration;

    public class EmailTemplateContextFactory : IDesignTimeDbContextFactory<EmailTemplateContext>
    {
        public EmailTemplateContext CreateDbContext(string[] args)
        {
            // Build config
            IConfiguration configuration = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../BeeFreeEditor.Mvc"))
                .AddJsonFile("appsettings.json", false, true)
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<EmailTemplateContext>();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("EmailTemplate"));

            return new EmailTemplateContext(optionsBuilder.Options);
        }
    }
}