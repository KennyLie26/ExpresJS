const express = require("express") // impor modul express
const app = express()//inisilisasi express
const expressLayout = require("express-ejs-layouts");
const port = 3000 

app.set('view engine','ejs');
app.set("view", __dirname + "/view");

app.use(expressLayout);

// route/
app.get("/", (req, res) =>{
    // res.send("Hello");
    res.render('index', {title: 'Halaman Home'});

    const berita = [
        {
            judul: "Berita 1",
            isi: "is berita 1"
        },
        {
            judul: "Berita 2",
            isi: "is berita 2"
        },
    ];
    res.render('index', {title:
        'Halaman Home', berita});
});

app.get("/prodi", (req, res) =>{

    const prodis = [
    {
        "prodi"    : "Sistem Informasi",
        "fakultas" : "FIKR",
        "singkatan": "SI"
    },
    {
        "prodi"    : "Informatika",
        "fakultas" : "FIKR",
        "singkatan": "IF" 
    },
    {
        "prodi"    : "Teknik Eektro",
        "fakultas" : "FIKR",
        "singkatan": "TE" 
    },
    {
        "prodi"    : "Manajemen Informatika",
        "fakultas" : "FIKR",
        "singkatan": "MI" 
    },
    {
        "prodi"    : "Manajemen",
        "fakultas" : "FEB",
        "singkatan": "MJ" 
    },
    {
        "prodi"    : "Akuntansi",
        "fakultas" : "FEB",
        "singkatan": "AK" 
    },
];
    res.render('prodi', {title:'Program Studi', prodis});
});

// route/abaout
app.get("/about", (req, res) =>{
    // res.sendFile(__dirname + "/about.ejs");
    res.render('about', {title: 'About Us', layout:'main.ejs'});
});

// route/contact
app.get("/contact", (req, res) =>{
    //res.send("Contact us");
    // res.sendFile(__dirname + "/contact.ejs");
    res.render('contact');
});

// route/mahasiswa
app.get("/mahasiswa", (req, res) =>{
    res.json({
        "status" : "Success",
        "message" : "Data Mahsasiswa",
        "Data" : [
            {npm: 2226240094, nama: "Kenny", Prodi: "SI"},
            {npm: 2226240011, nama: "Andre", Prodi: "MJ"},
            {npm: 2226240088, nama: "Akbar", Prodi: "TI"}
        ]
    })
});

// route/dosen
app.get("/dosen", (req, res) =>{
    res.json({
        "status" : "Success",
        "message" : "Data Dosen",
        "data" :[
            {
                prodi: "Sistem Informasi",
                dosen: ["Iis", "Inayah", "Teguh"]
            },
            {
                prodi: "Informatika",
                dosen: ["Siska", "Ery", "Derry"]
            },
        ]
     
    })
});


// route yang tidak ada
app.use("", (req, res)=>{
    res.send("<h1>404 Not Found</h2>");
});

// jalnakan server
app.listen(port, () => {
    console.log(`Server dapat di akses di http://localhost:${port}`);
});