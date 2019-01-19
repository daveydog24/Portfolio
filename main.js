let circles = [];

function sayHello(event) {
    console.log(event);
    window.alert("Hello")
}

function random_color() {
    var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    color = '#';
    for (var i = 0; i < 6; i++) { //loops 6 times for the 6 digit hexadecimal numbers
        x = Math.floor((Math.random()*16)) //x=random number between 1-16 
        color += rgb[x]; //Color = Color + rgb[x] 
    }
    return color;
}

function Circle(cx, cy, html_id){
    var html_id = html_id;
    this.info = {cx: cx,  cy: cy};
    
    //private function that generates a random number
    var randomNumberBetween = function(min, max){
        return Math.random()*(max-min) + min;
    }

    this.initialize = function(){
        //give a random velocity for the circle
        this.info.velocity = {
            x: randomNumberBetween(-3,3),
            y: randomNumberBetween(-3,3)
        }
        //create a circle 
        var circle = makeSVG('circle', { 	
            cx: this.info.cx,
            cy: this.info.cy,
            r:  (Math.floor((Math.random()*17))+3),
            id: html_id,
            class: "circles",
            style: "fill: " + random_color()
        });
        document.getElementById('svg').appendChild(circle);
    }

    this.update = function(time){
        var el = document.getElementById(html_id);

        //see if the circle is going outside the browser. if it is, reverse the velocity
        if (this.info.cx > document.body.clientWidth - 10 || this.info.cx < 10){
            this.info.velocity.x = this.info.velocity.x * -1;
        }
        if (this.info.cy > document.body.clientHeight - 10|| this.info.cy < 20){
            this.info.velocity.y = this.info.velocity.y * -1;
        }
        this.info.cx = this.info.cx + this.info.velocity.x*time;
        this.info.cy = this.info.cy + this.info.velocity.y*time;

        el.setAttribute("cx", this.info.cx);
        el.setAttribute("cy", this.info.cy);
    }

    //creates the SVG element and returns it
    var makeSVG = function(tag, attrs) {
        var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs){
            el.setAttribute(k, attrs[k]);
        }
        return el;
    }
    this.initialize();
}

function PlayGround(){
    var counter = 0;  //counts the number of circles created
    // var circles = [ ]; 
    //array that will hold all the circles created in the app

    //a loop that updates the circle's position on the screen
    this.loop = function(){
        for(circle in circles){
            circles[circle].update(1);
        }
    }
    this.createNewCircle = function(x,y){
        var new_circle = new Circle(x,y,counter++);
        circles.push(new_circle);
        console.log('created a new circle!', new_circle);
    }
    //create one circle when the game starts
    this.createNewCircle(document.body.clientWidth/2, document.body.clientHeight/2);
}

var playground = new PlayGround();
setInterval(playground.loop, 15);

function clearCircles(){
    circles = [ ];
    let allTheCircles = document.getElementsByClassName("circles")
    
    while (allTheCircles[0]) {
        allTheCircles[0].parentNode.removeChild(allTheCircles[0]);
    }
}

function makeCircle(e){
    console.log(e)
    playground.createNewCircle(e.x,e.y);
}
