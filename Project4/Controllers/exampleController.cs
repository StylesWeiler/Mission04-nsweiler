using Microsoft.AspNetCore.Mvc;
using Project4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Controllers
{
    public class exampleController : Controller // the colon means the first inherits from the second  
    {
        public IActionResult Index() // actions are similar to functions. This returns the Index
        {
            return View();
        }
        [HttpGet]
        public IActionResult Grader () // actions are similar to functions. This GET request returns the Grader
        {
            return View(); // when no parameter is given, the View function defaults to the name of the IActionResult 
        }

        [HttpPost] // this is the attribute we attach to a method that signifies what method to use
        public IActionResult Grader(GraderModel model) // actions are similar to functions. This posts the inputs from the Grader
        {
            return View(); // when no parameter is given, the View function defaults to the name of the IActionResult 
        }   

    }
}
  