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
        
        numberToSpawn:0,
        spawnInterval:0
    },
    
    addSpawn: function(){
        if (this.spawnCount >= this.numberToSpawn) {
            this.clearRepeater();
            return;
        }
        
        var node = new cc.Node('shuidi ' + this.spawnCount);
        var sp = node.addComponent(cc.Sprite);
        sp.spriteFrame = this.shuidi;
        node.parent = this.node;
        node.position = this.getRandomPosition();
        node.setAnchorPoint(0, 0);
        this.nodeArray.push(node);
        
        var move = cc.moveTo(5, node.position.x, 0);
        node.runAction(cc.sequence(move,cc.callFunc(function(){
            this.destroyCount++;
            node.destroy();
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
            }
            
        }.bind(this))));
        
        node.on(cc.Node.EventType.TOUCH_START,function(event){
            var animationNode = cc.instantiate(this.shuidiBao);
            animationNode.parent = this.node;
            animationNode.position = event.getLocation();
            var value = animationNode.getComponent(dragonBones.ArmatureDisplay).armature();
            value.animation.play("dropboom",1);
            this.nengliangtiaoCtrl.progress += 0.1;
            node.destroy();
        },this)
        
        this.spawnCount++;
        
    },
    
    // use this for initialization
    onLoad: function () {
        var self = this;
        self.randomRange = cc.p(650,1334);
        self.spawnCount = 0;
        self.destroyCount = 0;
        self.nodeArray = new Array();
        self.nengliangtiaoCtrl.progress = 0;
        self.schedule(self.addSpawn,self.spawnInterval);
        self.niver2.position = cc.p(-1000,-1000);
        self.niver3.position = cc.p(-1000,-1000);
        self.niver4.position = cc.p(-1000,-1000);
        self.niver5.position = cc.p(-1000,-1000);
        self.niver6.position = cc.p(-1000,-1000);
        self.niver7.position = cc.p(-1000,-1000);
        self.niver8.position = cc.p(-1000,-1000);
        self.niver9.position = cc.p(-1000,-1000);
        self.niver10.position = cc.p(-1000,-1000);
        cc.log(self.nengliang);
        self.nengliang.on(cc.Node.EventType.TOUCH_START,function(event){
            if (self.nengliangtiaoCtrl.progress >=0.9)
            {
                for(var i in self.nodeArray)
                {
                    if(cc.isValid(self.nodeArray[i]))
                    {
                        self.nodeArray[i].stopAllActions();
                        
                        var animationNode = cc.instantiate(this.shuidiBao);
                        animationNode.parent = this.node;
                        animationNode.position = self.nodeArray[i].position;
                        var value = animationNode.getComponent(dragonBones.ArmatureDisplay).armature();
                        value.animation.play("dropboom",1);
                        self.nodeArray[i].destroy();
                    }
                }
                self.nengliangtiaoCtrl.progress = 0;
            }
        },this);
    },
    
    
    getRandomPosition: function(){
        return cc.p(cc.random0To1() * this.randomRange.x,this.randomRange.y)
    },
    clearRepeater: function(){
        this.unschedule(this.addSpawn);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
