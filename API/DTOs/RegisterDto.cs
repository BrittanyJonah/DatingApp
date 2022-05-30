using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        // props we are receiving in body of request
        [Required] // data annotations
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}