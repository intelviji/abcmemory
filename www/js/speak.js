
function speak(txt)
{
speechSynthesis.cancel();
var msg = new SpeechSynthesisUtterance();

msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'US English Female'; })[3];
/*msg.voice = speechSynthesis.getVoices().filter(function(voice) {
    return voice.name == "Google UK English Female"

  })[0];*/
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = txt;
msg.lang = 'en-US';
speechSynthesis.speak(msg);

}
var defaultOptions = {
      colors : ['#2DE7F0', '#FA5C46'],
      num_sprites: 22,
      lifespan: 1000,
      radius: 300,
      sprite_size: 10,
      shape: 'circle',
      gravity: 'false',
    }
var opts = $.extend({}, defaultOptions, opts);
 var $target = this,
    num_sprites = opts.num_sprites,
    colors = opts.colors,
    allSprites = [],
    radius = opts.radius,
    sprite_size = opts.sprite_size,
    shape = opts.shape.toLowerCase(),
    gravity = opts.gravity,
    image = opts.image,
    lifespan = opts.lifespan,
    fadetoOpacity = 100;
function makeSprites(centerX, centerY){
    for (var i=0; i < num_sprites; i++){
      //make a div
      var newsprite = document.createElement('div');
      var rotateDeg = Math.random()*360

      if (gravity == "true" || gravity == true){
        var radSpread = Math.random() * (radius*2 - radius/4) + radius/4

      } else {
        var radSpread = Math.random() * (radius + radius) -radius
      }

      if (image){

        $(newsprite).css({
          "background-size":"contain",
          backgroundImage: "url("+image+")"
        });

      };

      //give the div css, based on client's parameters
      if (shape == 'circle'){

      $(newsprite).css({
          backgroundColor: colors[i % colors.length],
          left: centerX,
          top: centerY,
          width: sprite_size,
          height: sprite_size,
          borderRadius: "100%",
          position: "absolute"

        });

      } else if (shape == 'square'){
        $(newsprite).css({
            backgroundColor: colors[i % colors.length],
            left: centerX,
            top: centerY,
            width: sprite_size,
            height: sprite_size,
            borderRadius: "0px",
            position: "absolute"
          });

      } else if (shape == "triangle"){
        fadetoOpacity = 0;

        $(newsprite).css({
            width: '0px',
            height: '0px',
            "border-top": sprite_size + "px solid transparent",
            "border-right": sprite_size+ "px solid transparent",

            "border-top":sprite_size +"px solid "+ colors[i % colors.length],

            left: centerX,
            top: centerY,

            position: "absolute",
            "-webkit-transform": "rotate("+rotateDeg+"deg)",
            "-moz-transform": "rotate("+rotateDeg+"deg)",
            "-o-transform": "rotate("+rotateDeg+"deg)",
            "-ms-transform": "rotate("+rotateDeg+"deg)",
            "transform": "rotate("+rotateDeg+"deg)"
          });

      } else {
        if (i==0){

          console.log("the shape chosen on this object is invalid. Try 'circle', 'triangle', or 'square'")

        }

      }



        $(newsprite).animate({
          opacity: [ fadetoOpacity, "swing" ],
          left : centerX + Math.random() * (radius + radius) -radius,
          top : centerY + radSpread,
          width: [0,"easeInQuart"],
          height: [0,"easeInQuart"]
        }, lifespan, 'easeOutQuad' ,function() {

          document.body.removeChild(this)


        });

      document.body.appendChild(newsprite);

    }


  }
  
