using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class BigVerticalCardsListPage : PageBase     {
        public BigVerticalCardsListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, BigVerticalCards1Schema>(new BigVerticalCardsConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, BigVerticalCards1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
