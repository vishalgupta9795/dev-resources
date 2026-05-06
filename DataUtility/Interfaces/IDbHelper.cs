using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataUtility.Interfaces
{
    public interface IDbHelper
    {
        Task<Object> ExecuteNonQueryAsync(string commandText, CommandType commandType = CommandType.Text, List<SqlParameter> parameters = null
        );
        Task<object> ExecuteScalarAsync(string commandText, CommandType commandType = CommandType.Text, List<SqlParameter> parameters = null);
        Task<DataTable> ExecuteDataTableSync(string commandText, CommandType commandType = CommandType.Text, List<SqlParameter> parameters = null);
        Task<DataSet> ExecuteDataSetAsync(string commandText, CommandType commandType = CommandType.Text, List<SqlParameter> parameters = null);
    }
}
