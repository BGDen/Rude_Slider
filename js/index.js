function Slider(images){
  this.images = document.querySelectorAll(images.images);
  this.btnPrev = document.querySelector(images.prev);
  this.btnNext = document.querySelector(images.next);
  this.interval = images.interval;

  let i = 0;

  this.prev = function(){
    this.images[i].className = '';
    i--;
    if(i < 0){
      i = this.images.length - 1;
    }
    this.images[i].className = 'shown';
  },

  this.next = function(){
    this.images[i].className = '';
    i++;
    if(i >= this.images.length){
      i = 0;
    }
    this.images[i].className = 'shown';
  }

  this.btnPrev.addEventListener('click', this.prev.bind(this));
  this.btnNext.addEventListener('click', this.next.bind(this));

  // setInterval(this.next.bind(this), this.interval);
}

new Slider({
  images: '.gallery-1 .photo img',
  next: '.gallery-1 .tabs .next',
  prev: '.gallery-1 .tabs .prev',
  interval: '2000'
});
