using System;
using System.Collections.Generic;
using AppStudio.Common.Actions;
using AppStudio.Common.Commands;
using AppStudio.Common.Navigation;
using AppStudio.DataProviders;
using AppStudio.DataProviders.Core;
using AppStudio.DataProviders.Flickr;
using WindowsAppStudio.Config;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Sections
{
    public class FlickrConfig : SectionConfigBase<FlickrDataConfig, FlickrSchema>
    {
        public override DataProviderBase<FlickrDataConfig, FlickrSchema> DataProvider
        {
            get
            {
                return new FlickrDataProvider();
            }
        }

        public override FlickrDataConfig Config
        {
            get
            {
                return new FlickrDataConfig
                {
                    QueryType = FlickrQueryType.Id,
                    Query = @"125591867@N07"
                };
            }
        }

        public override NavigationInfo ListNavigationInfo
        {
            get 
            {
                return NavigationInfo.FromPage("FlickrListPage");
            }
        }

        public override ListPageConfig<FlickrSchema> ListPage
        {
            get 
            {
                return new ListPageConfig<FlickrSchema>
                {
                    Title = "Flickr",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Title.ToSafeString();
                        viewModel.SubTitle = item.Summary.ToSafeString();
                        viewModel.Description = null;
                        viewModel.Image = item.ImageUrl.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return NavigationInfo.FromPage("FlickrDetailPage", true);
                    }
                };
            }
        }

        public override DetailPageConfig<FlickrSchema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, FlickrSchema>>();

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = "Image";
                    viewModel.Title = null;
                    viewModel.Description = null;
                    viewModel.Image = item.ImageUrl.ToSafeString();
                    viewModel.Content = null;
                });

				var actions = new List<ActionConfig<FlickrSchema>>
				{
                    ActionConfig<FlickrSchema>.Link("Go To Source", (item) => item.FeedUrl.ToSafeString()),
				};

                return new DetailPageConfig<FlickrSchema>
                {
                    Title = "Flickr",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "Flickr"; }
        }

    }
}
