'use strict';
console.log('reading js');

var mobileReports = document.querySelector('#mobileRep');
var mobileAbout = document.querySelector('#mobileAbt');
var mobileContact = document.querySelector('#mobileContact');

// Mobile Navigation Hovers For Submenu
mobileReports.addEventListener('mouseover', function() {
  document.querySelector('#reports').style.display = 'block';
});

mobileReports.addEventListener('mouseout', function() {
  document.querySelector('#reports').style.display = 'none';
})

mobileAbout.addEventListener('mouseover', function() {
  document.querySelector('#mobileabout').style.display = 'block';
});

mobileAbout.addEventListener('mouseout', function() {
  document.querySelector('#mobileabout').style.display = 'none';
})

mobileContact.addEventListener('mouseover', function() {
  document.querySelector('#mobilecont').style.display = 'block';
});

mobileContact.addEventListener('mouseout', function() {
  document.querySelector('#mobilecont').style.display = 'none';
})
