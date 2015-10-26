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
    public class NoPhotoConfig : SectionConfigBase<DynamicStorageDataConfig, NoPhoto1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, NoPhoto1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<NoPhoto1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=581986cf-c69c-49be-8f12-f85029a5afa4&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("NoPhotoListPage");
            }
        }

        public override ListPageConfig<NoPhoto1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<NoPhoto1Schema>
                {
                    Title = "No Photo",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = "";
                        viewModel.Image = "";

                    },
                    NavigationInfo = (item) =>
                    {
                        return null;
                    }
                };
            }
        }

        public override DetailPageConfig<NoPhoto1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, NoPhoto1Schema>>();

				var actions = new List<ActionConfig<NoPhoto1Schema>>
				{
				};

                return new DetailPageConfig<NoPhoto1Schema>
                {
                    Title = "No Photo",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "No Photo"; }
        }

    }
}
