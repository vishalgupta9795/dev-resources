using DataUtility.Interfaces;
using DataUtility.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataServiceLayar.Services
{
    public class UserServices:IDisposable
    {
        //private readonly string _TravelBookingPlatformDbConn;
        private readonly IDbHelperFactory _dbFactory;
        private IDbHelper _db;
        public UserServices(IDbHelperFactory dbFactory) {
            _dbFactory = dbFactory;
            _db = _dbFactory.CreateDbHelper("TravelBookingPlatformDbConn");
        }
        
        public  DataTable GetUserList()
        {
            //IDbHelper sqlDbHelper = new SqlDbHelper("YourConnectionStringHere");
            string query = "Select * from tblUserDetails";
             return _db.ExecuteDataTableSync(query, CommandType.Text).Result;
        }
        public void Dispose()
        {
        }

    }
}
