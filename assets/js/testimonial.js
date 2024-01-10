const ambilbackend = new Promise((resolve, reject) => {
  const datanya = new XMLHttpRequest()
  datanya.open('GET', 'https://api.npoint.io/5888d7eb41f2dd12de5d', true)
  datanya.onload = () => {
      if (datanya.status === 200) {
          //console.log("berhasil", xhr.response)
          resolve( JSON.parse(datanya.response))
      } else {
          //console.log("gagal", xhr.response)
          reject(datanya.responseText)
      }
  }

  datanya.onerror = () => {
      reject("Network error!")
      //console.log("Network error! please check your internet connection")
  }
  datanya.send()
})

let testimonialData =""

async function allTestimonials() {
  let testimonialHTML = ""
   testimonialData = await ambilbackend
  
  console.log(testimonialData)
     
  testimonialData.forEach((item) => (
      testimonialHTML += `
      <div class="testimonial-container">
      <img src="${item.image}" class="testimonial-image" /> 
      <p class ="testimonial-text"> ${item.content}</p>
      <p class ="testimonial-author"> ${item.author}</p>
      <p class ="testimonial-author"> ${item.rating} <i class="fa -solid fa-star"></i></p>
      </div>`
  ))

  document.getElementById("testimonials").innerHTML = testimonialHTML

}

allTestimonials()

function filterTestimonials(rating) {
  const testimonialsFiltered = testimonialData.filter((item) => (
      item.rating === rating
  ))

  let testimonialHTML = ""
  testimonialsFiltered.forEach((item) => (
      testimonialHTML += `
      <div style="width: 260px; height: 100px; display="row" class="testimonial-container">
      <img src="${item.image}" class="testimonial-image" /> 
      <p class ="testimonial-text"> ${item.content}</p>
      <p class ="testimonial-author"> ${item.author}</p>
      <p class ="testimonial-author"> ${item.rating} <i class="fa -solid fa-star"></i></p>
      </div>`
  ))

  document.getElementById("testimonials").innerHTML = testimonialHTML
  console.log("data terfiter", testimonialsFiltered[0])
}

