using Business;
using Data;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            ContextDB context = new ContextDB();
            IUnitOfWork unitOfWork = new UnitOfWork(context);
            UsuarioBusiness usuario = new UsuarioBusiness(unitOfWork);
            return usuario.Obtener();
        }
        [HttpPost]
        public void Insertar(Usuario usuarioEntity)
        {
            ContextDB context = new ContextDB();
            IUnitOfWork unitOfWork = new UnitOfWork(context);
            UsuarioBusiness usuario = new UsuarioBusiness(unitOfWork);
            usuario.Insertar(usuarioEntity);
            unitOfWork.SaveTransaction();
        }
        [HttpPut]
        public void Actualizar(Usuario usuarioEntity)
        {
            ContextDB context = new ContextDB();
            IUnitOfWork unitOfWork = new UnitOfWork(context);
            UsuarioBusiness usuario = new UsuarioBusiness(unitOfWork);
            usuario.Actualizar(usuarioEntity);
            unitOfWork.SaveTransaction();
        }
        [HttpDelete]
        public void Eliminar(Usuario usuarioEntity)
        {
            ContextDB context = new ContextDB();
            IUnitOfWork unitOfWork = new UnitOfWork(context);
            UsuarioBusiness usuario = new UsuarioBusiness(unitOfWork);
            usuario.Eliminar(usuarioEntity.IdUsuario);
            unitOfWork.SaveTransaction();
        }
    }
}
