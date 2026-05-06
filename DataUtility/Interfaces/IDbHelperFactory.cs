using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataUtility.Interfaces
{
    public interface IDbHelperFactory
    {
        IDbHelper CreateDbHelper(string connectionName);
    }
}
