using Dev33.UltimateTeam.Application.Encyptors;
using UltimateTeam.Application.Encyptors;
using Xunit;

namespace UltimateTeam.Tests.EncryptorTests
{
    public class RSAEncryptorTest
    {
        [Fact]
        public void EncryptDataShouldReturnCorrectValueTest()
        {
            IEncryptor encryptor = new RSAEncryptor();
            var data = "test";

            var result = encryptor.EncryptData(data);

            var decrypted = encryptor.DecryptData(result);

            Assert.Equal(data, decrypted);
        }


        [Fact]
        public void EncryptDataWithSpecialCharactersTest()
        {
            IEncryptor encryptor = new RSAEncryptor();
            var data = "Word$@p4ssWor6";

            var result = encryptor.EncryptData(data);

            var decrypted = encryptor.DecryptData(result);

            Assert.Equal(data, decrypted);
        }
    }
}