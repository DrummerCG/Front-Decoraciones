import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const crearFactura = async (factura) => {
    try {
        const response = await axios.post(`${API_URL}/facturas`, factura);
        return response.data;
    } catch (error) {
        console.error('Error al crear la factura:', error);
        throw error;
    }
};

export const obtenerUltimaFactura = async () => {
    try {
        const response = await axios.get(`${API_URL}/facturas/ultima`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la última factura:', error);
        throw error;
    }
};

export const obtenerFactura = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/facturas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la factura:', error);
        throw error;
    }
};

export const actualizarFactura = async (id, factura) => {
    try {
        const response = await axios.put(`${API_URL}/facturas/${id}`, factura);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar la factura:', error);
        throw error;
    }
};

export const eliminarFactura = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/facturas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar la factura:', error);
        throw error;
    }
};