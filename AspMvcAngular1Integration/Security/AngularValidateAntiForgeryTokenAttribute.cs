﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace AspMvcAngular1Integration.Security
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class AngularValidateAntiForgeryTokenAttribute : FilterAttribute, IAuthorizationFilter
    {


        private void ValidateRequestHeader(HttpRequestBase request)
        {
            //string cookieToken = String.Empty;
            string formToken = String.Empty;
            string tokenValue = request.Headers["RequestVerificationToken"];
            var headers = request.Headers;
            var cookieToken = request.Cookies[AntiForgeryConfig.CookieName].Value;
            if (!String.IsNullOrEmpty(tokenValue))
            {
                string[] tokens = tokenValue.Split(':');
                if (tokens.Length == 2)
                {
                    //cookieToken = tokens[0].Trim();
                    formToken = tokens[1].Trim();
                }
            }
            AntiForgery.Validate(cookieToken, formToken);
        }

        public void OnAuthorization(AuthorizationContext filterContext)
        {

            try
            {
                ValidateRequestHeader(filterContext.HttpContext.Request);
            }
            catch
            {
                throw new HttpAntiForgeryException("Anti forgery token cookie not found");
            }
        }
    }
}