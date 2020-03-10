
window.addEventListener('DOMContentLoaded', (event) =>{


    let xu = 0
    let yu = 0
    let life = 0

    let dimsel = 35

    let keysPressed = {};

document.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
 });


    let tutorial_canvas = document.getElementById("tutorial");


    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

 //   tutorial_canvas_context.scale(.1, .1);  // this scales the canvas
    tutorial_canvas.style.background = "#000000"


 let flex = tutorial_canvas.getBoundingClientRect();

 // Add the event listeners for mousedown, mousemove, and mouseup
 let tip = {}
 let xs
 let ys
 let tap = {}
 let xz
 let yz


 
 window.addEventListener('mousedown', e => {


    displayer = new Rectangle(0,0,0,0,"red")

    flex = tutorial_canvas.getBoundingClientRect();
    xs = e.clientX - flex.left;
    ys = e.clientY - flex.top;
      tip.x = xs
      tip.y = ys

      tip.body = tip

      if (!keysPressed[' ']) {
      if(life == 0){
        for(let t=0; t<newworld.tiles.length;t++){
            if(squarecircle(newworld.tiles[t].body, tip)){
                if(newworld.tiles[t].bomb == 0){
                    newworld.tiles[t].body.color = "red"
                    if(newworld.tiles[t].fertility != 11){
                     life = 1
                    newworld.tiles[t].fertility = 10
                    }
                     }else{
                     newworld.tiles[t].fertility = 3
                }
            }
        }
    }
      }
    

//    window.addEventListener('mousemove', beamdrag);
 });



 window.addEventListener('mouseup', e => {
 window.removeEventListener("mousemove", beamdrag);
 })

function beamdrag(e) {
 flex = tutorial_canvas.getBoundingClientRect();
    xs = e.clientX - flex.left;
    ys = e.clientY - flex.top;
      tip.x = xs
      tip.y = ys

      tip.body = tip

      if(life == 0){
        for(let t=0; t<newworld.tiles.length;t++){
            if(squarecircle(newworld.tiles[t].body, tip)){
                if(newworld.tiles[t].bomb == 0){
                    newworld.tiles[t].body.color = "red"
                    newworld.tiles[t].fertility = 11
                //  life = 1
                }else{

                    newworld.tiles[t].body.color = "red"
                    newworld.tiles[t].fertility = 11
                //   newworld.tiles[t].fertility = 3
                }
            }
        }
  
      }

    }


    //   displayer.draw()


//   }


    class Camp{
        constructor(tile, color){
            this.body = new Circle(tile.body.x+dimsel/2, tile.body.y+dimsel/2, 35,  color)
            this.color = color
            this.tile = tile
        }
        draw(){
            this.body.draw()
        }
    }

    class Tile{
        constructor(x, y, dim, fert, water=false, mountain = false){
            this.body = new Rectangle(x,y,dim,dim, "green")
            this.fertility = 0
            this.water = water
            this.mountian = mountain

            this.bomb = Math.floor(Math.random()*7)
            this.bombs = 0
        }
        draw(){

            


            if(this.fertility ==  0){
                this.body.color = "gray"
            }
            if(this.fertility ==  1){
                this.body.color = "yellow"
            }
            if(this.fertility ==  2){
                this.body.color = "brown"
            }
            if(this.fertility == 3){
                this.body.color = "#00DD00"
            }
            if(this.fertility == 4){
                this.body.color ="green"
            }
            this.body.draw()

            if(this.fertility == 3){


                tutorial_canvas_context.fillStyle = "black";
                tutorial_canvas_context.font = `${20}px Arial`
                tutorial_canvas_context.fillText(`${this.bombs}`, this.body.x+12, this.body.y+25);
                    }
                    if(this.fertility == 11){
        
        
                tutorial_canvas_context.fillStyle = "black";
                tutorial_canvas_context.font = `${20}px Arial`
                tutorial_canvas_context.fillText(`X`, this.body.x+12, this.body.y+25);
                    }
        }
        live(){

        }

    }

    class World{
        constructor(){
            this.tiles = []
            
            for(let g = 0; g< 90000; g++){
                let tile = new Tile(xu, yu, dimsel, Math.random()*5, false, false)
                this.tiles.push(tile)
                xu+=dimsel
                if(xu>= tutorial_canvas.width){
                    xu= 0
                    yu+=dimsel
                    if(yu>= tutorial_canvas.height){
                        g = 90000
                    }
                }
            }


            for(let t = 0; t<this.tiles.length; t++){






                if(t%20 != 0 && t%20!=19){
                    if(typeof this.tiles[t-20] != "undefined"){
                        if(this.tiles[t-20].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t-21] != "undefined"){
                        if(this.tiles[t-21].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t-19] != "undefined"){
                        if(this.tiles[t-19].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
    
                    if(typeof this.tiles[t-1] != "undefined"){
                        if(this.tiles[t-1].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+1] != "undefined"){
                        if(this.tiles[t+1].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+19] != "undefined"){
                        if(this.tiles[t+19].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+20] != "undefined"){
                        if(this.tiles[t+20].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+21] != "undefined"){
                        if(this.tiles[t+21].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                }else if(t%20 == 19){

                    if(typeof this.tiles[t-20] != "undefined"){
                        if(this.tiles[t-20].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t-21] != "undefined"){
                        if(this.tiles[t-21].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t-1] != "undefined"){
                        if(this.tiles[t-1].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+20] != "undefined"){
                        if(this.tiles[t+20].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+19] != "undefined"){
                        if(this.tiles[t+19].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                }else if(t%20 == 0){


                    if(typeof this.tiles[t-20] != "undefined"){
                        if(this.tiles[t-20].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t-19] != "undefined"){
                        if(this.tiles[t-19].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
    
                    if(typeof this.tiles[t+21] != "undefined"){
                        if(this.tiles[t+21].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
    
                    if(typeof this.tiles[t+1] != "undefined"){
                        if(this.tiles[t+1].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                    if(typeof this.tiles[t+20] != "undefined"){
                        if(this.tiles[t+20].bomb == 0){
                            this.tiles[t].bombs+=1
                        }
                    }
                }

















            }
        }
        draw(){
            for(let t = 0; t<this.tiles.length; t++){
                this.tiles[t].draw()
            }
        }
        live(){
            this.draw()
            for(let t = 0; t<this.tiles.length; t++){
                this.tiles[t].live()
            }



        }
    }



    // can be drawn, or moved.
    class Rectangle {
        constructor(x, y, height, width, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
        }
        draw(){
            tutorial_canvas_context.strokeStyle = "black"
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)
        }
        move(){

            this.x+=this.xmom
            this.y+=this.ymom

        }
    }

    // can be drawn, or moved with friction.  and richochet 
    class Circle{
        constructor(x, y, radius, color, xmom = 0, ymom = 0){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
        }       
         draw(){
            tutorial_canvas_context.lineWidth = 1

            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            tutorial_canvas_context.fillStyle = this.color
           tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke(); 
        }
        move(){

            this.xmom*=.9999
            this.ymom*=.9999   //friction

            this.x += this.xmom
            this.y += this.ymom

            if(this.x+this.radius > tutorial_canvas.width){

                if(this.xmom > 0){
                this.xmom *= -1
                }

            }
            if(this.y+this.radius > tutorial_canvas.height){
                if(this.ymom > 0){
                this.ymom *= -1
                }

            }
            if(this.x-this.radius < 0){
                if(this.xmom < 0){
                    this.xmom *= -1
                }

            }
            if(this.y-this.radius < 0){

                if(this.ymom < 0){
                    this.ymom *= -1
                }
        
            }

            // ^ this reflects balls off the wall
            // the internal checks make it always return to the screen

        }


    }

    // let x = 0
    // let y = 0

     let circ = new Circle(125, 200, 10, getRandomLightColor(), Math.random()-.5, Math.random()-.5)  // starts with ramndom velocities and color
     let rect = new Rectangle ( 200, 200, 50, 80, getRandomLightColor())
    // rect.ymom = 1

    // example objects
    let camps = []

    let newworld = new World()
    let redcamp = new Camp(newworld.tiles[65], "red")
    let redcamp1 = new Camp(newworld.tiles[75], "black")
    let redcamp2 = new Camp(newworld.tiles[30], "blue")
    let redcamp3 = new Camp(newworld.tiles[110], "green")

    // camps.push(redcamp)
    // camps.push(redcamp1)
    // camps.push(redcamp2)
    // camps.push(redcamp3)


// interval, fill this with game logic 
    window.setInterval(function(){ 
        tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)  // refreshes the image

        newworld.live()



        for(let t=0; t<newworld.tiles.length;t++){
            for(let v=0; v<newworld.tiles.length;v++){
            if(squaresquare(newworld.tiles[t].body, newworld.tiles[v].body,)){
                if(newworld.tiles[t].fertility == 3){
                if(newworld.tiles[v].bombs == 0){
                    if(v!=(t-19)){
                        if(v!=(t-21)){
                            if(v!=(t+21)){
                                if(v!=(t+19)){
                        

                                    if(newworld.tiles[v].bomb != 0){
                                    newworld.tiles[v].fertility = 3

                                    }
                                }

                            }

                        }

                    }
                }

                }
            }
        }
    }
  
    


    let victory = 1
    for(let t=0; t<newworld.tiles.length;t++){
       victory *=  newworld.tiles[t].fertility
    }





        for(let c = 0; c<camps.length; c++){
            camps[c].draw()
        }
        players(newworld)

        if(victory != 0){

            tutorial_canvas_context.fillStyle = "black";
            tutorial_canvas_context.font = `${50}px Arial`
            tutorial_canvas_context.fillText(`Victory`, 270, 300);
        }
    }, 1) // length of refresh interval




    // run on any object with x/y attributes in the timer to give them wasd controls
    function players(racer){
        if (keysPressed[' ']) {

 
               window.addEventListener('mousedown', beamdrag);
        }else{

 window.removeEventListener("mousedown", beamdrag);
        }


        // any key combination can be made from a nested if statement, all keys can just be accessed by name (if you can find it)

    }





// can check if one circle contains the cneter of the other circle, and / or it can check if any constructed object with an x and y attribute is inside of a circle. With tinkering, this can check boundaries of two circles.
function intersects(circle, left) {
    var areaX = left.x - circle.x;
    var areaY = left.y - circle.y;
    return areaX * areaX + areaY * areaY <= circle.radius * circle.radius;
}

// random color that will be visible on  blac backgroung
function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[(Math.floor(Math.random() * 15)+1)];
    }
    return color;
  }


// checks if a square contains the centerpoint of a circle
function squarecircle(square, circle){

    let squareendh = square.y + square.height
    let squareendw = square.x + square.width

    if(square.x <= circle.x){
        if(square.y <= circle.y){
            if(squareendw >= circle.x){
                if(squareendh >= circle.y){
                    return true
                }
            }
        }
    }
    return false
}

// checks if two squares are intersecting ( not touching, for touching cnange the evaluations from ">" to ">=" etc)
function squaresquare(a, b){

    a.left = a.x
    b.left = b.x
    a.right = a.x + a.width
    b.right = b.x + b.width
    a.top = a.y 
    b.top = b.y
    a.bottom = a.y + a.height
    b.bottom = b.y + b.height



    if (a.left > b.right || a.top > b.bottom || 
        a.right < b.left || a.bottom < b.top)
    {
       return false
    }
    else
    {
        return true
    }
}





})