using AppStudio.DataProviders;
using AppStudio.DataProviders.TouchDevelop;
using WindowsAppStudio.Config;

namespace WindowsAppStudio.Sections
{
    public class TouchDevelopConfig : TouchDevelopConfigBase
    {
        public override string Title
        {
            get { return "TouchDevelop"; }
        }

        public override DataProviderBase<TouchDevelopDataConfig, TouchDevelopSchema> DataProvider
        {
            get
            {
                return new TouchDevelopDataProvider();
            }
        }

        public override TouchDevelopDataConfig Config
        {
            get
            {
                return new TouchDevelopDataConfig
                {
                    LocalDataSource = "/Assets/Data/TouchDevelop.json",
                    ScriptId = "leasc"
                };
            }
        }
    }
}
