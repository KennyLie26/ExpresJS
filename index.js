const express = require("express") // impor modul express
const app = express()//inisilisasi express
const port = 3000 

// route/
app.get("/", (req, res) =>{
    res.send("Hello");
});

// route/abaout
app.get("/about", (req, res) =>{
    res.send("About us");
});

// route/contact
app.get("/contact", (req, res) =>{
    //res.send("Contact us");
    res.sendFile(__dirname + "/contact.html");
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