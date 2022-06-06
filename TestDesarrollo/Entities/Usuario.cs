namespace Entities
{
    using System.ComponentModel.DataAnnotations;
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string Password { get; set; }
        public System.DateTime FechaCreacion { get; set; }
    }
}
