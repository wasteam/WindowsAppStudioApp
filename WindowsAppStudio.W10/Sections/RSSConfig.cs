using System;
using System.Collections.Generic;
using AppStudio.Common.Actions;
using AppStudio.Common.Commands;
using AppStudio.Common.Navigation;
using AppStudio.DataProviders;
using AppStudio.DataProviders.Core;
using AppStudio.DataProviders.Rss;
using WindowsAppStudio.Config;
using WindowsAppStudio.ViewModels;

namespace WindowsAppStudio.Sections
{
    public class RSSConfig : SectionConfigBase<RssDataConfig, RssSchema>
    {
        public override DataProviderBase<RssDataConfig, RssSchema> DataProvider
        {
            get
            {
                return new RssDataProvider();
            }
        }

        public override RssDataConfig Config
        {
            get
            {
                return new RssDataConfig
                {
                    Url = new Uri("http://blogs.msdn.com/b/windows_app_studio_news/rss.aspx")
                };
            }
        }

        public override NavigationInfo ListNavigationInfo
        {
            get 
            {
                return NavigationInfo.FromPage("RSSListPage");
            }
        }

        public override ListPageConfig<RssSchema> ListPage
        {
            get 
            {
                return new ListPageConfig<RssSchema>
                {
                    Title = "RSS",

                    LayoutBindings = (viewModel, item) =>
                    {
                        viewModel.Title = item.Title.ToSafeString();
                        viewModel.SubTitle = item.PublishDate.ToSafeString();
                        viewModel.Description = item.PublishDate.ToSafeString();
                        viewModel.Image = item.ImageUrl.ToSafeString();

                    },
                    NavigationInfo = (item) =>
                    {
                        return NavigationInfo.FromPage("RSSDetailPage", true);
                    }
                };
            }
        }

        public override DetailPageConfig<RssSchema> DetailPage
        {
            get
            {
                var bindings = new List<Action<ItemViewModel, RssSchema>>();

                bindings.Add((viewModel, item) =>
                {
                    viewModel.PageTitle = item.Title.ToSafeString();
                    viewModel.Title = item.PublishDate.ToSafeString();
                    viewModel.Description = item.Content.ToSafeString();
                    viewModel.Image = item.ImageUrl.ToSafeString();
                    viewModel.Content = null;
                });

				var actions = new List<ActionConfig<RssSchema>>
				{
                    ActionConfig<RssSchema>.Link("Go To Source", (item) => item.FeedUrl.ToSafeString()),
				};

                return new DetailPageConfig<RssSchema>
                {
                    Title = "RSS",
                    LayoutBindings = bindings,
                    Actions = actions
                };
            }
        }

        public override string PageTitle
        {
            get { return "RSS"; }
        }

    }
}
