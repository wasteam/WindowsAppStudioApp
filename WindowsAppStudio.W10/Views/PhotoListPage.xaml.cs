using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class PhotoListPage : PageBase     {
        public PhotoListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, Photo1Schema>(new PhotoConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, Photo1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
