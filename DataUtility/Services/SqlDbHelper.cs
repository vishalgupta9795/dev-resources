using DataUtility.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace DataUtility.Services
{
    public class SqlDbHelper : IDbHelper
    {
        private readonly string _ConnectionString;

        public SqlDbHelper(string ConnectionString)
        {
            _ConnectionString = ConnectionString;
        }
        private SqlConnection GetConnection()
        {
            return new SqlConnection(_ConnectionString);
        }




        Task<DataSet> IDbHelper.ExecuteDataSetAsync(string commandText, CommandType commandType,List<SqlParameter> parameters)
        {
            using (SqlConnection conn = GetConnection())
            {
                using (SqlCommand cmd = CreateCommand(conn, commandText, parameters, commandType))
                {
                    using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                    {
                        DataSet ds = new DataSet();
                        da.Fill(ds);
                        return Task.FromResult(ds);
                    }
                }
            }
        }

        Task<DataTable> IDbHelper.ExecuteDataTableSync(string commandText, CommandType commandType,List<SqlParameter> parameters)
        {
            using (SqlConnection conn = GetConnection())
            {
                using (SqlCommand cmd = CreateCommand(conn, commandText, parameters, commandType))
                {
                    using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        da.Fill(dt);
                        return Task.FromResult(dt);
                    }
                }
            }
        }

        Task<object> IDbHelper.ExecuteNonQueryAsync(string commandText, CommandType commandType,List<SqlParameter> parameters)
        {
            using (SqlConnection conn = GetConnection())
            {
                using (SqlCommand cmd = CreateCommand(conn, commandText, parameters, commandType))
                {
                    conn.Open();
                    int rowsAffected = cmd.ExecuteNonQuery();
                    return Task.FromResult((object)rowsAffected);
                }
            }
        }

        Task<object> IDbHelper.ExecuteScalarAsync(string commandText, CommandType commandType,List<SqlParameter> parameters)
        {
            using (SqlConnection conn = GetConnection())
            {
                using (SqlCommand cmd = CreateCommand(conn, commandText, parameters, commandType))
                {
                    conn.Open();
                    object result = cmd.ExecuteScalar();
                    return Task.FromResult(result);
                }
            }
        }


        private SqlCommand CreateCommand(SqlConnection conn, string CommandText, List<SqlParameter> parparameters, CommandType commandType)
        {
            SqlCommand cmd = new SqlCommand(CommandText, conn);
            cmd.CommandType = commandType;
            if (parparameters != null && parparameters.Count > 0)
                cmd.Parameters.AddRange(parparameters.ToArray());
            return cmd;
        }
    }
}
