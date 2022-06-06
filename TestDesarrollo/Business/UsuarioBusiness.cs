namespace Business
{
    using Entities;
    using Repository;
    using System;
    using System.Collections.Generic;
    using System.Text;
    public class UsuarioBusiness : IUsuario
    {
        private IUnitOfWork _unit;
        public UsuarioBusiness(IUnitOfWork unit)
        {
            this._unit = unit;
        }
        public void Actualizar(Usuario usuario)
        {
            this._unit.GenericRepository<Usuario>().Update(usuario);
        }

        public void Eliminar(int idUsuario)
        {
            this._unit.GenericRepository<Usuario>().Delete(idUsuario);
        }

        public void Insertar(Usuario usuario)
        {
            this._unit.GenericRepository<Usuario>().Insert(usuario);
        }
        public IEnumerable<Usuario> Obtener()
        {
            var lstProductos = this._unit.GenericRepository<Usuario>().Get();
            return lstProductos;
        }
    }
}
