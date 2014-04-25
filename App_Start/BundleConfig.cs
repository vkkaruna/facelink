// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2014 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.facelink
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css", "~/content/main.css"));

            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-2.0.3.min.js"));
            bundles.Add(new ScriptBundle("~/js/angular").Include("~/scripts/vendor/angular.min.js"));
            bundles.Add(new ScriptBundle("~/js/facebook").Include("~/scripts/facebook.js"));
            bundles.Add(new ScriptBundle("~/js/quant").Include("~/scripts/quant.js"));

            bundles.Add(new ScriptBundle("~/js/app").Include(
                  "~/scripts/app.js",
                  "~/scripts/controllers/facebookController.js",
                 "~/scripts/controllers/linkedinController.js",
                 "~/scripts/service/facebookService.js",
                 "~/scripts/service/linkedinService.js",
                "~/scripts/vendor/angular-ui-router.js"));
        }
    }
}
