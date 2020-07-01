namespace BeeFreeEditor.Core.Abstractions
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class MergeTag
    {
        public MergeTag()
        {
            Properties = new Dictionary<string, string>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public Guid OrganizationId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public Dictionary<string, string> Properties { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastModified { get; set; }
    }
}