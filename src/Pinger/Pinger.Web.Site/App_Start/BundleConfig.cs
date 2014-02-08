using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;

namespace Pinger.Web.Site
{
    public static class BundleConfig 
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // scripts 
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-2.1.0.js"));
            bundles.Add(new ScriptBundle("~/bundles/scripts/").Include("~/Scripts/modules/common.js"));
            // css
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/Styles/common.css"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}
