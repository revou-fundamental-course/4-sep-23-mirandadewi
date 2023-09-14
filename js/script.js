
function Hitung() {
    //  nilai sisi dari input Luas
    var sisiLuas = parseFloat(document.getElementById("SisiLuas").value);

    // nilai sisi dari input Keliling
    var sisiKeliling = parseFloat(document.getElementById("SisiKeliling").value);

    // Validasi input
    if (isNaN(sisiLuas) || isNaN(sisiKeliling)) {
        alert("Masukkan angka yang valid untuk sisi!");
        return;
    }

    // Hitung luas persegi
    var luas = sisiLuas * sisiLuas;

    // Hitung keliling persegi
    var keliling = 4 * sisiKeliling;

    // Tampilkan hasil luas dan keliling di elemen dengan id "Hasil"
    var hasilElement = document.getElementById("Hasil");
    hasilElement.innerHTML = " Hasil <p> Luas : <br> L = S . S =" + luas + "<p>Keliling : <br> K = 4 . S = " + keliling;
}

function Reset() {
    // Reset nilai input dan hasil
    document.getElementById("SisiLuas").value = "";
    document.getElementById("SisiKeliling").value = "";
    document.getElementById("Hasil").innerHTML = "";
}

