using Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace Data
{
    public class ContextDB : DbContext, IContextDB
    {
        private string _connectionString = @"Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=Test;Data Source=DESKTOP-MR52PR7\MSSQLSERVER01";

        public ContextDB(DbContextOptions options) : base(options) { }
        public ContextDB() { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!String.IsNullOrEmpty(_connectionString))
                options.UseSqlServer(_connectionString);
            base.OnConfiguring(options);
        }

        public virtual DbSet<Personas> Personas { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
    }
}
