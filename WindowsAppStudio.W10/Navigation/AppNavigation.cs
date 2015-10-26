using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using AppStudio.Common.Navigation;
using Windows.UI.Xaml;

namespace WindowsAppStudio.Navigation
{
    public class AppNavigation
    {
        private NavigationNode _active;

        static AppNavigation()
        {

        }

        public NavigationNode Active
        {
            get
            {
                return _active;
            }
            set
            {
                if (_active != null)
                {
                    _active.IsSelected = false;
                }
                _active = value;
                if (_active != null)
                {
                    _active.IsSelected = true;
                }
            }
        }


        public ObservableCollection<NavigationNode> Nodes { get; private set; }

        public void LoadNavigation()
        {
            Nodes = new ObservableCollection<NavigationNode>();

            Nodes.Add(new ItemNavigationNode
            {
                Title = @"Windows App Studio",
                Label = "Home",
                IsSelected = true,
                NavigationInfo = NavigationInfo.FromPage("HomePage")
            });

            Nodes.Add(new ItemNavigationNode
            {
                Label = "About",
                NavigationInfo = NavigationInfo.FromPage("AboutListPage")
            });

            Nodes.Add(new GroupNavigationNode
            {
                Label = "Detail",
                Visibility = Visibility.Visible,
                Nodes = new ObservableCollection<NavigationNode>()
                {
                    new ItemNavigationNode
                    {
                        Label = "Generic Layout",
                        NavigationInfo = NavigationInfo.FromPage("GenericLayoutListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Photo Layout",
                        NavigationInfo = NavigationInfo.FromPage("PhotoLayoutListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Text Layout",
                        NavigationInfo = NavigationInfo.FromPage("TextLayoutListPage")
                    },
                }
            });

            Nodes.Add(new GroupNavigationNode
            {
                Label = "List Layouts",
                Visibility = Visibility.Visible,
                Nodes = new ObservableCollection<NavigationNode>()
                {
                    new ItemNavigationNode
                    {
                        Label = "No Photo",
                        NavigationInfo = NavigationInfo.FromPage("NoPhotoListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Photo Left",
                        NavigationInfo = NavigationInfo.FromPage("PhotoLeftListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Photo Left Description",
                        NavigationInfo = NavigationInfo.FromPage("PhotoLeftDescriptionListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Big Pictures",
                        NavigationInfo = NavigationInfo.FromPage("BigPicturesListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Horizontal Cards",
                        NavigationInfo = NavigationInfo.FromPage("HorizontalCardsListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Vertical Cards",
                        NavigationInfo = NavigationInfo.FromPage("VerticalCardsListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Big Vertical Cards",
                        NavigationInfo = NavigationInfo.FromPage("BigVerticalCardsListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Photo",
                        NavigationInfo = NavigationInfo.FromPage("PhotoListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Big Photo",
                        NavigationInfo = NavigationInfo.FromPage("BigPhotoListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Photo Tile",
                        NavigationInfo = NavigationInfo.FromPage("PhotoTileListPage")
                    },
                }
            });

            Nodes.Add(new GroupNavigationNode
            {
                Label = "Datasources",
                Visibility = Visibility.Visible,
                Nodes = new ObservableCollection<NavigationNode>()
                {
                    new ItemNavigationNode
                    {
                        Label = "Html",
                        NavigationInfo = NavigationInfo.FromPage("HtmlListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "RSS",
                        NavigationInfo = NavigationInfo.FromPage("RSSListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Flickr",
                        NavigationInfo = NavigationInfo.FromPage("FlickrListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Bing",
                        NavigationInfo = NavigationInfo.FromPage("BingListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "Collection",
                        NavigationInfo = NavigationInfo.FromPage("CollectionListPage")
                    },
                    new ItemNavigationNode
                    {
                        Label = "TouchDevelop",
                        NavigationInfo = NavigationInfo.FromPage("TouchDevelopListPage")
                    },
                }
            });

            Nodes.Add(new GroupNavigationNode
            {
                Label = "Actions",
                Visibility = Visibility.Visible,
                Nodes = new ObservableCollection<NavigationNode>()
                {
                    new ItemNavigationNode
                    {
                        Label = "Http",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("http://www.microsoft.com") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "Https",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("https://login.microsoftonline.com") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "FTP",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("ftp://ftp.microsoft.com") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "Email",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("mailto:jdoe@site.com") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "Phone",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("tel:123-456-7890") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "Here Maps - Address",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("bingmaps:?collection=16070+N.E.+36th+Way%2C+Redmond%2C+Wa&lvl=18") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "Here Maps - Directions",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("bingmaps:?rtp=~adr.16070 N.E. 36th Way, Redmond, Wa") }
                    },
                    new ItemNavigationNode
                    {
                        Label = "Custom - Zune",
                        NavigationInfo = new NavigationInfo { NavigationType = NavigationType.DeepLink, TargetUri = new Uri("zune:search?keyword=rss&contenttype=app") }
                    },
                }
            });

            Nodes.Add(new ItemNavigationNode
            {
                Label = "About",
                NavigationInfo = NavigationInfo.FromPage("AboutPage")
            });
            Nodes.Add(new ItemNavigationNode
            {
                Label = "Privacy terms",
                NavigationInfo = new NavigationInfo()
                {
                    NavigationType = NavigationType.DeepLink,
                    TargetUri = new Uri("http://appstudio.windows.com/home/appprivacyterms", UriKind.Absolute)
                }
            });
        }

        public NavigationNode FindPage(Type pageType)
        {
            return GetAllItemNodes(Nodes).FirstOrDefault(n => n.NavigationInfo.NavigationType == NavigationType.Page && n.NavigationInfo.TargetPage == pageType.Name);
        }

        private IEnumerable<ItemNavigationNode> GetAllItemNodes(IEnumerable<NavigationNode> nodes)
        {
            foreach (var node in nodes)
            {
                if (node is ItemNavigationNode)
                {
                    yield return node as ItemNavigationNode;
                }
                else if(node is GroupNavigationNode)
                {
                    var gNode = node as GroupNavigationNode;

                    foreach (var innerNode in GetAllItemNodes(gNode.Nodes))
                    {
                        yield return innerNode;
                    }
                }
            }
        }
    }
}
