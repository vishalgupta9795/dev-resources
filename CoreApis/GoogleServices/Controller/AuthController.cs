using DataServiceLayar.Services;
using DataUtility.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GoogleServices.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpGet("GetProviderCredentialToken")]
        public IActionResult GetProviderCredentialToken(int masterAuthTypeId, int materActionMethodId)
        {
            var tokenData = _authService.GetProviderCredentialToken((DataUtility.Enums.MasterAuthTypeId)masterAuthTypeId, (DataUtility.Enums.MaterActionMethodId)materActionMethodId);
            return Ok(JsonConvert.SerializeObject(tokenData));
        }
        [HttpPost("SaveGoogleAuth")]
        public IActionResult SaveGoogleAuth([FromBody] OAuthTokenModel token,int MaterAuthTypeId)
        {
             _authService.SaveGoogleAuth(token,(DataUtility.Enums.MasterAuthTypeId)MaterAuthTypeId);
            return Ok();
        }
    }
}
