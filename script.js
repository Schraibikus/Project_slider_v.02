const images = [{
	url:'images/jpg/image_01.jpg',
	title: 'Rostov-on-Don, Admiral'
}, {
	url:'images/jpg/image_02.jpg',
	title: 'Sochi Thieves'
}, {
	url:'images/jpg/image_03.jpg',
	title: 'Rostov-on-Don Patriotic'
}];

function initSlider(){

	let sliderImages = document.querySelector('.slider__images');
	let sliderArrows = document.querySelector('.slider__arrows');
	let sliderDots = document.querySelector('.slider__dots');
	let sliderCity = document.querySelector('.slider__city');

	initImages();
	initArrows();
	initDots();
	initCity();

	function initImages(){
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

	function initArrows(){
		sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow => {
			arrow.addEventListener('click', function(){
				let curNumber = +sliderImages.querySelector('.active').dataset.index;
				let nextNumber;
				if(arrow.classList.contains('left')){
					nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
				} else {
					nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
			});
		});
	}
	
	function initDots(){
		images.forEach((image, index) => {
			let dot = `<div class="slider__dot n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
			sliderDots.innerHTML += dot;
		});
		sliderDots.querySelectorAll('.slider__dot').forEach(dot => {
			dot.addEventListener('click', function(){
				moveSlider(this.dataset.index);
			})
		});
	}

	function initCity(){
		images.forEach((image, index) => {
			let city = `<div class="city__name n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
			sliderCity.innerHTML += city;
		});
		sliderCity.querySelectorAll('.city__name').forEach(city => {
			city.addEventListener('click', function(){
				moveSlider(this.dataset.index);
			})
		})
	}

	function moveSlider(num){
		sliderImages.querySelector('.active').classList.remove('active');
		sliderImages.querySelector('.n' + num).classList.add('active');
		sliderDots.querySelector('.active').classList.remove('active');
		sliderDots.querySelector('.n' + num).classList.add('active');
		sliderCity.querySelector('.active').classList.remove('active');
		sliderCity.querySelector('.n' + num).classList.add('active');
	}
}

document.addEventListener('DOMContentLoaded', initSlider);