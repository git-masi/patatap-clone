// ********************************************
// MUST USE VAR KEYWORD FOR PAPERSCRIPT TO WORK
// ********************************************

  var keyData = {
    a: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/bubbles.mp3']
      })
    },
    s: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/clay.mp3']
      })
    },
    d: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/glimmer.mp3']
      })
    },
    f: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/flash-1.mp3']
      })
    },
    g: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/piston-1.mp3']
      })
    },
    h: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/piston-2.mp3']
      })
    },
    j: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/corona.mp3']
      })
    },
    k: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/strike.mp3']
      })
    },
    l: {
      color: "",
      sound: new Howl({
        src: ['assets/sounds/suspension.mp3']
      })
    }
  }

  var circles = [];

  function onKeyDown(event){
    if (keyData[event.key]){
      var maxPoint = new Point(view.size.width, view.size.height);
      var randomPoint = Point.random();
      var point = maxPoint * randomPoint;
      function circleScale (){
        if (view.size.width > 750){
          return 420;
        } else {
          return 10;
        }
      }
      var circleRadiusRandom = Math.floor((Math.random() * circleScale()) + 80);
      var rgbRandom = new Color(Math.random(), Math.random(), Math.random());
      var newCircle = new Path.Circle(point, circleRadiusRandom);
      newCircle.fillColor = rgbRandom;
      keyData[event.key].sound.play();
      circles.push(newCircle);
    }
  }

  function onFrame(event){
    for (i = 0; i < circles.length; i++){
      circles[i].fillColor.hue += (Math.random()*3);
      circles[i].scale(.905); 
      if(circles[i].area < 1){
        circles[i].remove();
        circles.splice(i, 1);
        console.log(circles);
      }
    }
  }
