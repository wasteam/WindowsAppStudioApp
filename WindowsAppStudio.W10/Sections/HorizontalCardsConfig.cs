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
    public class HorizontalCardsConfig : SectionConfigBase<DynamicStorageDataConfig, HorizontalCards1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, HorizontalCards1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<HorizontalCards1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=2301142f-87c9-43d5-b0dc-5cb4a0a0f8b4&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("HorizontalCardsListPage");
            }
        }

        public override ListPageConfig<HorizontalCards1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<HorizontalCards1Schema>
                {
                    Title = "Horizontal Cards",

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

        public override DetailPageConfig<HorizontalCards1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, HorizontalCards1Schema>>();

				var actions = new List<ActionConfig<HorizontalCards1Schema>>
				{
				};

                return new DetailPageConfig<HorizontalCards1Schema>
                {
                    Title = "Horizontal Cards",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Horizontal Cards"; }
        }

    }
}
