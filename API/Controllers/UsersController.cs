using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        // endpoint
        [HttpGet]
        // IEnumerable allows for simple iteration of items of a specified type. L
        // List does the same thing but offers way more features like sort etc
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            // pause and awaits the task to return results. await gets responses from Task
            return await _context.Users.ToListAsync();
        }

        // specifying a root param, when hit this endpoint
        // api/users/3 gets user with id of 3
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}