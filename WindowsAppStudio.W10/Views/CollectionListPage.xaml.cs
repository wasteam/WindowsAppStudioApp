using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.LocalStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class CollectionListPage : PageBase     {
        public CollectionListPage()
        {
            this.ViewModel = new ListViewModel<LocalStorageDataConfig, Collection1Schema>(new CollectionConfig());
            this.InitializeComponent();
}

        public ListViewModel<LocalStorageDataConfig, Collection1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
