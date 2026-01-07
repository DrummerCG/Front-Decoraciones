import React, { useState } from 'react';
import { obtenerFactura, actualizarFactura } from './facturaService';

const EditarFactura = () => {
    const [facturaId, setFacturaId] = useState('');
    const [factura, setFactura] = useState(null);

    const handleBuscar = async (e) => {
        e.preventDefault();
        const response = await obtenerFactura(facturaId);
        setFactura(response);
    };

    const handleActualizar = async (e) => {
        e.preventDefault();
        const response = await actualizarFactura(facturaId, factura);
        console.log('Factura actualizada:', response);
    };

    const handleChange = (field, value) => {
        setFactura({ ...factura, [field]: value });
    };

    return (
        <div>
            <form onSubmit={handleBuscar}>
                <label>Factura ID:</label>
                <input type="text" value={facturaId} onChange={(e) => setFacturaId(e.target.value)} />
                <button type="submit">Buscar Factura</button>
            </form>
            {factura && (
                <form onSubmit={handleActualizar}>
                    <label>Cliente ID:</label>
                    <input type="text" value={factura.factura.cliente_id} onChange={(e) => handleChange('cliente_id', e.target.value)} />
                    <label>Total:</label>
                    <input type="text" value={factura.factura.total} onChange={(e) => handleChange('total', e.target.value)} />
                    <button type="submit">Actualizar Factura</button>
                </form>
            )}
        </div>
    );
};

export default EditarFactura;