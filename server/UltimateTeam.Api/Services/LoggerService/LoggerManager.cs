using System;
using NLog;

namespace UltimateTeam.Api.Services.LoggerService
{
    public class LoggerManager : ILoggerManager
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();

        public void LogDebug(Exception e)
        {
            logger.Debug(e);
        }

        public void LogError(Exception e)
        {
            logger.Error(e);
        }

        public void LogInfo(Exception e)
        {
            logger.Info(e);
        }

        public void LogWarn(Exception e)
        {
            logger.Warn(e);
        }
    }
}