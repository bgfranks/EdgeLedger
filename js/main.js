function initMap() {
  // location 
  const loc = {
    lat: 35.779591,
    lng: -78.638176
  };
  // center map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // marker on the map
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

// Navbar Sticky Opacity On Scroll

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling

$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});