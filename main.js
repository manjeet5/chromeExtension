console.log('running main.js file');
replaceApplicationName();
function replaceApplicationName(){
	console.log('RENAMING APP')
	let head = document.getElementsByClassName('aU2HW');
	let oldChild = document.getElementsByClassName('jWQqO Szr5J coreSpriteDesktopNavLogoAndWordmark _7mese');
	head[0].removeChild(oldChild[0]);
	let newData = document.createElement('h1');
	let newTextNode = document.createTextNode('instagggrrr');
	newData.append(newTextNode);
	head[0].appendChild(newData);
}
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

function myMove(id) {
  var elem = document.getElementById(id);
  var pos = 0;
	let x = parseInt(elem.style.top);
	let y = parseInt(elem.style.left);


	console.log(`x ${x} y ${y} eventName ${id}
		elem.style.top ${elem.style.top} 	elem.style.left ${elem.style.left}
	result	${parseInt(y) + parseInt(x)} `)
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = x - pos + 'px';
      elem.style.left = y - pos + 'px';
    }
  }
}
let counter = 0;
window.addEventListener("click", (e)=>{
	var xPosition = e.clientX;
	var yPosition = e.clientY;
	let eventName = e.target.id;

	if(e.target.id.match(/doggy[0-9]+/i)){
		console.log('MOVE');
		myMove(eventName,xPosition,yPosition);

	}else{

		let element  = document.createElement('div');
		element.setAttribute("style"," width:50px; height:50px; z-index: 11000;position:fixed; fill:pink; background-image:url(https://s3.us-east-2.amazonaws.com/chrome-extension-ny5/animal-prints.svg)");
		element.id = 'doggy' + counter;
		counter+=1;
		console.log(`xPosition ${xPosition} yPosition ${yPosition}`);
		element.style.left = xPosition+'px';
		element.style.top = yPosition+'px';
		document.body.prepend(element);
		console.log(document.getElementsByClassName('doggy'));
		console.log(element);
	}

})




setInterval(replaceImages, 500);
