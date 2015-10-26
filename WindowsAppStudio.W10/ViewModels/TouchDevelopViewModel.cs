using System.Collections.ObjectModel;
using System.Windows.Input;
using AppStudio.Common.Actions;
using AppStudio.Common.Cache;
using AppStudio.Common.Commands;
using AppStudio.Common.Navigation;
using AppStudio.DataProviders.TouchDevelop;
using WindowsAppStudio.Config;

namespace WindowsAppStudio.ViewModels
{
    public class TouchDevelopViewModel : DataViewModelBase<TouchDevelopDataConfig, TouchDevelopSchema>
    {
        private TouchDevelopConfigBase _sectionConfig;

        public TouchDevelopViewModel(TouchDevelopConfigBase sectionConfig) : base(sectionConfig)
        {
            _sectionConfig = sectionConfig;

            Items = new ObservableCollection<TouchDevelopSchema>();
            Title = sectionConfig.Title;

            Actions.Add(new ActionInfo
            {
                Command = Refresh,
                Style = ActionKnownStyles.Refresh,
                Name = "RefreshButton",
                ActionType = ActionType.Primary
            });
        }

        public ObservableCollection<TouchDevelopSchema> Items { get; private set; }

        public bool HasMoreItems
        {
            get
            {
                return false;
            }
        }

        public ICommand Refresh
        {
            get
            {
                return new RelayCommand(async () =>
                {
                    await LoadDataAsync(true);
                });
            }
        }

        public RelayCommand<TouchDevelopSchema> ItemClickCommand
        {
            get
            {
                return new RelayCommand<TouchDevelopSchema>(
                (item) =>
                {
                    NavigationService.NavigateToPage("TouchDevelopPlayer", item._id);
                });
            }
        }

        protected override void ParseItems(CachedContent<TouchDevelopSchema> content, ItemViewModel selectedItem)
        {
            Items.Clear();
            foreach (var item in content.Items)
            {
                Items.Add(item);
            }
        }
    }
}
