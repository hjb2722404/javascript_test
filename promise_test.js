/**
 * Created by jianbohe on 16/5/21.
 */
function red(){
    console.log("red");
}

function green(){
    console.log("green");
}

function yellow(){
    console.log("yellow");
}

var tic = function(timmer,cb){
  return new Promise(function(resolve,reject){
      setTimeout(function(){
          cb();
          resolve();

      },timmer);
  });
};

var d = new Promise(function(resolve,reject){resolve()});

var step = function(def) {
  def.then(function(){
      return tic(3000,red);
  }).then(function(){
      return tic(2000,green);
  }).then(function(){
      return tic(1000,yellow);
  }).then(function(){
      step(def);
  });
};

step(d);