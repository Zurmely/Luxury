const responsive = document.getElementById('scroll-nav');
const logo = document.getElementById('logo');

window.onscroll = function(){
  var top = window.scrollY;
  if(top >= 128 ){
    responsive.classList.add('active');
	logo.classList.add('smaller');
  }
  else{
    responsive.classList.remove('active');
	logo.classList.remove('smaller');
  }
}