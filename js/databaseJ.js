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

function registrarFichaEmpleado() {
    const rut = document.getElementById('empRut').value.trim();
    const nombre = document.getElementById('empNombre').value.trim();
    const cargo = document.getElementById('empCargo').value.trim();
    const prevision = document.getElementById('empPrevision').value;
    const sueldoBase = parseFloat(document.getElementById('empSueldo').value);

    // Validación para que no falten datos importantes
    if (!rut || !nombre || !cargo || isNaN(sueldoBase)) {
        alert("Por favor complete toda la información de la ficha.");
        return;
    }

    // Traer los empleados existentes de la base de datos local
    let empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    
    // Validar que el RUT no esté duplicado
    if (empleados.some(e => e.rut === rut)) {
        alert("El RUT ya se encuentra registrado en el sistema.");
        return;
    }

    // Agregar el nuevo empleado al array (incluyendo 15 días de vacaciones por defecto)
    empleados.push({ rut, nombre, cargo, prevision, sueldoBase, vacacionesDisponibles: 15 });
    
    // Guardar los cambios
    localStorage.setItem('empleados', JSON.stringify(empleados));
    
    alert("Ficha guardada exitosamente en Recursos Humanos.");
    
    // Limpiar el formulario después de guardar
    document.getElementById('formFicha').reset();
    
    
}