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
    public class GenericLayoutConfig : SectionConfigBase<DynamicStorageDataConfig, GenericLayout1Schema>
    {
        public override DataProviderBase<DynamicStorageDataConfig, GenericLayout1Schema> DataProvider
        {
            get
            {
                return new DynamicStorageDataProvider<GenericLayout1Schema>();
            }
        }

        public override DynamicStorageDataConfig Config
        {
            get
            {
                return new DynamicStorageDataConfig
                {
                    Url = new Uri("http://ds.winappstudio.com/api/data/collection?dataRowListId=6db1e7d0-5216-4519-8978-d51f1452f9f2&appId=82436223-adc7-4422-b43f-3fed935e5aaf"),
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
                return NavigationInfo.FromPage("GenericLayoutListPage");
            }
        }

        public override ListPageConfig<GenericLayout1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<GenericLayout1Schema>
                {
                    Title = "Generic Layout",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = "";
                        viewModel.Image = item.Thumbnail.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return NavigationInfo.FromPage("GenericLayoutDetailPage", true);
                    }
                };
            }
        }

        public override DetailPageConfig<GenericLayout1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, GenericLayout1Schema>>();

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = item.Name.ToSafeString();
                    viewModel.Title = item.Surname.ToSafeString();
                    viewModel.Description = item.PersonalSummary.ToSafeString();
                    viewModel.Image = item.Image.ToSafeString();
                    viewModel.Content = null;
                });

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = "Other data";
                    viewModel.Title = "";
                    viewModel.Description = item.Other.ToSafeString();
                    viewModel.Image = "";
                    viewModel.Content = null;
                });

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = "Detail";
                    viewModel.Title = item.Phone.ToSafeString();
                    viewModel.Description = item.Mail.ToSafeString();
                    viewModel.Image = "";
                    viewModel.Content = null;
                });

				var actions = new List<ActionConfig<GenericLayout1Schema>>
				{
                    ActionConfig<GenericLayout1Schema>.Mail("Mail", (item) => item.Mail.ToSafeString()),
                    ActionConfig<GenericLayout1Schema>.Phone("Phone", (item) => item.Phone.ToSafeString()),
				};

                return new DetailPageConfig<GenericLayout1Schema>
                {
                    Title = "Generic Layout",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Generic Layout"; }
        }

    }
}
