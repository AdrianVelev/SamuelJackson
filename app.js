const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#141414';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


function toggle(){
	var trailer= document.querySelector('.trailer')
	var video= document.querySelector('video')
	trailer.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle1(){
	var trailer1= document.querySelector('.trailer1')
	var video= document.querySelector('video')
	trailer1.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle2(){
	var trailer2= document.querySelector('.trailer2')
	var video= document.querySelector('video')
	trailer2.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle3(){
	var trailer3= document.querySelector('.trailer3')
	var video= document.querySelector('video')
	trailer3.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle4(){
	var trailer4= document.querySelector('.trailer4')
	var video= document.querySelector('video')
	trailer4.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle5(){
	var trailer5= document.querySelector('.trailer5')
	var video= document.querySelector('video')
	trailer5.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle6(){
	var trailer6= document.querySelector('.trailer6')
	var video= document.querySelector('video')
	trailer6.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle7(){
	var trailer7= document.querySelector('.trailer7')
	var video= document.querySelector('video')
	trailer7.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle8(){
	var trailer8= document.querySelector('.trailer8')
	var video= document.querySelector('video')
	trailer8.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle9(){
	var trailer9= document.querySelector('.trailer9')
	var video= document.querySelector('video')
	trailer9.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle10(){
	var trailer10= document.querySelector('.trailer10')
	var video= document.querySelector('video')
	trailer10.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle11(){
	var trailer11= document.querySelector('.trailer11')
	var video= document.querySelector('video')
	trailer11.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle12(){
	var trailer12= document.querySelector('.trailer12')
	var video= document.querySelector('video')
	trailer12.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle13(){
	var trailer13= document.querySelector('.trailer13')
	var video= document.querySelector('video')
	trailer13.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle14(){
	var trailer14= document.querySelector('.trailer14')
	var video= document.querySelector('video')
	trailer14.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle15(){
	var trailer15= document.querySelector('.trailer15')
	var video= document.querySelector('video')
	trailer15.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle16(){
	var trailer16= document.querySelector('.trailer16')
	var video= document.querySelector('video')
	trailer16.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle17(){
	var trailer17= document.querySelector('.trailer17')
	var video= document.querySelector('video')
	trailer17.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle18(){
	var trailer18= document.querySelector('.trailer18')
	var video= document.querySelector('video')
	trailer18.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle19(){
	var trailer19= document.querySelector('.trailer19')
	var video= document.querySelector('video')
	trailer19.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle20(){
	var trailer20= document.querySelector('.trailer20')
	var video= document.querySelector('video')
	trailer20.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle21(){
	var trailer21= document.querySelector('.trailer21')
	var video= document.querySelector('video')
	trailer21.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle22(){
	var trailer22= document.querySelector('.trailer22')
	var video= document.querySelector('video')
	trailer22.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle23(){
	var trailer23= document.querySelector('.trailer23')
	var video= document.querySelector('video')
	trailer23.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle24(){
	var trailer24= document.querySelector('.trailer24')
	var video= document.querySelector('video')
	trailer24.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle25(){
	var trailer25= document.querySelector('.trailer25')
	var video= document.querySelector('video')
	trailer25.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle26(){
	var trailer26= document.querySelector('.trailer26')
	var video= document.querySelector('video')
	trailer26.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle27(){
	var trailer27= document.querySelector('.trailer27')
	var video= document.querySelector('video')
	trailer27.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
function toggle28(){
	var trailer28= document.querySelector('.trailer28')
	var video= document.querySelector('video')
	trailer28.classList.toggle('active');
	video.pause();
	video.currentTime = 0;
}
// Get the modal
var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




// Get the modal
var modal = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image2");
var modalImg = document.getElementById("img02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



// Get the modal
var modal = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image3");
var modalImg = document.getElementById("img03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image4");
var modalImg = document.getElementById("img04");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image5");
var modalImg = document.getElementById("img05");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image6");
var modalImg = document.getElementById("img06");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModal7");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image7");
var modalImg = document.getElementById("img07");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close7")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById("myModal8");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image8");
var modalImg = document.getElementById("img08");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close8")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


