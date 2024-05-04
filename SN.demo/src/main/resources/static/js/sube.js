const foto = document.getElementById('foto');
const fotover = document.getElementById('fotomostrar')

foto.addEventListener('change', function () {
    let archivo = this.files[0];
    if (archivo.type.match('image.*')) {
        let tmp = URL.createObjectURL(archivo);
        fotover.setAttribute('src', tmp);
    } else {
        alert('No es un archivo')
    }
})