import Producto from "./Producto";

export default function Productos({
  productos,
  agregarFavoritos,
  eliminarDeFavoritos,
}) {
  return (
    <div className="productos">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            agregarFavoritos={agregarFavoritos}
            eliminarDeFavoritos={eliminarDeFavoritos}
          />
        ))
      ) : (
        <p className="sinProductos">No hay productos en la lista</p>
      )}
    </div>
  );
}
