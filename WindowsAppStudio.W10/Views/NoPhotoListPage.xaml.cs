using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class NoPhotoListPage : PageBase     {
        public NoPhotoListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, NoPhoto1Schema>(new NoPhotoConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, NoPhoto1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
