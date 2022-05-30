using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        // NOTE: public means this property can be accessed from any other class within the app
        // other possibilities would be: protected, prop can be accessed only from inside this class or classes that inherit from this class
        // private, prop is only accessible from within this class.

        public int Id { get; set; } // primary key, auto increments in DB
        // very important to use capital N
        public string UserName { get; set; } // asp.net Identity uses 'UserName' (with uppercase n)
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}