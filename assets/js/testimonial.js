const testimonialData = [
  {
    author: "-Ji Chang Wook-",
    content: "Apa apaan ini!",
    image: "assets/img/jcw.jpeg",
    rating: 1,
    
  },
  {
    author: "-Kim Mingyu-",
    content: "oke lah!",
    image: "assets/img/mgy.jpeg",
    rating: 3,
  },
  {
    author: "-Jake-",
    content: "The best pelayanannya!",
    image: "assets/img/jk.jpeg",
    rating: 4,
    
  
  },
  {
    author: "-Kim Beom-",
    content: "keren banget jasanya!",
    image: "assets/img/kimbum.jpeg",
    rating: 5,
    
  },
  {
    author: "-Cha Eun Woo-",
    content: "kerenlah pokoknya!",
    image: "assets/img/cew.jpeg",
    rating: 4,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(
    (item) =>
      (testimonialHTML += `
        <div class="testimonial-container">
        <img src="${item.image}" class="testimonial-img" /> 
        <p class ="testimonial-text"> ${item.content}</p>
        <p class ="testimonial-author"> ${item.author}</p>
        <p class ="testimonial-author"> ${item.rating} <i class="fa -solid fa-star"></i></p>
        </div>`)
  );

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  const testimonialsFiltered = testimonialData.filter(
    (item) => item.rating === rating
  );

  let testimonialHTML = "";
  testimonialsFiltered.forEach(
    (item) =>
      (testimonialHTML += `
        <div style="width: 260px; height: 100px; display="row" class="testimonial-container">
        <img src="${item.image}" class="testimonial-image" /> 
        <p class ="testimonial-text"> ${item.content}</p>
        <p class ="testimonial-author"> ${item.author}</p>
        <p class ="testimonial-author"> ${item.rating} <i class="fa -solid fa-star"></i></p>
        </div>`)
  );

  document.getElementById("testimonials").innerHTML = testimonialHTML;
  console.log("data terfiter", testimonialsFiltered[0]);
}

// Toggle class active untuk hamburger menu
const listNav = document.getElementById("listNav");

document.getElementById("hamburger").onclick = () => {
  listNav.classList.toggle("active");
};

// Ketika klik di luar element maka hilangkan class active
const hamburger = document.getElementById("hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !listNav.contains(e.target)) {
    listNav.classList.remove("active");
  }
});
