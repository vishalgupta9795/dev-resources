using DataUtility.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataUtility.Services
{
    public class ApiService : IApiService
    {
        private readonly HttpClient _httpClient;
        public ApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

       

        private void AddHeader(Dictionary<string,string>? headers)
        {
            if (headers == null) return;
            foreach (var item in headers)
            {
                if (_httpClient.DefaultRequestHeaders.Contains(item.Key))
                    _httpClient.DefaultRequestHeaders.Remove(item.Key);
                _httpClient.DefaultRequestHeaders.Add(item.Key, item.Value);
            }
        }

        async Task<T> IApiService.DeleteAsync<T>(string Url, Dictionary<string, string>? headers)
        {
            AddHeader(headers);
            HttpResponseMessage response = await _httpClient.DeleteAsync(Url);
            response.EnsureSuccessStatusCode();
            string json = await response.Content.ReadAsStringAsync();
            return  JsonConvert.DeserializeObject<T>(json);
        }

        async Task<T> IApiService.GetAsync<T>(string Url, Dictionary<string, string>? headers)
        {
            AddHeader(headers);
            HttpResponseMessage response =  await _httpClient.GetAsync(Url);
            response.EnsureSuccessStatusCode();
            var json = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(json);
        }

        async Task<T> IApiService.PatchAsync<T>(string Url, object body, Dictionary<string, string>? headers)
        {
            AddHeader(headers);
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Patch, Url)
            {
                Content = new StringContent(JsonConvert.SerializeObject(body), Encoding.UTF8, "application/json")
            };
            HttpResponseMessage response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var json = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(json);
        }

        async Task<T> IApiService.PostAsync<T>(string Url, object body, Dictionary<string, string>? headers)
        {
            AddHeader(headers);
            StringContent content = new StringContent(JsonConvert.SerializeObject(body), Encoding.UTF8, "application/json");
            HttpResponseMessage response = await _httpClient.PostAsync(Url, content);
            response.EnsureSuccessStatusCode();
            var json = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(json);
        }
        public async Task<T> PutAsync<T>(string Url, object body, Dictionary<string, string>? headers = null)
        {
            AddHeader(headers);
            StringContent content = new StringContent(JsonConvert.SerializeObject(body), Encoding.UTF8, "application/json");
            HttpResponseMessage response = await _httpClient.PutAsync(Url, content);
            response.EnsureSuccessStatusCode();
            string json  =await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}
