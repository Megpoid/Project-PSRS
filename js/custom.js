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