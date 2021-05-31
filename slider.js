/* Mains Slider*/
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();

}

changeSlide()
function changeSlide(){
  if(index>slides.length-1)
    index=0;
  if(index<0)
    index=slides.length-1;

    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      dots[i].classList.remove("active1");
    }
    slides[index].style.display = "block";
    dots[index].classList.add("active1");
}



/*slider2-IT-books*/
function defer(method) {
  if (window.jQuery)
    method();
  else
    setTimeout(function() {
      defer(method)
    }, 50);
}
defer(function() {
  (function($) {
    
    function doneResizing() {
      var totalScroll = $('.resource-slider-frame').scrollLeft();
      var itemWidth = $('.resource-slider-item').width();
      var difference = totalScroll % itemWidth;
      if ( difference !== 0 ) {
        $('.resource-slider-frame').animate({
          scrollLeft: '-=' + difference
        }, 500, function() {
          
          checkArrows();
        });
      }
    }
    
    function checkArrows() {
      var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
      var frameWidth = $('.resource-slider-frame').width();
      var itemWidth = $('.resource-slider-item').width(250);
      var totalScroll = $('.resource-slider-frame').scrollLeft();
      
      if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
        $(".next").css("visibility", "visible");
      }
      else {
        $(".next").css("visibility", "visible");
      }
      if ( totalScroll < itemWidth ) {
        $(".prev").css("visibility", "visible");
      }
      else {
        $(".prev").css("visibility", "visible");
      }
    }
    
    $('.arrow').on('click', function() {
      var $this = $(this),
        width = $('.resource-slider-item').width(),
        speed = 500;
      if ($this.hasClass('prev')) {
        $('.resource-slider-frame').animate({
          scrollLeft: '-=' + width
        }, speed, function() {
          
          checkArrows();
        });
      } else if ($this.hasClass('next')) {
        $('.resource-slider-frame').animate({
          scrollLeft: '+=' + width
        }, speed, function() {
          
          checkArrows();
        });
      }
    });
    
    $(window).on("load resize", function() {
      checkArrows();
      $('#resource-slider .resource-slider-item').each(function(i) {
        var $this = $(this),
          left = $this.width() * i;
        $this.css({
          left: left
        })
      });
    });
    
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });
    
  })(jQuery); 
});

/*slider 3-Engineering-books*/
function defer(method) {
  if (window.jQuery)
    method();
  else
    setTimeout(function() {
      defer(method)
    }, 50);
}
defer(function() {
  (function($) {
    
    function doneResizing() {
      var totalScroll = $('.resource-slider-frame1').scrollLeft();
      var itemWidth = $('.resource-slider-item1').width();
      var difference = totalScroll % itemWidth;
      if ( difference !== 0 ) {
        $('.resource-slider-frame1').animate({
          scrollLeft: '-=' + difference
        }, 500, function() {
          
          checkArrows();
        });
      }
    }
    
    function checkArrows() {
      var totalWidth = $('#resource-slider1 .resource-slider-item1').length * $('.resource-slider-item1').width();
      var frameWidth = $('.resource-slider-frame1').width();
      var itemWidth = $('.resource-slider-item1').width(250);
      var totalScroll = $('.resource-slider-frame1').scrollLeft();
      
      if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
        $(".next").css("visibility", "visible");
      }
      else {
        $(".next").css("visibility", "visible");
      }
      if ( totalScroll < itemWidth ) {
        $(".prev").css("visibility", "visible");
      }
      else {
        $(".prev").css("visibility", "visible");
      }
    }
    
    $('.arrow1').on('click', function() {
      var $this = $(this),
        width = $('.resource-slider-item1').width(),
        speed = 500;
      if ($this.hasClass('prev1')) {
        $('.resource-slider-frame1').animate({
          scrollLeft: '-=' + width
        }, speed, function() {
         
          checkArrows();
        });
      } else if ($this.hasClass('next1')) {
        $('.resource-slider-frame1').animate({
          scrollLeft: '+=' + width
        }, speed, function() {
          
          checkArrows();
        });
      }
    });
    
    $(window).on("load resize1", function() {
      checkArrows();
      $('#resource-slider1 .resource-slider-item1').each(function(i) {
        var $this = $(this),
          left = $this.width() * i;
        $this.css({
          left: left
        })
      });
    });
    
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });
    
  })(jQuery);
});