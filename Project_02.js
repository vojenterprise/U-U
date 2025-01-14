// JavaScript for Wedding Website

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 15000); // Change slide every 15 seconds



// Google Maps Integration
let map;
function initMap() {
    const weddingLocation = { lat: -25.363, lng: 131.044 }; // Replace with actual coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        center: weddingLocation,
        zoom: 15,
    });

    new google.maps.Marker({
        position: weddingLocation,
        map: map,
        title: 'Wedding Venue',
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location',
                });

                map.setCenter(userLocation);
            },
            () => {
                console.warn('Geolocation not enabled or unavailable.');
            }
        );
    }
}

   // Toggle dropdown visibility
//    const dropdownbtn = document.getElementById('button');
//    const dropdowncontent = document.getElementById('content');
//    const Arrow = document.getElementById('arrow');

//    dropdownBtn.addEventListener('click', function() {
//        if (dropdownContent.style.display === 'block') {
//            dropdownContent.style.display = 'none';
//            arrow.style.transform = 'rotate(0deg)'; // Rotate the arrow to point down
//        } else {
//            dropdownContent.style.display = 'block';
//            arrow.style.transform = 'rotate(180deg)'; // Rotate the arrow to point up
//        }
//    });

//    const dropdownBtn = document.getElementById('button');
//    const dropdownContent = document.getElementById('content');
//    const arrow = document.getElementById('arrow');

//    dropdownBtn.addEventListener('click', function() {
//        if (dropdownContent.style.display === 'block') {
//            dropdownContent.style.display = 'none';
//            arrow.style.transform = 'rotate(0deg)'; // Rotate the arrow to point down
//        } else {
//            dropdownContent.style.display = 'block';
//            arrow.style.transform = 'rotate(180deg)'; // Rotate the arrow to point up
//        }
//    });