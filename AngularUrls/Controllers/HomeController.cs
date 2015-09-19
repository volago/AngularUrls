using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace AngularUrls.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            string fragment = Request.QueryString["_escaped_fragment_"];

            if (fragment != null)
            {
                try
                {
                    var file = Server.MapPath(string.Format(@"~/App/redirected.html"));
                    if (!string.IsNullOrWhiteSpace(file))
                    {
                        var fileContent = System.IO.File.ReadAllText(file);
                        return Content(fileContent);
                    }

                    var message = string.Format("Offline content not found. Escaped fragment: '{0}'", fragment);
                    return Content(message);
                }
                catch (Exception ex)
                {
                    var sb = new StringBuilder();
                    sb.AppendLine(ex.Message);
                    if (ex.InnerException != null)
                    {
                        sb.AppendLine("------------------------------");
                        sb.AppendLine(ex.InnerException.Message);
                    }
                    return Content(ex.Message);
                }
            }


            ErrorViewModel vm = new ErrorViewModel();

            return View(vm);
        }
    }
}