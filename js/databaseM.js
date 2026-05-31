// Ficha de Producto
function crearProductoBodega() {
    const codigo = document.getElementById('prodCodigo').value.trim();
    const descripcion = document.getElementById('prodDesc').value.trim();
    const stock = parseInt(document.getElementById('prodStock').value);
    const stockMinimo = parseInt(document.getElementById('prodMinimo').value);

    // Validación de que los campos no estén vacíos
    if (!codigo || !descripcion || isNaN(stock) || isNaN(stockMinimo)) {
        alert("Defina todos los campos paramétricos del producto.");
        return;
    }

    // Traer los productos existentes o crear un arreglo vacío
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Evitar códigos duplicados
    if (productos.some(p => p.codigo === codigo)) {
        alert("Código de producto ya existente.");
        return;
    }

    // Agregar el nuevo producto
    productos.push({ codigo, descripcion, stock, stockMinimo });
    localStorage.setItem('productos', JSON.stringify(productos));
    
    alert("Producto catalogado exitosamente.");
    document.getElementById('formProducto').reset();
}
// Control de Transacciones
function ejecutarMovimientoBodega() {
    const codigo = document.getElementById('movProd').value.trim();
    const tipo = document.getElementById('movTipo').value;
    const cantidad = parseInt(document.getElementById('movCantidad').value);

    // Validación de cantidad
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser mayor a cero.");
        return;
    }

    // Traer la base de datos de productos
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Buscar si el producto existe
    const prod = productos.find(p => p.codigo === codigo);

    if (!prod) {
        alert("El código de producto no existe en el inventario.");
        return;
    }

    // Validación para no tener inventario negativo
    if (tipo === "Salida" && prod.stock < cantidad) {
        alert("Operación cancelada: Stock insuficiente en bodega central. Tienes " + prod.stock + " unidades.");
        return;
    }

    // Aplicar la suma (Entrada) o resta (Salida)
    if (tipo === "Entrada") {
        prod.stock += cantidad;
    } else {
        prod.stock -= cantidad;
    }

    // Guardar en la base de datos local
    localStorage.setItem('productos', JSON.stringify(productos));
    
    alert("Movimiento registrado exitosamente. Nuevo stock de [" + prod.codigo + "]: " + prod.stock);
    document.getElementById('formMovimiento').reset();
}