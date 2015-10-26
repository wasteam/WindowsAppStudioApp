using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class HorizontalCardsListPage : PageBase     {
        public HorizontalCardsListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, HorizontalCards1Schema>(new HorizontalCardsConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, HorizontalCards1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
