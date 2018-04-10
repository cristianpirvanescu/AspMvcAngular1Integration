using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspMvcAngular1Integration.Helpers
{
    public static class JsonHtmlHelpers
    {
        public static IHtmlString JsonFor<T>(this HtmlHelper helper, T obj)
        {
            return helper.Raw(obj.ToJson().ToString().Replace("'", " "));
            //return helper.Raw(JsonConvert.SerializeObject(obj));
        }
    }
}