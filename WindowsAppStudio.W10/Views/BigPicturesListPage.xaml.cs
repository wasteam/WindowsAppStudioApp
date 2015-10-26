using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class BigPicturesListPage : PageBase     {
        public BigPicturesListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, BigPictures1Schema>(new BigPicturesConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, BigPictures1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
