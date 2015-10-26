using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class PhotoLeftListPage : PageBase     {
        public PhotoLeftListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, PhotoLeft1Schema>(new PhotoLeftConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, PhotoLeft1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
