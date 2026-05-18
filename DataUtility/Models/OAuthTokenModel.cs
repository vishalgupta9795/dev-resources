using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataUtility.Models
{
    public class OAuthTokenModel
    {
            public long TokenDetailsId { get; set; }
            public long AuthDetailsId { get; set; }
            public string? AccessToken { get; set; }
            public DateTime? ExpireInDt { get; set; }
            public string? RefershToken { get; set; }
            public string? TokenId { get; set; }
            public string? Scope { get; set; }
            public string? TokenType { get; set; }
            public DateTime? CreateDt { get; set; }
            public DateTime? UpdateDt { get; set; }
            public int MaterAuthTypeId { get; set; }
        
    }
}
