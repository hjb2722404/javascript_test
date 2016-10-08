/**
 * Created by jianbohe on 2016/10/7.
 */
window.utils = {};

window.utils.captureMouse = function(element){

    var mouse = {x:0, y:0};

    element.addEventListener('mousemove', function(event){
        var x, y;

        if(event.pageX || event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    }, false);

    return mouse;
}

window.utils.captureTouch = function(element){
    var touch = {
        x : null,
        y : null,
        isPressed : false,
        event : null
    };

    var bodyScrollLeft = document.body.scrollLeft,
        elementScrollLeft = document.documentElement.scrollLeft,
        bodyScrollTop = document.body.scrollTop,
        elementScrollTop = document.documentElement.scrollTop,
        offsetLeft = element.offsetLeft,
        offsetTop = element.offsetTop;

    element.addEventListener('touchstart', function(event){
        touch.isPressed = true;
        touch.event = event;
    }, false);

    element.addEventListener('touchend', function(event){
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
    }, false);

    element.addEventListener('touchmove', function(event){
        var x, y,
            touchEvent = event.touches[0];

        if(touchEvent.pageX || touchEvent.pageY){
            x = touchEvent.pageX;
            y = touchEvent.pageY;
        } else {
            x = touchEvent.clientX + bodyScrollLeft + elementScrollLeft;
            y = touchEvent.clientY + bodyScrollTop + elementScrollTop;
        }

        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
    }, false);

    return touch;
}

if(!window.requestAnimationFrame){
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    function(callback){
                                        return window.setTimeout(callback, 17 /*~ 1000/60*/);
                                    });
}

if(!window.cancelAnimationFrame){
    window.cancelAnimationFrame = ( window.cancelAnimationFrame || window.cancelRequestAnimationFrame ||
                                    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
                                    window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
                                    window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
                                    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
                                    window.clearTimeout
                                  );
}

window.utils.parseColor = function(color, toNumber){
    if(toNumber === true){
        if(typeof color === 'number'){
            return (color | 0);
        }
        if(typeof  color === 'string' && color[0] === '#'){
            color = color.slice(1);
        }
        return window.parseInt(color, 16);
    } else {
        if(typeof color === 'number'){
            color = '#' + ('0000' + (color | 0).toString(16)).substr(-6);
        }
        return color;
    }
};