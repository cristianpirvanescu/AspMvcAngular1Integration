using AspMvcAngular1Integration.Models;
using AspMvcAngular1Integration.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspMvcAngular1Integration.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Index()
        {
            TestMainModel model = new TestMainModel
            {
                List = new List<TestModel> { new TestModel { Id = 1, Name = "Test1" }, new TestModel { Id = 2, Name = "Test2" } }
            };
            return View(model);
        }
        [HttpPost]
        [AdminAntiForgery(IsAngularAjax = true)]
        public ActionResult Modify(TestModel model)
        {
            return View();
        }
    }

   
}