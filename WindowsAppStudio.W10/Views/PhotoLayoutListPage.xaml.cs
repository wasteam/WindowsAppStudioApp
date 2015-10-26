using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class PhotoLayoutListPage : PageBase     {
        public PhotoLayoutListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, PhotoLayout1Schema>(new PhotoLayoutConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, PhotoLayout1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
