/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('myApp.Application', {
    extend: 'Ext.app.Application',

    name: 'myApp',

    views: [
        'myApp.view.login.Login',
        'myApp.view.main.Main'
        // 'myApp.view.trees.Trees-main'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        // TODO - Launch the application
        //TODO - 启动应用程序

        var loggedIn;

        // Check to see the current value of the localStorage key
        //检查以查看localStorage密钥的当前值
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        //这个三元运算符确定TutorialLoggedIn键的值。
        //如果TutorialLoggedIn不为true，我们会显示登录窗口，
        //否则，我们显示主视图
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
            // xtype: loggedIn ? 'trees-main' : 'login'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
