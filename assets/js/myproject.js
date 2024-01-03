let dataBlog = [];
let dataIcons = [];

function submitBlog() {
   
    let inputProject = document.getElementById('inputTitle').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let desc = document.getElementById('inputContent').value;
  
    // deklarasi variabel icons
    let icon1 = document.getElementById('nodeJs');
    let icon2 = document.getElementById('reactJs');
    let icon3 = document.getElementById('nextJs');
    let icon4 = document.getElementById('typescript');

    // Check Icon
    const iconsForCurrentCard = [];
    icon1.checked === true && iconsForCurrentCard.push(nodejs);
    icon2.checked === true && iconsForCurrentCard.push(reactjs);
    icon3.checked === true && iconsForCurrentCard.push(nextjs);
    icon4.checked === true && iconsForCurrentCard.push(typescript);

    console.log('data');

    // Memeriksa apakah nilai input kosong
    if (!inputProject) {
        alert('Project Name harus diisi!');
    } else if (!startDate) {
        alert('Start Date harus diisi!');
    } else if (!endDate) {
        alert('End Date harus diisi!');
    } else if (!desc) {
        alert('Description harus diisi!');
    } else {
        //alert('Project berhasil terkirim');
    }

    let inputImage = document.getElementById('inputImage').files;



    inputImage = URL.createObjectURL(inputImage[0]);
    

    const blog = {
        project: inputProject,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        image: inputImage
    };

    dataBlog.push(blog);
    dataIcons.push(iconsForCurrentCard); // simpan icons untuk iconsForCurrentCard
   
    renderBlog();
}

function renderBlog() {
    
    document.getElementById('contents').innerHTML = '';

    for (let i = 0; i < dataBlog.length; i++) {

        // Menggunakan map untuk membuat array elemen HTML untuk icon current card
        const iconsHTML = dataIcons[i].map(icon => `<img src="${icon}" style="width: 20px;">`).join('');

        document.getElementById('contents').innerHTML += `<div class="container-card">
        <img src="${dataBlog[i].image}" class="img-card" style="width: 300px; height:300px;">
        <div class="text-card">

            <a href="project-detail.html">${dataBlog[i].project}</a>

            <h4>durasi : 3 bulan</h4>

            <p>${dataBlog[i].desc}</p>
            
            <div class="checkbox" style="margin-top: 20px;">

            </div>
        </div>

        <img src="assets/icon/google-play.svg" alt="" width="40px">
        <img src="assets/icon/android1.png" alt="" width="40px">
        <img src="assets/icon/java.svg" alt="" width="40px">


        <div class="btn-group">
            <button class="btn-card">edit</button>
            <button class="btn-card">delete</button>
        </div>
    </div>`;
    }
}