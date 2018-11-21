Ext.define('myApp.view.login.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',

    
    /*登录*/
    onLoginClick: function() {

        // Set the localStorage value to true
        //将localStorage值设置为true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        //删除登录窗口
        this.getView().destroy();

        // Add the main view to the viewport
        //将主视图添加到视口
        Ext.create({
            xtype: 'app-main'
            // xtype:'trees-main'
        });

    }

});