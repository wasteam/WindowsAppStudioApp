using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class BigPhotoListPage : PageBase     {
        public BigPhotoListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, BigPhoto1Schema>(new BigPhotoConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, BigPhoto1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
