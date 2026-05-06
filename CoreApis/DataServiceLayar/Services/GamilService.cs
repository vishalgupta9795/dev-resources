using DataUtility.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataServiceLayar.Services
{
    public class GamilService
    {
        private readonly IApiService _IApiService;
        public GamilService(IApiService iApiService)
        {
            _IApiService = iApiService;
        }
    }
}
