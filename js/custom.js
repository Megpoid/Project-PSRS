function sendMessage() {
  (function () {
    emailjs.init("user_ZJwo3SleqTrCzPHL3SADn");
  })();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  if (name == '') {
    alert('Please Fill the Blank')
    return false;
  }
  if (email == '') {
    alert('Please Fill the Blank')
    return false;
  }
  if (subject == '') {
    alert('Please Fill the Blank')
    return false;
  }
  if (phone == '') {
    alert('Please Fill the Blank')
    return false;
  }
  if (message == '') {
    alert('Please Fill the Blank')
    return false;
  }
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var phoneformat = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
  if (!email.match(mailformat)) {
    alert("You have entered an invalid email address!");
    return false;
  }
  if (!phone.match(phoneformat)) {
    alert("You have entered an invalid Phone Number!");
    return false;
  }

  if (grecaptcha.getResponse() == "") {
    alert("You can't proceed!");
    return false;
  }

  emailjs.send("service_vcgcq9i", "template_8ph22mm", {
    name: name,
    email: email,
    message: message,
    subject: subject,
    phone: phone,
  }).then(function (response) {
    console.log('SUCCESS!', response.status, response.text);
    alert("Your Message has Been Sended!");
  }, function (error) {
    console.log('FAILED...', error);
  });
}

$(document).ready(function() {
  $(".exchange-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 
      0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });
})

var faqAcc = document.getElementsByClassName('faq-accordion')
var i;

for (i = 0; i < faqAcc.length; i++) {
  faqAcc[i].addEventListener('click', function() {
    this.classList.toggle('accordion-active');

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('.faq-accordion:first-child').click();