/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'myApp.Application',

    name: 'myApp',

    requires: [
        // This will automatically load all classes in the myApp namespace
        // so that application classes do not need to require each other.
        'myApp.*'
    ],

    // The name of the initial view to create.
    /*禁用当前mainView,使打开即登陆页面
    mainView: 'myApp.view.main.Main'
    */
});
