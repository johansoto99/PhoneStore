export const ShoppingCart = () => { 
    return(
     <div className="contenedor">
         <div className="tabla-calculo" id="tabla-calculo">
            <table className="tabla">
              <caption className="titulo-tabla">Carrito de compras</caption>
              <thead className="cabecera border-top-right">
                <tr>
                  <th className="border-top-left">Nombre Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th className="border-top-right">Precio Total</th>
                </tr>
              </thead>
              <tbody id="carrito-body">
                  {/**/}
              </tbody>
              <tfoot id="footer">
                <tr>
                    <td className="border-bottom-left border-bottom-right"  colSpan="4">
                    ¡No hay ningun elemento en el carrito!
                    </td>
                </tr>
              </tfoot>
            </table>
        </div>
     </div>
    );
}