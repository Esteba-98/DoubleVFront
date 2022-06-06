using Entities;
using System.Collections.Generic;

namespace Business
{
    public interface IUsuario
    {
        void Insertar(Usuario usuario);
        void Eliminar(int idUsuario);
        void Actualizar(Usuario usuario);
        IEnumerable<Usuario> Obtener();
    }
}
