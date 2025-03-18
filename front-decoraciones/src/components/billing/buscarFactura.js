import React, { useState } from 'react';
import { obtenerFactura } from './facturaService';

const BuscarFactura = () => {
    const [facturaId, setFacturaId] = useState('');
    const [factura, setFactura] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await obtenerFactura(facturaId);
            setFactura(response);
            setError(null);
        } catch (error) {
            setError('Error al obtener la factura');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Factura ID:</label>
                <input type="text" value={facturaId} onChange={(e) => setFacturaId(e.target.value)} />
                <button type="submit">Buscar Factura</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {factura && (
                <div>
                    <h2>Factura</h2>
                    <p>ID: {factura.id}</p>
                    <p>Fecha: {factura.fecha}</p>
                    <p>Total: {factura.total}</p>
                    <h3>Detalles</h3>
                    {factura.detalles.map((detalle) => (
                        <div key={detalle.id}>
                            <p>Producto ID: {detalle.producto_id}</p>
                            <p>Cantidad: {detalle.cantidad}</p>
                            <p>Precio: {detalle.precio}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BuscarFactura;