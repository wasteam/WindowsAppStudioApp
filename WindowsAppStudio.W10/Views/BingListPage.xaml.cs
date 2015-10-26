using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.Bing;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class BingListPage : PageBase     {
        public BingListPage()
        {
            this.ViewModel = new ListViewModel<BingDataConfig, BingSchema>(new BingConfig());
            this.InitializeComponent();
}

        public ListViewModel<BingDataConfig, BingSchema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
