using Business;
using Data;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonaController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Personas> Get()
        {
            ContextDB context = new ContextDB();
            IUnitOfWork unitOfWork = new UnitOfWork(context);
            PersonaBusiness movimiento = new PersonaBusiness(unitOfWork);
            return movimiento.Obtener();
        }
        [HttpPost]
        public void Insertar(Personas movimientoEntity)
        {
            ContextDB context = new ContextDB();
            IUnitOfWork unitOfWork = new UnitOfWork(context);
            PersonaBusiness movimiento = new PersonaBusiness(unitOfWork);
            movimiento.Insertar(movimientoEntity);
            unitOfWork.SaveTransaction();
        }
    }
}
