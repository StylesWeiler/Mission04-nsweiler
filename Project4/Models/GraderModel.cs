using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Models
{

   
    public class GraderModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter valid integer number between 0 and 100")]
        public int assignments { get; set; } // performs the same action as writting out getters and setters
        
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter valid integer number between 0 and 100")]
        public int quizzes { get; set; }
        
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter valid integer number between 0 and 100")]
        public int groupprojects { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter valid integer number between 0 and 100")]
        public int intex { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter valid integer number between 0 and 100")]
        public int exams { get; set; }
        
    }


}
