/**
 * Created by jianbohe on 2016/10/7.
 */
function Ball(radius, color){
    if(radius === undefined) {
        radius = 40;
    }
    if(color === undefined) {
        color = "#00ff00";
    }
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.rotation = 0;
    this.mass = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);

}