using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspMvcAngular1Integration.Models
{
    public class TestMainModel
    {
        public List<TestModel> List { get; set; } = new List<TestModel>();
        public string Asdasd { get; set; }
    }

    public class TestModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}