using Windows.UI.Xaml.Navigation;
using AppStudio.Common;
using AppStudio.DataProviders.TouchDevelop;
using WindowsAppStudio;
using WindowsAppStudio.Sections;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Views
{
    public sealed partial class TouchDevelopListPage : PageBase     {
        public TouchDevelopListPage()
        {
            this.ViewModel = new TouchDevelopViewModel(new TouchDevelopConfig());
            this.InitializeComponent();
}

        public TouchDevelopViewModel ViewModel { get; set; }
        protected async override void LoadState(object navParameter)
        {
            await this.ViewModel.LoadDataAsync();
        }

    }
}
