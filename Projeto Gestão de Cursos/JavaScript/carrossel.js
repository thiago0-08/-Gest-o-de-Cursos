document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
  
    function showItem(index) {
      carouselItems.forEach(item => item.classList.remove("active"));
      carouselItems[index].classList.add("active");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showItem(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentIndex);
    }
  
    document.querySelector(".carousel-next").addEventListener("click", nextSlide);
    document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
  
    showItem(currentIndex);
  });
  