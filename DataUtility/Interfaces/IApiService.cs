using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataUtility.Interfaces
{
    public interface IApiService
    {
        Task<T> GetAsync<T>(string Url, Dictionary<string, string>? headers = null);
        Task<T> PostAsync<T>(string Url, object body, Dictionary<string, string>? headers = null);
        Task<T> PutAsync<T>(string Url, object body, Dictionary<string, string>? headers = null);
        Task<T> PatchAsync<T>(string Url, object body, Dictionary<string, string>? headers = null);
        Task<T> DeleteAsync<T>(string Url, Dictionary<string, string>? headers = null);
    }
}
