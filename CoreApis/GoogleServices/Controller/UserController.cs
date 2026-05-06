using DataServiceLayar.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace GoogleServices.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserServices _userService;
        public UserController(UserServices userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var userList = _userService.GetUserList(); // Fix: Store the result of GetUserList() in a variable  
            return Ok(JsonConvert.SerializeObject(userList)); // Pass the variable to Ok()  
        }

    }
}
