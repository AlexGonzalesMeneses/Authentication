using Dev33.UltimateTeam.Application.Encyptors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using UltimateTeam.Application.Helpers.Factories;
using UltimateTeam.Domain.Models;

namespace Dev33.UltimateTeam.Application.Helpers
{
    public static class HandleEncryption
    {
        public static object HandleEncryptData(object noteMapped, IEncryptor encryptor, bool encrypt)
        {            
            var properties = noteMapped.GetType().GetProperties();

            foreach (var property in properties)
            {
                if ((property.GetCustomAttributes<DisplayAttribute>()?.FirstOrDefault()?.Encrypted == true))
                {
                    var value = property.GetValue(noteMapped);
                    var valueEncrypted = encrypt ? encryptor.EncryptData(value.ToString()) : encryptor.DecryptData(value.ToString());
                    property.SetValue(noteMapped, valueEncrypted);
                }
            }

            return noteMapped;
        }
    }
}
