using AppStudio.Common.Navigation;
using AppStudio.DataProviders;
using AppStudio.DataProviders.Core;
using AppStudio.DataProviders.Html;
using AppStudio.DataProviders.LocalStorage;
using WindowsAppStudio.Config;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Sections
{
    public class AboutConfig : SectionConfigBase<LocalStorageDataConfig, HtmlSchema>
    {
        public override DataProviderBase<LocalStorageDataConfig, HtmlSchema> DataProvider
        {
            get
            {
                return new HtmlDataProvider();
            }
        }

        public override LocalStorageDataConfig Config
        {
            get
            {
                return new LocalStorageDataConfig
                {
                    FilePath = "/Assets/Data/About.htm"
                };
            }
        }


        public override NavigationInfo ListNavigationInfo
        {
            get 
            {
                return NavigationInfo.FromPage("AboutListPage");
            }
        }


        public override ListPageConfig<HtmlSchema> ListPage
        {
            get 
            {
                return new ListPageConfig<HtmlSchema>
                {
                    Title = "About",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Content = item.Content;
                    },
                    NavigationInfo = (item) =>
                    {
                        return null;
                    }
                };
            }
        }

        public override DetailPageConfig<HtmlSchema> DetailPage
        {
            get { return null; }
        }

        public override string PageTitle
        {
            get { return "About"; }
        }

    }
}
