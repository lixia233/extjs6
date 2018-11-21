Ext.define('myApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    cls: 'auth-locked-window',

    requires: [
        'Ext.panel.Panel',
        'Ext.form.Panel',
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Table',
        'Ext.layout.container.Fit',
        'Ext.layout.container.Center',
        'Ext.Container',
        'myApp.view.login.LoginController'
    ],

    controller:'login',

    width: window.innerWidth,//自适应浏览器窗口
    height:window.innerHeight,
    autoWidth: true,
    autoHeight : true,


    layout: 'center',//布局居中
    closable:false,//窗口是否可关闭
    autoShow:true,//windows默认是隐藏，要设置为显示
    draggable: false,//不可拖动
    resizable:false,//不允许用户在每个边调整窗口大小
    maximized : true,//最初以最大化窗口显示
    // maximizable:true,//是否增加最大化，默认没有
    scrollable: false,

    style:{
        border:0
    },

    defaults: {
        bodyPadding: 15,
        // anchor:"100%"//拉伸窗口，里面的布局顶边
        // frame: true
    },

    items:[{
        id:'register-login-Panel',
        layout: 'absolute',//绝对布局
        width:800,
        height:480,
        items: [{
            id:'registerPanel',
            x: 0,
            y: 46,
            width:800,
            height:389,
            items:[{
                id:'registerTitle',
                title:'练手',
                x:47,
                y:47,
                width:280,
                ui:'light',
                html:'前端主要是用Extjs6.6.0框架完成。编程语言是java。该页面还需要调整样式，添加一个跳转到首页的链接。'
            },{
                id:'registerBtn',
                xtype:'button',
                x:47,
                y:150,
                iconCls:'x-fa fa-angle-right',
                text:'注册',
                handler:''
            }]
        },{
            id:'loginPanel',
            x: 363,
            y: 0,
            width:396,
            height:480,
            items:[{
                id:'loginLogo',
                xtype:'image',
                alt:'这是logo',
                height:160,
                frame:true,
                bodyStyle:'padding-top:10px',
                src:'resources/images/login/logo.jpg'
            },{
                id: 'loginForm',
                xtype:'form',
                // reference: 'form',
                defaultType:'textfield',
                frame: false,
                items: [{
                    xtype:'textfield',
                    name: 'username',
                    width:300,
                    height:28,
                    hideLabel: true,
                    emptyText:'请输入用户名',
                    blankText:'不能为空',
                    allowBlank: false,
                    msgTarget: 'side',//提示信息
                    triggers: {
                        glyphed: {
                            cls:'x-fa fa-user-o'
                        }
                    }
                },{
                    xtype:'textfield',
                    name: 'password',
                    inputType: 'password',
                    width:300,
                    height:28,
                    hideLabel: true,
                    emptyText:'请输入密码',
                    blankText:'不能为空',
                    allowBlank: false,
                    msgTarget: 'side',//提示信息
                    triggers: {
                        glyphed: {
                            cls:'x-fa fa-key'
                        }
                    }
                },{
                    xtype:'container',
                    layout:'hbox',
                    x:45,
                    width:300,
                    items:[{
                        xtype:'checkbox',
                        flex:1,
                        cls:'form-panel-font-color rememberMeCheckbox',
                        boxLabel: '记住我',
                        name: 'remember'
                    },{
                        id:'loginForget',
                        xtype: 'box',
                        html:'<a href="" target="_blank">忘记密码？</a>'
                    }]
                }]
            },{
                xtype:'button',
                iconAlign:'center',
                text:'登录',
                id:'loginBtn',
                x:150,
                width:100,
                scale:'medium',
                formBind: true,//按钮是否可用取决于form
                // disabled:true,//按钮不可用
                listeners:{
                    click: 'onLoginClick'
                }
            }]
        }]

    }]

    

});