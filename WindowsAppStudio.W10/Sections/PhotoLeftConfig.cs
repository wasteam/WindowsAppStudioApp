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
    public class PhotoLeftConfig : SectionConfigBase<DynamicStorageDataConfig, PhotoLeft1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, PhotoLeft1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<PhotoLeft1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=0031601e-7f72-4d30-8867-1ba7678a914e&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("PhotoLeftListPage");
            }
        }

        public override ListPageConfig<PhotoLeft1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<PhotoLeft1Schema>
                {
                    Title = "Photo Left",

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

        public override DetailPageConfig<PhotoLeft1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, PhotoLeft1Schema>>();

				var actions = new List<ActionConfig<PhotoLeft1Schema>>
				{
				};

                return new DetailPageConfig<PhotoLeft1Schema>
                {
                    Title = "Photo Left",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Photo Left"; }
        }

    }
}
