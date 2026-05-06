using DataUtility.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataUtility.Services
{
    public class DbHelperFactory : IDbHelperFactory
    {
        private readonly IConfiguration _config;

        public DbHelperFactory(IConfiguration config)
        {
            _config = config;
        }
         IDbHelper IDbHelperFactory.CreateDbHelper(string connectionName)
        {
            string connectionString = _config.GetConnectionString(connectionName);
            if (string.IsNullOrEmpty(connectionString))
                throw new Exception($"Connection string '{connectionName}' not found.");
            return new SqlDbHelper(connectionString);
        }
    }
}
