namespace BeeFreeEditor.Core.Abstractions
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class BeeFreeEmailTemplate
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public int DomainId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [Column("TemplateType")]
        public EmailTemplateType Type { get; set; }

        public string Description { get; set; }

        [Required]
        public string Language { get; set; }

        [Required]
        public string Data { get; set; }

        [Required]
        public string TemplateData { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastModified { get; set; }
    }
}