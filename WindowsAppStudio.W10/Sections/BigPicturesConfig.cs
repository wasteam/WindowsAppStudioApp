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
    public class BigPicturesConfig : SectionConfigBase<DynamicStorageDataConfig, BigPictures1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, BigPictures1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<BigPictures1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=e973a745-25fa-4355-8532-f6222de46cb9&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("BigPicturesListPage");
            }
        }

        public override ListPageConfig<BigPictures1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<BigPictures1Schema>
                {
                    Title = "Big Pictures",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = "";
                        viewModel.Image = item.Image.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return null;
                    }
                };
            }
        }

        public override DetailPageConfig<BigPictures1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, BigPictures1Schema>>();

				var actions = new List<ActionConfig<BigPictures1Schema>>
				{
				};

                return new DetailPageConfig<BigPictures1Schema>
                {
                    Title = "Big Pictures",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Big Pictures"; }
        }

    }
}
