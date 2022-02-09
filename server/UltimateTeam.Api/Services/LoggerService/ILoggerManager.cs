using System;

namespace UltimateTeam.Api.Services.LoggerService
{
    public interface ILoggerManager
    {
        void LogInfo(Exception e);
        void LogWarn(Exception e);
        void LogDebug(Exception e);
        void LogError(Exception e);
    }
}