using System.Web;
using System.Web.Optimization;

namespace AspMvcAngular1Integration
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/bundles/web_angular").Include(
           "~/Scripts/angular.js",
           "~/Scripts/angular-resource.js",
           "~/Scripts/angular-ui.js",
           "~/Scripts/angular-route.js",
           "~/Scripts/angular-aria.js",
           "~/Scripts/angular-toastr.tpls.js",
           "~/Scripts/select.js",
           //"~/Scripts/select2.js",
           "~/Scripts/angular-messages.js",
           "~/Scripts/angular-animate.js",
           "~/Scripts/angular-sanitize.js",
           "~/Scripts/loading-bar.js",
           "~/Scripts/angular-ui/ui-bootstrap.js",
           "~/Scripts/angular-ui/ui-bootstrap-tpls.js"
           , "~/Scripts/angular-bootstrap-confirm.js",
            "~/scripts/linq.min.js"
           ).IncludeDirectory("~/Scripts/angular-ui", "*.js", true));

            bundles.Add(new ScriptBundle("~/bundles/web_angularApp").IncludeDirectory(
            "~/App/", "*.js", true
            ));

            bundles.Add(new StyleBundle("~/content/web_cssAngular").Include(
                    "~/Content/angular-ui.css",
                    "~/Content/angular-toastr.css",
                    "~/Content/loading-bar.css",
                    "~/Content/select.css",
                    //"~/Content/select2.css",
                    "~/Content/ui-bootstrap-csp.css"
           ));
        }
    }
}
