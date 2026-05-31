function inicializarBaseDatos() {
    // Si no existen, inicializamos los arreglos necesarios para las nuevas HU
    if (!localStorage.getItem('asistencia')) {
        localStorage.setItem('asistencia', JSON.stringify([])); // HU-03
    }
    if (!localStorage.getItem('licencias')) {
        localStorage.setItem('licencias', JSON.stringify([])); // HU-06
    }
    if (!localStorage.getItem('vacaciones')) {
        localStorage.setItem('vacaciones', JSON.stringify([])); // HU-05, HU-08
    }
    if (!localStorage.getItem('movimientos')) {
        localStorage.setItem('movimientos', JSON.stringify([])); // HU-11
    }
}
inicializarBaseDatos();