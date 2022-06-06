using Business;
using Data;
using Microsoft.Extensions.DependencyInjection;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Middleware
{
    public static class IoC
    {
        public static IServiceCollection AddDependency(this IServiceCollection services)
        {
            //services.AddTransient<IContextDB, ContextDB>();
            //services.AddTransient<IUnitOfWork, UnitOfWork>();
            //services.AddTransient<IPersona, PersonaBusiness>();
            //services.AddTransient<IUsuario, UsuarioBusiness>();
            return services;
        }
    }
}
