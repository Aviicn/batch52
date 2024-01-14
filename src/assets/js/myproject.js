let dataBlog = [];
let dataIcons = [];

function submitBlog() {

    let inputProject = document.getElementById('inputTitle').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let desc = document.getElementById('inputContent').value;
    let inputImage = document.getElementById('inputImage').files;
    // Memeriksa apakah nilai input kosong
    if (!inputProject) {
        alert('Project Name harus diisi!');
        return;
    } else if (!startDate) {
        alert('Start Date harus diisi!');
        return;
    } else if (!endDate) {
        alert('End Date harus diisi!');
        return;
    } else if (!desc) {
        alert('Description harus diisi!');
        return;
    } else if (inputImage.length <= 0) {
        alert('Image harus diisi!');
        return;
    }

    inputImage = URL.createObjectURL(inputImage[0]);

    const jarak = Math.abs(new Date(endDate) - new Date(startDate));

    // Konversi jarak waktu menjadi hari, jam, menit, dan detik
    let hari = Math.floor((jarak / (1000 * 60 * 60 * 24)));
    let jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((jarak % (1000 * 60)) / 1000);
    let bulan = Math.abs(jarak / (1000 * 60 * 60 * 24 * 30));
    bulan = parseInt(bulan)
    hari = hari % 30;

    let durasinya = "";
    if (detik > 0) {
        durasinya += detik.toString() + " Detik, ";
    }
    if (menit > 0) {
        durasinya += menit.toString() + " Menit, ";
    }
    if (jam > 0) {
        durasinya += jam.toString() + " Jam, ";
    }
    if (hari > 0) {
        durasinya += hari.toString() + " Hari, ";
    }
    if (bulan > 0) {
        durasinya += bulan.toString() + " Bulan";
    }

    // icon checkbox
    const nodejs = `./img/nodejs.png`;
    const reactjs = `./img/react.png`;
    const nextjs = `./img/nextjs.png`;
    const typescript = `./img/typescript.png`;

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



    console.log('data', iconsForCurrentCard);




    const blog = {
        project: inputProject,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        image: inputImage,
        bulan: bulan,
        hari: hari,
        jam: jam,
        menit: menit,
        detik: detik,
        durasinya: durasinya
    };

    dataBlog.push(blog);
    dataIcons.push(iconsForCurrentCard); // simpan icons untuk iconsForCurrentCard

    renderBlog();
}

function renderBlog() {

    document.getElementById('contents').innerHTML = '';
    console.log('durasi', dataBlog[0])
    for (let i = 0; i < dataBlog.length; i++) {
        // Menggunakan map untuk membuat array elemen HTML untuk icon current card
        const iconsHTML = dataIcons[i].map(icon => `<img src="${icon}" style="width: 20px;">`).join('');

        document.getElementById('contents').innerHTML += `<div class="container-card">
        <img src="${dataBlog[i].image}" class="img-card">
        <div>

            <a href="project-detail" class="text-title">${dataBlog[i].project}</a>

            <p class="text-duration">durasi : ${dataBlog[i].durasinya} </p>

            <p class="text-card">${dataBlog[i].desc}</p>
            
        </div>
<div class="icon-cards" >
        <img src="assets/icon/google-play.svg" class="icon-card" >
        <img src="assets/icon/android1.png" class="icon-card">
        <img src="assets/icon/java.svg" class="icon-card">
</div>

        <div class="btn-group">
            <button class="btn-card">edit</button>
            <button class="btn-card" style="margin-left:5px">delete</button>
        </div>
    </div>`

    }
}
// Toggle class active untuk hamburger menu
const listNav = document.getElementById('listNav');

document.getElementById('hamburger').onclick = () => {
    listNav.classList.toggle('active');
};

// Ketika klik di luar element maka hilangkan class active
const hamburger = document.getElementById('hamburger');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !listNav.contains(e.target)) {
        listNav.classList.remove('active');
    }
});