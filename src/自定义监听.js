(function (window) {
    
    const bus = {}

    const ObjCallbacks = {}

    bus.on = function (name,callback) {

        const callbacks = ObjCallbacks[name]

       if (callbacks) {
           
            callbacks.push(callback)
       } else{

        //？？？？？
       }
        
    },

    bus.off = function (data,callback) {

        const callbacks = ObjCallbacks[name]
        if (callbacks && callbacks.lenght>0) {
            
            callbacks.forEach(callback => { //？？？
                
                callback(data) //？？
            });
        }

    },

    bus.clear = function (name) {
        if (name) {
            
            delete ObjCallbacks(name)
        }else{
            ObjCallbacks = {}
        }
        
    }

    // 错了三个地方










    window.bus = bus 
})(window)