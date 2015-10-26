using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.Rss;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class RSSListPage : PageBase     {
        public RSSListPage()
        {
            this.ViewModel = new ListViewModel<RssDataConfig, RssSchema>(new RSSConfig());
            this.InitializeComponent();
}

        public ListViewModel<RssDataConfig, RssSchema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
