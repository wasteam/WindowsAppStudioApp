using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class VerticalCardsListPage : PageBase     {
        public VerticalCardsListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, VerticalCards1Schema>(new VerticalCardsConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, VerticalCards1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
