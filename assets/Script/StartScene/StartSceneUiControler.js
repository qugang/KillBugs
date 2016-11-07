cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        m1Star1:{
            default: null,
            type: cc.Node,
        },
        m1Star2:{
            default: null,
            type: cc.Node,
        },
        m1Star3:{
            default: null,
            type: cc.Node,
        },
        m2Star1:{
            default: null,
            type: cc.Node,
        },
        m2Star2:{
            default: null,
            type: cc.Node,
        },
        m2Star3:{
            default: null,
            type: cc.Node,
        },
        m3Star1:{
            default: null,
            type: cc.Node,
        },
        m3Star2:{
            default: null,
            type: cc.Node,
        },
        m3Star3:{
            default: null,
            type: cc.Node,
        },
        m4Star1:{
            default: null,
            type: cc.Node,
        },
        m4Star2:{
            default: null,
            type: cc.Node,
        },
        m4Star3:{
            default: null,
            type: cc.Node,
        },
        m5Star1:{
            default: null,
            type: cc.Node,
        },
        m5Star2:{
            default: null,
            type: cc.Node,
        },
        m5Star3:{
            default: null,
            type: cc.Node,
        },
        m6Star1:{
            default: null,
            type: cc.Node,
        },
        m6Star2:{
            default: null,
            type: cc.Node,
        },
        m6Star3:{
            default: null,
            type: cc.Node,
        },
        m7Star1:{
            default: null,
            type: cc.Node,
        },
        m7Star2:{
            default: null,
            type: cc.Node,
        },
        m7Star3:{
            default: null,
            type: cc.Node,
        },
        m8Star1:{
            default: null,
            type: cc.Node,
        },
        m8Star2:{
            default: null,
            type: cc.Node,
        },
        m8Star3:{
            default: null,
            type: cc.Node,
        },
        m9Star1:{
            default: null,
            type: cc.Node,
        },
        m9Star2:{
            default: null,
            type: cc.Node,
        },
        m9Star3:{
            default: null,
            type: cc.Node,
        },
        m10Star1:{
            default: null,
            type: cc.Node,
        },
        m10Star2:{
            default: null,
            type: cc.Node,
        },
        m10Star3:{
            default: null,
            type: cc.Node,
        },
        m11Star1:{
            default: null,
            type: cc.Node,
        },
        m11Star2:{
            default: null,
            type: cc.Node,
        },
        m11Star3:{
            default: null,
            type: cc.Node,
        },
        m12Star1:{
            default: null,
            type: cc.Node,
        },
        m12Star2:{
            default: null,
            type: cc.Node,
        },
        m12Star3:{
            default: null,
            type: cc.Node,
        },
        m1Button:{
            default:null,
            type:cc.Node,
        },
        m2Button:{
            default:null,
            type:cc.Node,
        },
        m3Button:{
            default:null,
            type:cc.Node,
        },
        m4Button:{
            default:null,
            type:cc.Node,
        },
        m5Button:{
            default:null,
            type:cc.Node,
        },
        m6Button:{
            default:null,
            type:cc.Node,
        },
        m7Button:{
            default:null,
            type:cc.Node,
        },
        m8Button:{
            default:null,
            type:cc.Node,
        },
        m9Button:{
            default:null,
            type:cc.Node,
        },
        m10Button:{
            default:null,
            type:cc.Node,
        },
        m11Button:{
            default:null,
            type:cc.Node,
        },
        m12Button:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        
        var userdata = require("UserData");
        var tempUserData = JSON.parse(cc.sys.localStorage.getItem("UserData"));
        if(tempUserData !== null && tempUserData !== undefined)
        {
            userdata = tempUserData;
        }
        
        if(userdata.m1.isEnable)
        {
            this.enableButton(this.m1Button);
        }
        if(userdata.m2.isEnable)
        {
            this.enableButton(this.m2Button);
        }
         if(userdata.m3.isEnable)
        {
            this.enableButton(this.m3Button);
        }
         if(userdata.m4.isEnable)
        {
            this.enableButton(this.m4Button);
        }
         if(userdata.m5.isEnable)
        {
            this.enableButton(this.m5Button);
        }
         if(userdata.m6.isEnable)
        {
            this.enableButton(this.m6Button);
        }
         if(userdata.m7.isEnable)
        {
            this.enableButton(this.m7Button);
        }
         if(userdata.m8.isEnable)
        {
            this.enableButton(this.m8Button);
        }
         if(userdata.m9.isEnable)
        {
            this.enableButton(this.m9Button);
        }
         if(userdata.m10.isEnable)
        {
            this.enableButton(this.m10Button);
        }
         if(userdata.m11.isEnable)
        {
            this.enableButton(this.m11Button);
        }
         if(userdata.m12.isEnable)
        {
            this.enableButton(this.m12Button);
        }
        this.enableStar(userdata.m1.star, this.m1Star1, this.m1Star2, this.m1Star3);
        this.enableStar(userdata.m2.star, this.m2Star1, this.m2Star2, this.m2Star3);
        this.enableStar(userdata.m3.star, this.m3Star1, this.m3Star2, this.m3Star3);
        this.enableStar(userdata.m4.star, this.m4Star1, this.m4Star2, this.m4Star3);
        this.enableStar(userdata.m5.star, this.m5Star1, this.m5Star2, this.m5Star3);
        this.enableStar(userdata.m6.star, this.m6Star1, this.m6Star2, this.m6Star3);
        this.enableStar(userdata.m7.star, this.m7Star1, this.m7Star2, this.m7Star3);
        this.enableStar(userdata.m8.star, this.m8Star1, this.m8Star2, this.m8Star3);
        this.enableStar(userdata.m9.star, this.m9Star1, this.m9Star2, this.m9Star3);
        this.enableStar(userdata.m10.star, this.m10Star1, this.m10Star2, this.m10Star3);
        this.enableStar(userdata.m11.star, this.m11Star1, this.m11Star2, this.m11Star3);
        this.enableStar(userdata.m12.star, this.m12Star1, this.m12Star2, this.m12Star3);
        
        var chapterData = require("ChapterData");
        this.m1Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter1;
            cc.director.loadScene('GameScene');
        });
        this.m2Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter2;
            cc.director.loadScene('GameScene');
        });
        
        this.m3Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter3;
            cc.director.loadScene('GameScene');
        });
        
        this.m4Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter4;
            cc.director.loadScene('GameScene');
        });
        
        this.m5Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter5;
            cc.director.loadScene('GameScene');
        });
        
        this.m6Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter6;
            cc.director.loadScene('GameScene');
        });
        
        
        this.m7Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter7;
            cc.director.loadScene('GameScene');
        });
        
        
        this.m8Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter8;
            cc.director.loadScene('GameScene');
        });
        
        
        this.m9Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter9;
            cc.director.loadScene('GameScene');
        });
        
        this.m10Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter10;
            cc.director.loadScene('GameScene');
        });
        
        this.m11Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter11;
            cc.director.loadScene('GameScene');
        });
        
        this.m12Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter12;
            cc.director.loadScene('GameScene');
        });
        
        
       // cc.log(JSON.stringify(userdata))
        //cc.log(userdata);
    },
    enableButton:function(tempNode){
        var button =tempNode.getComponent(cc.Button);
        button.interactable  = true;
    },
    enableStar: function(starNumber,star1,star2,star3)
    {
        if(starNumber <1)
        {
            star1.getComponent(cc.Sprite).enabled = false;
        }
        if(starNumber <2)
        {
            star2.getComponent(cc.Sprite).enabled = false;
        }
        if(starNumber <3)
        {
            star3.getComponent(cc.Sprite).enabled = false;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
