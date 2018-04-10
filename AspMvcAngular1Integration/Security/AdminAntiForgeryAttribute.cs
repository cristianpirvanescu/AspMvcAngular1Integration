using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspMvcAngular1Integration.Security
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = false)]
    public class AdminAntiForgeryAttribute : FilterAttribute, IAuthorizationFilter
    {
        private readonly bool _ignore;
        public bool IsAngularAjax { get; set; }
        /// <summary>
        /// Anti-forgery security attribute
        /// </summary>
        /// <param name="ignore">Pass false in order to ignore this security validation</param>
        public AdminAntiForgeryAttribute(bool ignore = false)
        {
            this._ignore = ignore;
        }
        public virtual void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext == null)
                throw new ArgumentNullException("filterContext");

            if (_ignore)
                return;

            //don't apply filter to child methods
            if (filterContext.IsChildAction)
                return;

            //only POST requests
            if (!String.Equals(filterContext.HttpContext.Request.HttpMethod, "POST", StringComparison.OrdinalIgnoreCase))
                return;
          
            //if (!securitySettings.EnableXsrfProtectionForAdminArea)
            //    return;
            if (IsAngularAjax)
            {
                var validator = new AngularValidateAntiForgeryTokenAttribute();
                validator.OnAuthorization(filterContext);
            }
            else
            {
               // var validator = new ValidateJsonAntiForgeryTokenAttribute();
               // validator.OnAuthorization(filterContext);
            }
        }
    }
}