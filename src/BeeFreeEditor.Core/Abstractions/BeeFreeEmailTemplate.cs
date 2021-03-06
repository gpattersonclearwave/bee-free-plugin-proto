﻿namespace BeeFreeEditor.Core.Abstractions
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
        public Guid OrganizationId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [Column("TemplateType")]
        public EmailTemplateType Type { get; set; }

        [MaxLength(255)]
        public string Description { get; set; }

        [Required]
        public string Language { get; set; }

        [Required]
        public string HtmlData { get; set; }

        [Required]
        public string TemplateData { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastModified { get; set; }
    }
}