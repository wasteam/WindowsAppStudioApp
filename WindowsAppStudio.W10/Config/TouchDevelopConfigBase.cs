using AppStudio.DataProviders.TouchDevelop;

namespace WindowsAppStudio.Config
{
    public abstract class TouchDevelopConfigBase : ConfigBase<TouchDevelopDataConfig, TouchDevelopSchema>
    {
        public abstract string Title { get; }
    }
}
