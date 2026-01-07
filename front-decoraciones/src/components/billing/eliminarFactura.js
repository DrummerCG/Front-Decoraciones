import React, { useState } from 'react';
import { eliminarFactura } from './facturaService';

const EliminarFactura = () => {
    const [facturaId, setFacturaId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await eliminarFactura(facturaId);
        console.log('Factura eliminada:', response);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Factura ID:</label>
            <input type="text" value={facturaId} onChange={(e) => setFacturaId(e.target.value)} />
            <button type="submit">Eliminar Factura</button>
        </form>
    );
};

export default EliminarFactura;