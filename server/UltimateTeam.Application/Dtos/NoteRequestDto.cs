using System;
using Dev33.UltimateTeam.Domain.Enums;

namespace UltimateTeam.Application.Dtos
{
    public class NoteRequestDto
    {
        public string Text { get; set; }
        public string Type { get; set; }
        public string EncryptorType { get; set; }
        public Guid ContainerId { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public bool Favorite { get; set; }
        public string Name { get; set; }
    }
}