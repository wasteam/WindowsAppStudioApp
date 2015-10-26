using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.DynamicStorage;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class GenericLayoutListPage : PageBase     {
        public GenericLayoutListPage()
        {
            this.ViewModel = new ListViewModel<DynamicStorageDataConfig, GenericLayout1Schema>(new GenericLayoutConfig());
            this.InitializeComponent();
}

        public ListViewModel<DynamicStorageDataConfig, GenericLayout1Schema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
