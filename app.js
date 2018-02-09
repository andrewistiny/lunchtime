


var resturants = [{
    imgsrc:"http://www.tastyislandhawaii.com/images/bac_nam_front.jpg",
    rname:"Bac Nam",
    verb:"Eating",
    adjective:"Soupy",
},{
    imgsrc:"https://fremontuniverse.com/images/taco_open.jpg",
    rname:"Taco Del Mar",
    verb:"Spilling",
    adjective:"Messy"
},{
    imgsrc:"https://s3-media1.fl.yelpcdn.com/bphoto/E0iwWlU81jJXMZxAO6picg/258s.jpg",
    rname:"Pearl's Chinese Kitchen",
    verb:"Enjoying",
    adjective:"Difficult"
},{
    imgsrc:"https://alohafood.files.wordpress.com/2014/10/pa120001.jpg",
    rname:"HotPot Heaven",
    verb:"Involved",
    adjective:"Much Tasty"
},{
    imgsrc:"http://www.nrn.com/sites/nrn.com/files/wendys.gif",
    rname:"Wendy's",
    verb:"Dripping",
    adjective:"Juicy"
}];

function Randomiser(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

var button = document.getElementById("btn1");
button.addEventListener("click",function(){
    var random = Randomiser(0,5);
    console.log(random);
    document.getElementById("rimg").src = resturants[random].imgsrc;
    document.getElementById("name").innerHTML = resturants[random].rname;
    document.getElementById("givenVerb").innerHTML = resturants[random].adjective;
    document.getElementById("givenAd").innerHTML = resturants[random].verb;
});
