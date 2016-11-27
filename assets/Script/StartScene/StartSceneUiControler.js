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
        mStart:{
            default:null,
            type:cc.Node
        },
        mainBg:{
            default:null,
            type:cc.Node
        },
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
        yearNode:{
            default:null,
            type:cc.Node
        },
        startButtonMusic:{
           url: cc.AudioClip,
           default:null
        },
        cutyearMusic:{
           url: cc.AudioClip,
           default:null
        }
    },

    // use this for initialization
    onLoad: function () {
        var userdata = require("UserData");
        
        //cc.sys.localStorage.setItem('UserData', JSON.stringify(userdata));
        // cc.sys.localStorage.setItem('UserData', JSON.stringify(userdata));
        if(cc.sys.localStorage.getItem("UserData") !== null)
        {
            userdata = JSON.parse(cc.sys.localStorage.getItem("UserData"));
        }
        else
        {
            cc.sys.localStorage.setItem('UserData', JSON.stringify(userdata));
        }
        
        this.userdata = userdata;
        this.currentYear = 1;
        
        cc.log(this.userdata.Year2.m1.isEnable);
        
        this.intitButtonStar(userdata);
        
        var chapterData = require("ChapterData");
        this.m1Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter1;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        this.m2Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter2;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m3Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter3;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m4Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter4;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m5Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter5;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m6Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter6;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        
        this.m7Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter7;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        
        this.m8Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter8;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        
        this.m9Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter9;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m10Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter10;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m11Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter11;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        this.m12Button.on("click",function(event){
            chapterData.currentChapter = chapterData.chapter12;
            chapterData.currentYear = this.currentYear;
            cc.director.loadScene('GameScene');
            cc.audioEngine.playEffect(this.startButtonMusic, false);
        }.bind(this));
        
        
        this.mainBg.on(cc.Node.EventType.TOUCH_END,function(event){
            if(event.getStartLocation().x > event.getLocation().x)
            {
                if(this.currentYear <3)
                {
                    this.currentYear++;
                    this.mStart.runAction(cc.sequence(cc.fadeOut(0.5),cc.fadeIn(0.5),cc.callFunc(function(){
                        this.intitButtonStar(this.userdata);
                        this.loadYear();
                    }.bind(this))));
                    cc.audioEngine.playEffect(this.cutyearMusic, false);
                }
            }
            if(event.getStartLocation().x < event.getLocation().x)
            {
                if(this.currentYear > 1)
                {
                    this.currentYear--;
                    this.mStart.runAction(cc.sequence(cc.fadeOut(0.5),cc.fadeIn(0.5),cc.callFunc(function(){
                        this.intitButtonStar(this.userdata);
                        this.loadYear();
                    }.bind(this))));
                    cc.audioEngine.playEffect(this.cutyearMusic, false);
                }
            }
        }.bind(this));
    },
    loadYear: function(){
        if(this.currentYear == 1)
        {
            cc.loader.loadRes("StartScene/Y1_06",cc.SpriteFrame,function(err,spriteFrame){
                this.yearNode.getComponent(cc.Sprite).spriteFrame = spriteFrame
            }.bind(this));
        }
        if(this.currentYear == 2)
        {
            cc.loader.loadRes("StartScene/Y2_06",cc.SpriteFrame,function(err,spriteFrame){
                this.yearNode.getComponent(cc.Sprite).spriteFrame = spriteFrame
            }.bind(this));
        }
        if(this.currentYear == 3)
        {
             cc.loader.loadRes("StartScene/Y3_06",cc.SpriteFrame,function(err,spriteFrame){
                this.yearNode.getComponent(cc.Sprite).spriteFrame = spriteFrame
            }.bind(this));
        }
    },
    
    intitButtonStar: function(userdata){
        var yUserdata = null;
        if(this.currentYear == 1)
        {
            yUserdata = userdata.Year1;
        }
        if(this.currentYear == 2)
        {
            yUserdata = userdata.Year2;
        }
        if(this.currentYear == 3)
        {
            yUserdata = userdata.Year3;
        }
        this.enableButton(this.m1Button,yUserdata.m1.isEnable);
        this.enableButton(this.m2Button,yUserdata.m2.isEnable);
        this.enableButton(this.m3Button,yUserdata.m3.isEnable);
        this.enableButton(this.m4Button,yUserdata.m4.isEnable);
        this.enableButton(this.m5Button,yUserdata.m5.isEnable);
        this.enableButton(this.m6Button,yUserdata.m6.isEnable);
        this.enableButton(this.m7Button,yUserdata.m7.isEnable);
        this.enableButton(this.m8Button,yUserdata.m8.isEnable);
        this.enableButton(this.m9Button,yUserdata.m9.isEnable);
        this.enableButton(this.m10Button,yUserdata.m10.isEnable);
        this.enableButton(this.m11Button,yUserdata.m11.isEnable);
        this.enableButton(this.m12Button,yUserdata.m12.isEnable);
        this.enableStar(yUserdata.m1.star, this.m1Star1, this.m1Star2, this.m1Star3);
        this.enableStar(yUserdata.m2.star, this.m2Star1, this.m2Star2, this.m2Star3);
        this.enableStar(yUserdata.m3.star, this.m3Star1, this.m3Star2, this.m3Star3);
        this.enableStar(yUserdata.m4.star, this.m4Star1, this.m4Star2, this.m4Star3);
        this.enableStar(yUserdata.m5.star, this.m5Star1, this.m5Star2, this.m5Star3);
        this.enableStar(yUserdata.m6.star, this.m6Star1, this.m6Star2, this.m6Star3);
        this.enableStar(yUserdata.m7.star, this.m7Star1, this.m7Star2, this.m7Star3);
        this.enableStar(yUserdata.m8.star, this.m8Star1, this.m8Star2, this.m8Star3);
        this.enableStar(yUserdata.m9.star, this.m9Star1, this.m9Star2, this.m9Star3);
        this.enableStar(yUserdata.m10.star, this.m10Star1, this.m10Star2, this.m10Star3);
        this.enableStar(yUserdata.m11.star, this.m11Star1, this.m11Star2, this.m11Star3);
        this.enableStar(yUserdata.m12.star, this.m12Star1, this.m12Star2, this.m12Star3);  
    },
    enableButton:function(tempNode,isEnable){
        var button = tempNode.getComponent(cc.Button);
        if(isEnable)
        {
            button.interactable  = true;
        }
        else
        {
            button.interactable  = false;
        }
    },
    enableStar:function(starNumber,star1,star2,star3)
    {
        if(starNumber >= 1)
        {
             star1.getComponent(cc.Sprite).enabled = true;
        }
        else
        {
            star1.getComponent(cc.Sprite).enabled = false;
        }
        
        if(starNumber >= 2)
        {
            star2.getComponent(cc.Sprite).enabled = true;
        }
        else
        {
            star2.getComponent(cc.Sprite).enabled = false;
        }
        
        if(starNumber >= 3)
        {
             star3.getComponent(cc.Sprite).enabled = true;
        }
        else
        {
            star3.getComponent(cc.Sprite).enabled = false;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
