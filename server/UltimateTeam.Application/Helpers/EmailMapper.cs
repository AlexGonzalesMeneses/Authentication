using System;
using System.Collections.Generic;
using UltimateTeam.Domain.Models.SensitiveInformations;

namespace UltimateTeam.Application.Helpers
{
    public static class EmailMapper
    {
        public static List<Email> Map(string emails, Guid id)
        {
            var emailList = new List<Email>();

            if (string.IsNullOrEmpty(emails))
            {
                return emailList;
            }

            var emailArray = emails.Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var email in emailArray)
            {
                emailList.Add(new Email
                {
                    Id = Guid.NewGuid(),
                    ContactId = id,
                    Mail = email
                });
            }

            return emailList;
        }

        public static List<string> Map(List<Email> emails)
        {
            var emailList = new List<string>();

            foreach (var email in emails)
            {
                emailList.Add(email.Mail);
            }

            return emailList;
        }
    }
}