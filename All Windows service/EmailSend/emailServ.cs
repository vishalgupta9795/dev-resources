using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace EmailSend
{
    public partial class emailServ : ServiceBase
    {
        public emailServ()
        {
            InitializeComponent();
        }
        public void OnDebug()
        {
            OnStart(null);
        }
        protected override void OnStart(string[] args)
        {
            try
            {
                string FromEmail = ConfigurationManager.AppSettings["FromEmail"];
                string GamilAppPassword = ConfigurationManager.AppSettings["GamilAppPassword"];
                string SmtpServer = ConfigurationManager.AppSettings["SmtpServer"];
                int SmtpPort = Convert.ToInt32(ConfigurationManager.AppSettings["SmtpPort"]);


                var client = new SmtpClient(SmtpServer, SmtpPort)
                {
                    Credentials = new NetworkCredential(FromEmail, GamilAppPassword),
                    EnableSsl = true
                };
                client.Send(FromEmail, "vishalgpt9795@gmail.com", "test", "testbody");
            }
            catch (Exception ex)
            {

                throw;
            }
            
        }

        protected override void OnStop()
        {
        }
    }
}
