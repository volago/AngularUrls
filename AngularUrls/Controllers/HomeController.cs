using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularUrls.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var or = Request.ServerVariables["HTTP_X_ORIGINAL_URL"];

            var xx = Request.ServerVariables["SCRIPT_NAME"];
            var yy = Request.ServerVariables["QUERY_STRING"];

            return View();
        }
    }
}