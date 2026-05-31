// Alta de Ficha de Producto
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