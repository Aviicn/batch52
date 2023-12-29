function submitData () {
    const name = document.getElementById('inputName').value
    const email = document.getElementById('inputEmail').value
    const phoneNumber = document.getElementById('inputPhoneNumber').value
    const subject = document.getElementById('inputSubject').value
    const message = document.getElementById('inputMessage').value

    // keadaan jika salah satu input kosong
    if(!name) {
        alert('Name harap diisi');
    } else if (!email) {
        alert('Email harap diisi');
    } else if (!phoneNumber) {
        alert('Phone number harap diisi');
    } else if (!subject) {
        alert('Subject harap diisi');
    } else if (!message) {
        alert('Message harap diisi');
    } else {
       console.log(`Name : ${name}\nEmail:${email}\nPhoneNumber:${phoneNumber}\nSubject:${subject}\nMessage:${message}`)

        const emailReceiver = 'vcienna09@gmail.com'

        let a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`;
        a.click();
        alert("mail sent successfully")
    }
}