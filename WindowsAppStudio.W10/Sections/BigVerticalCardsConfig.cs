using System;
using System.Collections.Generic;
using AppStudio.Common;
using AppStudio.Common.Actions;
using AppStudio.Common.Commands;
using AppStudio.Common.Navigation;
using AppStudio.DataProviders;
using AppStudio.DataProviders.Core;
using AppStudio.DataProviders.DynamicStorage;
using Windows.Storage;
using WindowsAppStudio.Config;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Sections
{
    public class BigVerticalCardsConfig : SectionConfigBase<DynamicStorageDataConfig, BigVerticalCards1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, BigVerticalCards1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<BigVerticalCards1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=ced43f53-2333-45d5-a819-dd0a95a45e32&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
                    AppId = "82436223-adc7-4422-b43f-3fed935e5aaf",
                    StoreId = ApplicationData.Current.LocalSettings.Values[LocalSettingNames.StoreId] as string,
                    DeviceType = ApplicationData.Current.LocalSettings.Values[LocalSettingNames.DeviceType] as string
                };
            }
        }

        public override NavigationInfo ListNavigationInfo
        {
            get 
            {
                return NavigationInfo.FromPage("BigVerticalCardsListPage");
            }
        }

        public override ListPageConfig<BigVerticalCards1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<BigVerticalCards1Schema>
                {
                    Title = "Big Vertical Cards",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = "";
                        viewModel.Image = item.Thumbnail.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return null;
                    }
                };
            }
        }

        public override DetailPageConfig<BigVerticalCards1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, BigVerticalCards1Schema>>();

				var actions = new List<ActionConfig<BigVerticalCards1Schema>>
				{
				};

                return new DetailPageConfig<BigVerticalCards1Schema>
                {
                    Title = "Big Vertical Cards",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Big Vertical Cards"; }
        }

    }
}
