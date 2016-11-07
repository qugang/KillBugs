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
        shuidiMusic:{
            default: null,
            type: cc.AudioClip,
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
        bigNumberToSpawn:0,
        numberToSpawn:0,
        spawnInterval:0
    },
    
    addSpawn: function(){
        if ((this.spawnCount + this.bigSpawnCount) >= (this.numberToSpawn + this.bigNumberToSpawn)) {
            this.clearRepeater();
            return;
        }
        
        var node = new cc.Node('shuidi ' + this.spawnCount + this.bigSpawnCount);
        var sp = node.addComponent(cc.Sprite);
        if(cc.random0To1() >= 0.5 && this.bigSpawnCount < this.bigNumberToSpawn)
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
        
        var move = cc.moveTo(5, node.position.x, 0);
        node.runAction(cc.sequence(move,cc.callFunc(function(){
            this.destroyCount++;
            this.ctrlNiver();
            node.destroy();
            this.windonsCount--;
        }.bind(this))));
        this.windonsCount++;
    },
    
    // use this for initialization
    onLoad: function () {
        
        var chapterData = require("ChapterData");
        
        this.bigNumberToSpawn =  chapterData.currentChapter.bigNumberToSpawn;
        this.numberToSpawn = chapterData.currentChapter.numberToSpawn;
        this.spawnInterval = chapterData.currentChapter.spawnInterval;
        this.niverCount = chapterData.currentChapter.niverCount;
        this.bg1Image = chapterData.currentChapter.bg1Image;
        this.bg2Image = chapterData.currentChapter.bg2Image;
        this.bgMusic = chapterData.currentChapter.bgMusic;
        this.currentChapterNumber = chapterData.currentChapter.chapterNumber;
        
        this.randomRange = cc.p(650,1334);
        this.spawnCount = 0;
        this.bigSpawnCount = 0;
        this.destroyCount = 0;
        this.windonsCount =0;
        this.clearCount = 0;
        this.isWin = false;
        this.nodeArray = new Array();
        this.nengliangtiaoCtrl.progress = 0;
        this.initNiver();
        this.schedule(this.addSpawn,this.spawnInterval);
        this.nengliang.on(cc.Node.EventType.TOUCH_START,function(event){
            if (this.nengliangtiaoCtrl.progress >=0.9)
            {
                for(var i in this.nodeArray)
                {
                    if(cc.isValid(this.nodeArray[i]))
                    {
                        this.nodeArray[i].stopAllActions();
                        this.playBoom(this.nodeArray[i]);
                        this.nodeArray[i].destroy();
                        this.windonsCount--;
                    }
                }
                this.nengliangtiaoCtrl.progress = 0;
            }
        },this);
    },
    
    
    getRandomPosition: function(){
        return cc.p(cc.random0To1() * this.randomRange.x,this.randomRange.y)
    },
    clearRepeater: function(){
        this.unschedule(this.addSpawn);
    },
    bigShuidiToSmall: function(position){
        cc.log("position" +position);
        if(position.x >= 200 && position.x <= 450)
        {
            this.addSmallShuidi(position.x,position.y + 120);
            this.addSmallShuidi(position.x - 120,position.y);
            this.addSmallShuidi(position.x,position.y - 120);
            this.addSmallShuidi(position.x + 120,position.y);
            this.addSmallShuidi(position.x,position.y);
            this.windonsCount+=5;
        }
        else if(position.x <200)
        {
            this.addSmallShuidi(position.x,position.y);
            this.addSmallShuidi(position.x,position.y + 120);
            this.addSmallShuidi(position.x + 120,position.y);
            this.windonsCount+=3;
        }
        else if(position.y > 450)
        {
            this.addSmallShuidi(position.x,position.y);
            this.addSmallShuidi(position.x,position.y + 120);
            this.addSmallShuidi(position.x - 120,position.y);
            this.windonsCount+=3;
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
        
        var move = cc.moveTo(5, node.position.x, 0);
        node.runAction(cc.sequence(move,cc.callFunc(function(){
            this.destroyCount++;
            this.ctrlNiver();
            node.destroy();
            this.windonsCount--;
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
                    this.bigShuidiToSmall(animationNode.position);
                }
                this.playShuidiMusic();
                this.clearCount++;
                this.windonsCount--;
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
         cc.audioEngine.playEffect(this.shuidiMusic, false);
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
            nextUData.isEnable = true;
        }
        else if(this.destroyCount <=5)
        {
            uData.isEnable = true;
            uData.star = 2;
            nextUData.isEnable = true;
        }
        else if(this.destroyCount >5)
        {
            uData.isEnable = true;
            uData.star = 1;
        }
    },
    fail:function(){
        cc.log("Fail");
        this.isWin = true;
    },

    update: function (dt) {
      this.win();
    },
    win:function(){
        var userData = require("UserData");
        if((this.spawnCount + this.bigSpawnCount) == (this.numberToSpawn + this.bigNumberToSpawn) && !this.isWin && this.windonsCount == 0)
        {
            switch(this.currentChapterNumber)
            {
                case 1: this.setUserData(userData.m1,userData.m2); 
                        break;
                case 2: this.setUserData(userData.m2,userData.m3); 
                        break;
                case 3: this.setUserData(userData.m3,userData.m4); 
                        break;
                case 4: this.setUserData(userData.m4,userData.m5); 
                        break;
                case 5: this.setUserData(userData.m5,userData.m6); 
                        break;
                case 6: this.setUserData(userData.m6,userData.m7); 
                        break;
                case 7: this.setUserData(userData.m7,userData.m8);
                        break;
                case 8: this.setUserData(userData.m8,userData.m9);
                        break;
                case 9: this.setUserData(userData.m9,userData.m10); 
                        break;
                case 10: this.setUserData(userData.m10,userData.m11); 
                        break;
                case 11: this.setUserData(userData.m11,userData.m12);
                        break;
                case 12: this.setUserData(userData.m12); break
            }
            cc.log(JSON.stringify(userData));
            cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
            this.isWin = true;
        }  
    },
});
