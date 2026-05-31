function ejecutarLogin() {
    const usuario = document.getElementById('usuario').value.trim();
    const rol = document.getElementById('rol').value;

    if (!usuario) {
        alert("Ingrese un usuario válido.");
        return;
    }

    if (rol === "admin") {
        window.location.href = "dashboard_rrhh.html";
    } else if (rol === "bodega") {
        window.location.href = "dashboard_bodega.html";
    } else if (rol === "empleado") {
        // Almacenar RUT en sesión simulada para el portal de autoservicio
        localStorage.setItem('rutSesionActiva', usuario);
        window.location.href = "portal_empleado.html";
    }
}