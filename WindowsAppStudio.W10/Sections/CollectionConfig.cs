using System;
using System.Collections.Generic;
using AppStudio.Common.Navigation;
using AppStudio.DataProviders;
using AppStudio.DataProviders.Core;
using AppStudio.DataProviders.LocalStorage;
using WindowsAppStudio.Config;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Sections
{
    public class CollectionConfig : SectionConfigBase<LocalStorageDataConfig, Collection1Schema>
    {
        public override DataProviderBase<LocalStorageDataConfig, Collection1Schema> DataProvider
        {
            get
            {
                return new LocalStorageDataProvider<Collection1Schema>();
            }
        }

        public override LocalStorageDataConfig Config
        {
            get
            {
                return new LocalStorageDataConfig
                {
                    FilePath = "/Assets/Data/Collection.json"
                };
            }
        }

        public override NavigationInfo ListNavigationInfo
        {
            get 
            {
                return NavigationInfo.FromPage("CollectionListPage");
            }
        }

        public override ListPageConfig<Collection1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<Collection1Schema>
                {
                    Title = "Collection",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Name.ToSafeString();
                        viewModel.SubTitle = item.Surname.ToSafeString();
                        viewModel.Description = "";
                        viewModel.Image = item.Image.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return NavigationInfo.FromPage("CollectionDetailPage", true);
                    }
                };
            }
        }

        public override DetailPageConfig<Collection1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, Collection1Schema>>();

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = "Collection Item";
                    viewModel.Title = item.Name.ToSafeString();
                    viewModel.Description = item.PersonalSummary.ToSafeString();
                    viewModel.Image = item.Image.ToSafeString();
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

				var actions = new List<ActionConfig<Collection1Schema>>
				{
                    ActionConfig<Collection1Schema>.Mail("Mail", (item) => item.Mail.ToSafeString()),
                    ActionConfig<Collection1Schema>.Phone("Phone", (item) => item.Phone.ToSafeString()),
				};

                return new DetailPageConfig<Collection1Schema>
                {
                    Title = "Collection",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Collection"; }
        }

    }
}
