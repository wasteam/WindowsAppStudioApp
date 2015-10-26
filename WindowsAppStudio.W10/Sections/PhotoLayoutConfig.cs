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
    public class PhotoLayoutConfig : SectionConfigBase<DynamicStorageDataConfig, PhotoLayout1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, PhotoLayout1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<PhotoLayout1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=ccd467e1-2fd6-4f13-a0fb-6ca261f872ec&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("PhotoLayoutListPage");
            }
        }

        public override ListPageConfig<PhotoLayout1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<PhotoLayout1Schema>
                {
                    Title = "Photo Layout",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = "";
                        viewModel.Image = item.Thumbnail.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return NavigationInfo.FromPage("PhotoLayoutDetailPage", true);
                    }
                };
            }
        }

        public override DetailPageConfig<PhotoLayout1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, PhotoLayout1Schema>>();

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = item.Name.ToSafeString();
                    viewModel.Title = item.Surname.ToSafeString();
                    viewModel.Description = item.PersonalSummary.ToSafeString();
                    viewModel.Image = item.Image.ToSafeString();
                    viewModel.Content = null;
                });

				var actions = new List<ActionConfig<PhotoLayout1Schema>>
				{
				};

                return new DetailPageConfig<PhotoLayout1Schema>
                {
                    Title = "Photo Layout",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Photo Layout"; }
        }

    }
}
