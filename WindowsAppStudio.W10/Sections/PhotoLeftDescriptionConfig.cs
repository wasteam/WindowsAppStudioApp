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
    public class PhotoLeftDescriptionConfig : SectionConfigBase<DynamicStorageDataConfig, PhotoLeftDescription1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, PhotoLeftDescription1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<PhotoLeftDescription1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=43b48886-9a30-490b-a877-82d1b728cdfb&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("PhotoLeftDescriptionListPage");
            }
        }

        public override ListPageConfig<PhotoLeftDescription1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<PhotoLeftDescription1Schema>
                {
                    Title = "Photo Left Description",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = item.PersonalSummary.ToSafeString();
                        viewModel.Image = item.Thumbnail.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return null;
                    }
                };
            }
        }

        public override DetailPageConfig<PhotoLeftDescription1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, PhotoLeftDescription1Schema>>();

				var actions = new List<ActionConfig<PhotoLeftDescription1Schema>>
				{
				};

                return new DetailPageConfig<PhotoLeftDescription1Schema>
                {
                    Title = "Photo Left Description",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Photo Left Description"; }
        }

    }
}
