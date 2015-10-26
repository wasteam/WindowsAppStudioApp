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
    public class PhotoTileConfig : SectionConfigBase<LocalStorageDataConfig, PhotoTile1Schema>
    {
        public override DataProviderBase<LocalStorageDataConfig, PhotoTile1Schema> DataProvider
        {
            get
            {
                return new LocalStorageDataProvider<PhotoTile1Schema>();
            }
        }

        public override LocalStorageDataConfig Config
        {
            get
            {
                return new LocalStorageDataConfig
                {
                    FilePath = "/Assets/Data/PhotoTile.json"
                };
            }
        }

        public override NavigationInfo ListNavigationInfo
        {
            get 
            {
                return NavigationInfo.FromPage("PhotoTileListPage");
            }
        }

        public override ListPageConfig<PhotoTile1Schema> ListPage
        {
            get 
            {
                return new ListPageConfig<PhotoTile1Schema>
                {
                    Title = "Photo Tile",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = "";
                        viewModel.SubTitle = "";
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

        public override DetailPageConfig<PhotoTile1Schema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, PhotoTile1Schema>>();

				var actions = new List<ActionConfig<PhotoTile1Schema>>
				{
				};

                return new DetailPageConfig<PhotoTile1Schema>
                {
                    Title = "Photo Tile",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Photo Tile"; }
        }

    }
}
