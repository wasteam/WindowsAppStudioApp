using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.LocalStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class PhotoTileListPage : PageBase     {
        public PhotoTileListPage()
        {
            this.ViewModel = new ListViewModel<LocalStorageDataConfig, PhotoTile1Schema>(new PhotoTileConfig());
            this.InitializeComponent();
}

        public ListViewModel<LocalStorageDataConfig, PhotoTile1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
