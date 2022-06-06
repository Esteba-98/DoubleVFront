namespace Entities
{
    using System.ComponentModel.DataAnnotations;
    public class Personas
    {
        [Key]
        public int IdPersona { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string NumeroIdentificacion { get; set; }
        public string Email { get; set; }
        public string TipoIdentificacion { get; set; }
        public System.DateTime FechaCreacion { get; set; }
        public string TipoNumeroIdentificacion { get; set; }
        public string NombreCompleto { get; set; }
        
    }
}
