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
        playButton:{
            default:null,
            type:cc.Node,
        },
        bgNode:{
            default:null,
            type:cc.Node,
        },
        opNode:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.playButton.on("click",function(event){
            cc.director.loadScene('StartScene');
        }.bind(this));
        
        
        
        //cc.sys.localStorage.setItem('UserData', JSON.stringify(userdata));
        if(cc.sys.localStorage.getItem("Frist") != "1")
        {
            var longAnimation =  this.opNode.getComponent(dragonBones.ArmatureDisplay);
            longAnimation.armature().animation.play("opanimation",1);
            
            longAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT,function(event){
            if(event.detail.name == "opend")
            {
                this.bgNode.position = cc.p(0,0);
            }
            }, this);
        }
        else
        {
            this.opNode.position = cc.p(1000,1000);
            this.bgNode.position = cc.p(0,0);
        }
        cc.sys.localStorage.setItem('Frist', "1");
        
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
