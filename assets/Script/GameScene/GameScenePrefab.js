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
        shuidi:{
            default: null,
            type: cc.SpriteFrame,
        },
        shuidiMusic: {
            url: cc.AudioClip,
            default: null
        },
        doMusic:{
            url: cc.AudioClip,
            default:null
        },
        reMusic:{
            url: cc.AudioClip,
            default:null
        },
        miMusic:{
            url: cc.AudioClip,
            default:null
        },
        faMusic:{
            url: cc.AudioClip,
            default:null
        },
        soMusic:{
            url: cc.AudioClip,
            default:null
        },
        laMusic:{
            url: cc.AudioClip,
            default:null
        },
        xiMusic:{
            url: cc.AudioClip,
            default:null
        },
        bigShuidiMusic:{
            url: cc.AudioClip,
            default: null
        },
        bigShuidi:{
            default: null,
            type: cc.SpriteFrame,
        },
        canvas: {
            default: null,
            type: cc.Canvas
        },
        nengliangtiaoCtrl:{
            default: null,
            type:cc.ProgressBar
        },
        shuidiBao:{
            default: null,
            type:cc.Node
        },
        clearShuidi:{
            default:null,
            type:cc.Node
        },
        niver1:{
            default: null,
            type:cc.Node
        },
        niver2:{
            default: null,
            type:cc.Node
        },
        niver3:{
            default:null,
            type:cc.Node
        },
        niver4:{
            default:null,
            type:cc.Node
        },
        niver5:{
            default:null,
            type:cc.Node
        },
        niver6:{
            default:null,
            type:cc.Node
        },
        niver7:{
            default:null,
            type:cc.Node
        },
        niver8:{
            default:null,
            type:cc.Node
        },
        niver9:{
            default:null,
            type:cc.Node
        },
        niver10:{
            default:null,
            type:cc.Node
        },
        nengliang:{
            default:null,
            type:cc.Node
        },
        fire1:{
            default:null,
            type:cc.Node
        },
        fire2:{
            default:null,
            type:cc.Node
        },
        bg1Node:{
            default:null,
            type:cc.Node
        },
        bg2Node:{
            default:null,
            type:cc.Node
        },
        bg3Node:{
            default:null,
            type:cc.Node
        },
        zhanli:{
            default:null,
            type:cc.Node
        },
        longStart:{
            default:null,
            type:cc.Node
        },
        chongzou:{
            default:null,
            type:cc.Node
        },
        winBg:{
            default:null,
            type:cc.Node
        },
        winReStart:{
            default:null,
            type:cc.Node
        },
        winBack:{
            default:null,
            type:cc.Node
        },
        winStar1:{
            default:null,
            type:cc.Node
        },
        winStar2:{
            default:null,
            type:cc.Node
        },
        winStar3:{
            default:null,
            type:cc.Node
        },
        winBoomLable:{
            default:null,
            type:cc.Node
        },
        winLostLable:{
            default:null,
            type:cc.Node
        },
        failBg:{
            default:null,
            type:cc.Node,
        },
        failReStart:{
            default:null,
            type:cc.Node,
        },
        failBack:{
            default:null,
            type:cc.Node
        },
        failBoomLable:{
            default:null,
            type:cc.Node
        },
        lSlow:{
            default:null,
            type:cc.Node
        },
        lSnow:{
            default:null,
            type:cc.Node
        },
        lLighting:{
            default:null,
            type:cc.Node
        },
        lTimeice:{
            default:null,
            type:cc.Node
        },
        bigNumberToSpawn:0,
        numberToSpawn:0,
        spawnInterval:0
    },
    
    addSpawn: function(){
        if ((this.spawnCount + this.bigSpawnCount) >= (this.numberToSpawn + this.bigNumberToSpawn)) {
            this.clearRepeater();
            return;
        }
        
        var ramdomNumber =  Math.floor(Math.random() * 1+5);
        if(ramdomNumber == 1)
        {
            this.addSpecialEffect();
        }
        
        
        var node = new cc.Node('shuidi ' + this.spawnCount + this.bigSpawnCount);
        var sp = node.addComponent(cc.Sprite);
        if(cc.random0To1() >= 0.5 && this.bigSpawnCount < this.bigNumberToSpawn && this.spawnCount >= this.needCount / 2 )
        {
            this.bigSpawnCount++;
            sp.spriteFrame =  this.bigShuidi;
            this.addBoom(node,true);
        }
        else
        {
            this.spawnCount++;
            sp.spriteFrame = this.shuidi;
            this.addBoom(node);
        }
        node.parent = this.node;
        node.position = this.getRandomPosition();
        node.setAnchorPoint(0, 0);
        
       
        this.nodeArray.push(node);
        
        var move = cc.moveTo(this.moveNumber, node.position.x, 0);
        node.runAction(cc.sequence(move,cc.callFunc(function(){
            this.destroyCount++;
            this.ctrlNiver();
            node.destroy();
        }.bind(this))));
    },
    
    
    
    // use this for initialization
    onLoad: function () {
        
        var chapterData = require("ChapterData");
        
        cc.audioEngine.preload(this.doMusic);
        cc.audioEngine.preload(this.reMusic);
        cc.audioEngine.preload(this.miMusic);
        cc.audioEngine.preload(this.faMusic);
        cc.audioEngine.preload(this.soMusic);
        cc.audioEngine.preload(this.laMusic);
        cc.audioEngine.preload(this.xiMusic);
        
        this.bigNumberToSpawn =  chapterData.currentChapter.bigNumberToSpawn;
        this.numberToSpawn = chapterData.currentChapter.numberToSpawn;
        this.spawnInterval = chapterData.currentChapter.spawnInterval;
        this.niverCount = chapterData.currentChapter.niverCount;
        this.bg1Image = chapterData.currentChapter.bg1Image;
        this.bg2Image = chapterData.currentChapter.bg2Image;
        this.bg3Image = chapterData.currentChapter.bg3Image;
        this.bgMusic = chapterData.currentChapter.bgMusic;
        this.currentChapterNumber = chapterData.currentChapter.chapterNumber;
        this.currentYear = chapterData.currentYear;
        this.needCount = chapterData.currentChapter.needCount;
        this.moveNumber = chapterData.currentChapter.moveNumber;
        this.lightingNumber =  chapterData.currentChapter.lightingNumber;
        this.snowNumber = chapterData.currentChapter.snowNumber;
        this.timeiceNumber = chapterData.currentChapter.timeiceNumber;
        this.slowNumber = chapterData.currentChapter.slowNumber;
        
        this.needlightingNumber = 0;
        this.needsnowNumber = 0;
        this.needtimeiceNumber = 0;
        this.needslowNumber = 0;
        
        
        
        this.randomRange = cc.p(650,1334);
        this.spawnCount = 0;
        this.bigSpawnCount = 0;
        this.destroyCount = 0;
        this.clearCount = 0;
        this.isWin = false;
        this.isFail = false;
        this.nodeArray = new Array();
        this.nengliangtiaoCtrl.progress = 0;
        this.fire1.position = cc.p(-1000,-1000);
        this.fire1.position = cc.p(-1000,-1000);
        this.chongzou.position = cc.p(-1000,-1000);
        this.initNiver();
        
        
        this.winReStart.on("click",function(event){
             cc.director.loadScene('GameScene');
        });
        
        this.winBack.on("click",function(event){
            cc.director.loadScene('StartScene');
        });
        
        this.failReStart.on("click",function(event){
            cc.director.loadScene('StartScene');
        });
        
        this.failBack.on("click",function(event){
             cc.director.loadScene('GameScene');
        });
        
        
        cc.loader.loadRes(this.bg1Image,cc.SpriteFrame,function(err,spriteFrame){
                cc.log("err" + err);
                this.bg1Node.getComponent(cc.Sprite).spriteFrame = spriteFrame
        }.bind(this));
        cc.loader.loadRes(this.bg2Image,cc.SpriteFrame,function(err,spriteFrame){
                cc.log("err" + err);
                this.bg2Node.getComponent(cc.Sprite).spriteFrame = spriteFrame
        }.bind(this));
        cc.loader.loadRes(this.bg3Image,cc.SpriteFrame,function(err,spriteFrame){
                cc.log("err" + err);
                this.bg3Node.getComponent(cc.Sprite).spriteFrame = spriteFrame
        }.bind(this));
        
        var longAnimation = this.longStart.getComponent(dragonBones.ArmatureDisplay);
        longAnimation.armature().animation.play("dragonstart",1);
        
        longAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT,function(event){
            if(event.detail.name == "flyend")
            {
                
                this.schedule(this.addSpawn,this.spawnInterval);
                //animationNode.destroy();
                 this.schedule(function(){
                    var zhanliAnimation = this.zhanli.getComponent(dragonBones.ArmatureDisplay);
                    zhanliAnimation.armature().animation.play("womanstanding",1);
                }.bind(this),3);
            }
        }, this);
        
        this.nengliang.on(cc.Node.EventType.TOUCH_START,function(event){
            if (this.nengliangtiaoCtrl.progress >=0.9)
            {
                var animationNode = cc.instantiate(this.clearShuidi);
                animationNode.parent = this.node;
                animationNode.position = event.getLocation();
                var value = animationNode.getComponent(dragonBones.ArmatureDisplay);
                value.armature().animation.play("firewindFB",1);
                for(var i in this.nodeArray)
                {
                    if(cc.isValid(this.nodeArray[i]))
                    {
                        this.nodeArray[i].stopAllActions();
                        this.playBoom(this.nodeArray[i]);
                        this.nodeArray[i].destroy();
                    }
                }
                this.nengliangtiaoCtrl.progress = 0;
            }
        },this);
    },
    
    addSpecialEffect:function(){
        if(this.lightingNumber > 0 && this.needlightingNumber < this.lightingNumber)
        {
            this.needlightingNumber++;
        }
        else if(this.snowNumber > 0 && this.needsnowNumber < this.snowNumber )
        {
            this.needsnowNumber++;
        }
        else if(this.timeiceNumber > 0 && this.needtimeiceNumber < this.timeiceNumber)
        {
            this.needtimeiceNumber++;
        }
        else if(this.slowNumber > 0 && this.needslowNumber < this.slowNumber )
        {
            this.needslowNumber++;
        }
        
    },
    
    
    getRandomPosition: function(){
        return cc.p(cc.random0To1() * this.randomRange.x,this.randomRange.y)
    },
    clearRepeater: function(){
        this.unschedule(this.addSpawn);
    },
    bigShuidiToSmall: function(position){
        if(position.x >= 200 && position.x <= 450)
        {
            this.addSmallShuidi(position.x,position.y + 120);
            this.addSmallShuidi(position.x - 120,position.y);
            this.addSmallShuidi(position.x,position.y - 120);
            this.addSmallShuidi(position.x + 120,position.y);
            this.addSmallShuidi(position.x,position.y);
        }
        else if(position.x <200)
        {
            this.addSmallShuidi(position.x,position.y);
            this.addSmallShuidi(position.x,position.y + 120);
            this.addSmallShuidi(position.x + 120,position.y);
        }
        else if(position.y > 450)
        {
            this.addSmallShuidi(position.x,position.y);
            this.addSmallShuidi(position.x,position.y + 120);
            this.addSmallShuidi(position.x - 120,position.y);
        }
        
    },
    addSmallShuidi: function(x,y){
        var node = new cc.Node('shuidi');
        var sp = node.addComponent(cc.Sprite);
        sp.spriteFrame = this.shuidi;
        node.parent = this.node;
        node.position = cc.p(x, y);
        node.setAnchorPoint(0, 0);
        this.addBoom(node);
        
        var move = cc.moveTo(this.moveNumber, node.position.x, 0);
        node.runAction(cc.sequence(move,cc.callFunc(function(){
            this.destroyCount++;
            this.ctrlNiver();
            node.destroy();
        }.bind(this))));
        this.nodeArray.push(node);
    },
    initNiver:function(){
        this.niver2.position = cc.p(-1000,-1000);
        this.niver3.position = cc.p(-1000,-1000);
        this.niver4.position = cc.p(-1000,-1000);
        this.niver5.position = cc.p(-1000,-1000);
        this.niver6.position = cc.p(-1000,-1000);
        this.niver7.position = cc.p(-1000,-1000);
        this.niver8.position = cc.p(-1000,-1000);
        this.niver9.position = cc.p(-1000,-1000);
        this.niver10.position = cc.p(-1000,-1000);
    },
    addBoom: function(node,isBig){
            node.on(cc.Node.EventType.TOUCH_START,function(event){
                node.destroy();
                
                var animationNode = cc.instantiate(this.shuidiBao);
                animationNode.parent = this.node;
                animationNode.position = event.getLocation();
                var value = animationNode.getComponent(dragonBones.ArmatureDisplay);
                value.armature().animation.play("dropboom",1);
                this.nengliangtiaoCtrl.progress += 0.1;
                value.addEventListener(dragonBones.EventObject.FRAME_EVENT,function(event){
                    if(event.detail.name == "boome")
                    {
                        animationNode.destroy();
                    }
                }, this);
                
                if(isBig)
                {
                    this.playBigShuidiMusic();
                    this.bigShuidiToSmall(animationNode.position);
                }
                else
                {
                    this.playShuidiMusic();
                }
                this.clearCount++;
            },this)
    },
    playBoom: function(node)
    {
            var animationNode = cc.instantiate(this.shuidiBao);
            animationNode.parent = this.node;
            animationNode.position = node.position;
            var value = animationNode.getComponent(dragonBones.ArmatureDisplay);
            value.armature().animation.play("dropboom",1);
            this.nengliangtiaoCtrl.progress += 0.1;
            value.addEventListener(dragonBones.EventObject.FRAME_EVENT,function(event){
                if(event.detail.name == "boome")
                {
                    animationNode.destroy();
                }
            }, this);
            this.playShuidiMusic();
            this.clearCount++;
    },
    playShuidiMusic:function(){
        var ramdomNumber =  Math.floor(Math.random() * 7+1);
        if(ramdomNumber == 1)
        {
             cc.audioEngine.playEffect(this.doMusic, false);
        }
        if(ramdomNumber == 2)
        {
             cc.audioEngine.playEffect(this.reMusic, false);
        }
        if(ramdomNumber == 3)
        {
             cc.audioEngine.playEffect(this.miMusic, false);
        }
        if(ramdomNumber == 4)
        {
             cc.audioEngine.playEffect(this.faMusic, false);
        }
        if(ramdomNumber == 5)
        {
             cc.audioEngine.playEffect(this.soMusic, false);
        }
        if(ramdomNumber == 6)
        {
             cc.audioEngine.playEffect(this.laMusic, false);
        }
         if(ramdomNumber == 7)
        {
             cc.audioEngine.playEffect(this.xiMusic, false);
        }
    },
    playBigShuidiMusic:function(){
        var ramdomNumber =  Math.floor(Math.random() * 7+1);
        if(ramdomNumber == 1)
        {
             cc.audioEngine.playEffect(this.doMusic, false);
        }
        if(ramdomNumber == 2)
        {
             cc.audioEngine.playEffect(this.reMusic, false);
        }
        if(ramdomNumber == 3)
        {
             cc.audioEngine.playEffect(this.miMusic, false);
        }
        if(ramdomNumber == 4)
        {
             cc.audioEngine.playEffect(this.faMusic, false);
        }
        if(ramdomNumber == 5)
        {
             cc.audioEngine.playEffect(this.soMusic, false);
        }
        if(ramdomNumber == 6)
        {
             cc.audioEngine.playEffect(this.laMusic, false);
        }
         if(ramdomNumber == 7)
        {
             cc.audioEngine.playEffect(this.xiMusic, false);
        }
    },
    ctrlNiver:function(){
            if(this.destroyCount >= 2)
            {
                 this.niver2.position = cc.p(-88,-4);
            }
            if(this.destroyCount >= 3)
            {
                this.niver3.position = cc.p(-15,36);
            }
            if(this.destroyCount >= 4)
            {
                 this.niver4.position = cc.p(-88,68);
            }
            if(this.destroyCount >= 5)
            {
                 this.niver5.position = cc.p(0,107);
            }
            if(this.destroyCount >= 6)
            {
                 this.niver6.position = cc.p(-88,148);
            }
            if(this.destroyCount >= 7)
            {
                 this.niver7.position = cc.p(0,189);
            }
            if(this.destroyCount >= 8)
            {
                 this.niver8.position = cc.p(-88,222);
            }
            if(this.destroyCount >= 9)
            {
                 this.niver9.position = cc.p(0,262);
            }
            if(this.destroyCount >= 10)
            {
                 this.niver10.position = cc.p(-88,291);
                 this.fail();
            }
            
    },
    setUserData:function(uData,nextUData){
        if(this.destroyCount == 0)
        {
            uData.isEnable = true;
            uData.star = 3;
            if(nextUData != undefined)
                nextUData.isEnable = true;
            this.winStar1.getComponent(cc.Sprite).enabled = true;
            this.winStar2.getComponent(cc.Sprite).enabled = true;
            this.winStar3.getComponent(cc.Sprite).enabled = true;
            
        }
        else if(this.destroyCount <=5)
        {
            uData.isEnable = true;
            uData.star = 2;
            if(nextUData != undefined)
                nextUData.isEnable = true;
            this.winStar1.getComponent(cc.Sprite).enabled = true;
            this.winStar2.getComponent(cc.Sprite).enabled = true;
            this.winStar3.getComponent(cc.Sprite).enabled = false;
        }
        else if(this.destroyCount >5)
        {
            uData.isEnable = true;
            uData.star = 1;
            this.winStar1.getComponent(cc.Sprite).enabled = true;
            this.winStar2.getComponent(cc.Sprite).enabled = false;
            this.winStar3.getComponent(cc.Sprite).enabled = false;
        }
    },
    fail:function(){
        
        if(!this.isFail)
        {
            this.isWin = true;
            this.isFail = true;
            this.unschedule(this.addSpawn);
            this.zhanli.position = cc.p(-1000,-1000);
            this.chongzou.position = cc.p(-109,-361);
            var chongzouAnimation =  this.chongzou.getComponent(dragonBones.ArmatureDisplay);
            chongzouAnimation.armature().animation.play("chongzou",1);
        
            chongzouAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT,function(event){
                if(event.detail.name == "chongzoue")
                {
                    this.failBg.position = cc.p(375,665);
                    this.failBoomLable.getComponent(cc.Label).string = this.clearCount;
                }
            }, this);
        }
    },

    update: function (dt) {
      this.win();
      if(this.nengliangtiaoCtrl.progress == 0)
      {
        this.fire1.position = cc.p(-1000,-1000);
        this.fire2.position = cc.p(-1000,-1000);
      }
      else if(this.nengliangtiaoCtrl.progress  < 0.9)
      {
        this.fire1.position = cc.p(662,1244);
        this.fire2.position = cc.p(-1000,-1000);
      }
      else if(this.nengliangtiaoCtrl.progress >=0.9)
      {
        this.fire1.position = cc.p(-1000,-1000);
        this.fire2.position = cc.p(662,1244);
      }
    },
    win:function(){
        var userData = JSON.parse(cc.sys.localStorage.getItem("UserData"));
        
        var tempYear = null;
        if(this.currentYear == 1)
        {
            tempYear = userData.Year1;
        }
        if(this.currentYear == 2)
        {
            tempYear = userData.Year2;
        }
        if(this.currentYear == 3)
        {
            tempYear = userData.Year3;
        }
        
        if(this.clearCount>= this.needCount &&  !this.isWin)
        {
            switch(this.currentChapterNumber)
            {
                case 1: this.setUserData(tempYear.m1,tempYear.m2); 
                        break;
                case 2: this.setUserData(tempYear.m2,tempYear.m3); 
                        break;
                case 3: this.setUserData(tempYear.m3,tempYear.m4); 
                        break;
                case 4: this.setUserData(tempYear.m4,tempYear.m5); 
                        break;
                case 5: this.setUserData(tempYear.m5,tempYear.m6); 
                        break;
                case 6: this.setUserData(tempYear.m6,tempYear.m7); 
                        break;
                case 7: this.setUserData(tempYear.m7,tempYear.m8);
                        break;
                case 8: this.setUserData(tempYear.m8,tempYear.m9);
                        break;
                case 9: this.setUserData(tempYear.m9,tempYear.m10); 
                        break;
                case 10: this.setUserData(tempYear.m10,tempYear.m11); 
                        break;
                case 11: this.setUserData(tempYear.m11,tempYear.m12);
                        break;
                case 12: this.setUserData(tempYear.m12); break
            }
            cc.sys.localStorage.setItem('UserData', JSON.stringify(userData));
            this.isWin = true;
            
            
        
            this.unschedule(this.addSpawn);
        
            for(var i in this.nodeArray)
            {
                if(cc.isValid(this.nodeArray[i]))
                {
                    this.nodeArray[i].stopAllActions();
                    this.playBoom(this.nodeArray[i]);
                    this.nodeArray[i].destroy();
                }
            }
            this.winBoomLable.getComponent(cc.Label).string = this.clearCount;
            this.winLostLable.getComponent(cc.Label).string = this.destroyCount;
            this.winBg.position = cc.p(375,665);
        }  
    },
    
    onDestroy:function(){
        cc.audioEngine.uncache(this.doMusic);
        cc.audioEngine.uncache(this.reMusic);
        cc.audioEngine.uncache(this.miMusic);
        cc.audioEngine.uncache(this.faMusic);
        cc.audioEngine.uncache(this.soMusic);
        cc.audioEngine.uncache(this.laMusic);
        cc.audioEngine.uncache(this.xiMusic);
    }
});
