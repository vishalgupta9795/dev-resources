using DataUtility.Enums;
using DataUtility.Interfaces;
using DataUtility.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace DataServiceLayar.Services
{
    public class AuthService
    {
        private readonly IDbHelperFactory _dbFactory;
        private IDbHelper _db;
        public AuthService(IDbHelperFactory dbFactory) {
            _dbFactory = dbFactory;
            _db = _dbFactory.CreateDbHelper("BasicServDB");
        }
        public DataTable GetProviderCredentialToken(MasterAuthTypeId masterAuthTypeId, MaterActionMethodId materActionMethodId)
        {
            List<SqlParameter> parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@MaterAuthTypeId", (int)masterAuthTypeId));
            parameters.Add(new SqlParameter("@MasterActionMethodId", (int)materActionMethodId));
           return _db.ExecuteDataTableSync("GetProviderCredentialToken", CommandType.StoredProcedure, parameters).Result;
        }
        public void SaveGoogleAuth(OAuthTokenModel token, MasterAuthTypeId masterAuthTypeId)
        {
            List<SqlParameter> parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@MaterAuthTypeId", (int)masterAuthTypeId));
            parameters.Add(new SqlParameter("@AccessToken", token.AccessToken));
            parameters.Add(new SqlParameter("@ExpireInDt", token.ExpireInDt));
            parameters.Add(new SqlParameter("@RefershToken", token.RefershToken));
            parameters.Add(new SqlParameter("@Scope", token.Scope));
            parameters.Add(new SqlParameter("@TokenId", token.TokenId));
          var data =  _db.ExecuteNonQueryAsync("usp_SaveAuthToken", CommandType.StoredProcedure, parameters).Result;
        }
    }
}
