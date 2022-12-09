function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "eye") {
        images.src = "images/jeno.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar jeno .jpg";
        alert("Ini adalah gambar jeno");
    } else if (picker == "pretty") {
        images.src = "images/karina.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar karina.png";
        alert("Ini adalah gambar karina");
    } else if (picker == "do") {
        images.src = "images/doyoung.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar doyoung.png";
        alert("Ini adalah gambar doyoung");
    } else if (picker == "tanda") {
        images.src = "images/mark.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar mark.jpg";
        alert("Ini adalah gambar mark");
    } else if (picker == "salju") {
        images.src = "images/winter.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar winter.png";
        alert("Ini adalah gambar winter");
    } else if (picker == "kang") {
        images.src = "images/seulgi.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar seulgi.png";
        alert("Ini adalah gambar seulgi");
    } else if (picker == "ning") {
        images.src = "images/Ningning.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar ningning.png";
        alert("Ini adalah gambar ningning");
    } else if (picker == "muda") {
        images.src = "images/chenle.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar chonlo.png";
        alert("Ini adalah gambar chenle");
    } else {
        alert("Gagal");
    }
}