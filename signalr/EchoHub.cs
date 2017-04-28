using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace WebApp.SignalR
{
    public class EchoHub : Hub
    {
        public string Ping()
        {
            Clients.All.newMessage("Today is " + new DateTime().DayOfWeek.ToString());

            return "Pong";
        }
    }
}