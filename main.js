console.log('running main.js file');
function replaceImages() {
var images = document.getElementsByTagName('img');
// console.log(images);
// console.log('=========================================')
for( key in images){
   images[key].src = 'https://i.imgur.com/7eGFo3I.gif';
   images[key].srcset = 'https://i.imgur.com/7eGFo3I.gif';
   images[key].currentSrc = 'https://i.imgur.com/7eGFo3I.gif';
   //console.log(images[key])
}
}

window.addEventListener("click", (e)=>{
	var xPosition = e.clientX;
  var yPosition = e.clientY;
	let element  = document.createElement('div');
	element.setAttribute("style","background-color:red; width:50px; height:50px; z-index: 11000;position: absolute; fill:pink");
	element.className = 'doggy';
	console.log(`xPosition ${xPosition} yPosition ${yPosition}`);
	element.style.left = xPosition+'px';
	element.style.top = yPosition+'px';
	document.body.prepend(element);
	console.log(document.getElementsByClassName('doggy'));
	console.log(element);
})

var title = document.getElementByClass



setInterval(replaceImages, 500);
