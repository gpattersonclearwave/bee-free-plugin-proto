namespace BeeFreeEditor.Core.Abstractions
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class LocationEmailTemplateMap
    {
        public long RegistrationLocationId { get; set; }

        public string Language { get; set; }

        [Column("TemplateType")]
        public EmailTemplateType Type { get; set; }

        [Required]
        public Guid EmailTemplateId { get; set; }

        [ForeignKey(nameof(EmailTemplateId))]
        public BeeFreeEmailTemplate EmailTemplate { get; set; }
    }
}