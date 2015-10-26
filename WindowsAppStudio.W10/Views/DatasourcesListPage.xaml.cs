using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.LocalStorage;
using AppStudio.DataProviders.Menu;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class DatasourcesListPage : PageBase     {
        public DatasourcesListPage()
        {
            this.ViewModel = new ListViewModel<LocalStorageDataConfig, MenuSchema>(new DatasourcesConfig());
            this.InitializeComponent();
}

        public ListViewModel<LocalStorageDataConfig, MenuSchema> ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
