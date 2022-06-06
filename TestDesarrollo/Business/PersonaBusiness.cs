namespace Business
{
    using Entities;
    using Microsoft.Data.SqlClient;
    using Repository;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Text;
    public class PersonaBusiness : IPersona
    {
        private IUnitOfWork _unit;
        public PersonaBusiness(IUnitOfWork unit)
        {
            this._unit = unit;
        }

        public void Insertar(Personas persona)
        {
            persona.NombreCompleto = persona.Nombres + " " + persona.Apellidos;
            persona.TipoNumeroIdentificacion = persona.TipoIdentificacion + " " + persona.NumeroIdentificacion;
            this._unit.GenericRepository<Personas>().Insert(persona);
        }

        public IEnumerable<Personas> Obtener()
        {
            var lstMovimientos = this._unit.GenericRepository<Personas>().Get();
            return lstMovimientos;
        }

    }
}
