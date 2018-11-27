/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
/**
  *此类是应用程序的主视图。 它在app.js中指定为
  *“mainView”属性。 该设置自动应用“视口”
  *插件导致此视图成为body元素（即视口）。
  * TODO - 替换此视图的此内容以满足您的应用程序的需求。
*/
Ext.define('myApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    plugins: 'viewport',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'myApp.view.main.MainController',
        'myApp.view.main.MainModel',
        'myApp.view.main.List' 
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,//如果指定，tabBar将呈现为TabPanel的标题的项目，指定的tabBarHeaderPosition将用作Panel标题的 Ext.panel.Header＃itemPosition。如果没有指定，的TabBar 将呈现为在放入项tabPosition。
    titleRotation: 0,//没有轮换
    tabRotation: 0,//没有轮换

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
