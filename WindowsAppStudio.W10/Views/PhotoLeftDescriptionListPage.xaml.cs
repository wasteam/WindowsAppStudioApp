using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class PhotoLeftDescriptionListPage : PageBase     {
        public PhotoLeftDescriptionListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, PhotoLeftDescription1Schema>(new PhotoLeftDescriptionConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, PhotoLeftDescription1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
