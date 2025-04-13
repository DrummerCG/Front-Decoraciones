import React, { useState, useEffect } from 'react';
import { crearFactura, obtenerUltimaFactura } from './facturaService';
import { Container, Row, Col, Button as BootstrapButton, Form, Table } from 'react-bootstrap'; // Renombramos el Button de react-bootstrap
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  max-width: 1500px; /* Limita el ancho del contenedor */
  width: 100%; /* Se adapta al tamaño de la pantalla */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Añade una sombra para mejor visualización */
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px; 
  font-size: 0.9rem; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const ProductTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f4f4f4;
  text-align: left;
  font-size: 0.9rem;
`;

const ProductTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 0.9rem;
`;

const CrearFactura = () => {
    const [clienteId, setClienteId] = useState('');
    const [productos, setProductos] = useState([{ producto_id: '', nombre: '', descripcion: '', cantidad: '', valor_unitario: '', valor_total: '' }]);
    const [facturaNumero, setFacturaNumero] = useState('000000');
    const [nit, setNit] = useState('');
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [fechaRecibido, setFechaRecibido] = useState('');
    const [pagoContado, setPagoContado] = useState(false);
    const [transferencia, setTransferencia] = useState(false);
    const [articulo, setArticulo] = useState(false);
    const [servicio, setServicio] = useState(false);
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [vendedor, setVendedor] = useState('');
    const [comprador, setComprador] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [nota, setNota] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchUltimaFactura = async () => {
            const ultimaFactura = await obtenerUltimaFactura();
            const nuevoNumero = ultimaFactura ? (parseInt(ultimaFactura.numero, 10) + 1).toString().padStart(6, '0') : '000001';
            setFacturaNumero(nuevoNumero);
        };
        fetchUltimaFactura();
    }, []);

    const handleProductoChange = (index, field, value) => {
        const newProductos = [...productos];
        newProductos[index][field] = value;
        if (field === 'cantidad' || field === 'valor_unitario') {
            const cantidad = parseFloat(newProductos[index].cantidad) || 0;
            const valor_unitario = parseFloat(newProductos[index].valor_unitario) || 0;
            newProductos[index].valor_total = cantidad * valor_unitario;
        }
        setProductos(newProductos);
        setTotal(newProductos.reduce((acc, producto) => acc + (producto.valor_total || 0), 0));
    };

    const agregarProducto = () => {
        setProductos([...productos, { producto_id: '', nombre: '', descripcion: '', cantidad: '', valor_unitario: '', valor_total: '' }]);
    };

    const eliminarProducto = (index) => {
        const newProductos = productos.filter((_, i) => i !== index);
        setProductos(newProductos);
        setTotal(newProductos.reduce((acc, producto) => acc + (producto.valor_total || 0), 0));
    };

    const handleImprimirFactura = () => {
        window.print();
    };

    const handleGuardarFactura = async () => {
        const factura = {
            numero: facturaNumero,
            nit,
            fecha,
            fecha_vencimiento: fechaVencimiento,
            cliente_id: clienteId,
            productos,
            pagoContado,
            transferencia,
            articulo,
            servicio,
            telefono,
            correo,
            vendedor,
            comprador,
            direccion,
            ciudad,
            nota,
            total,
            fecha_envio: fechaRecibido, // Cambiado a "fecha_envio"
        };
    
        try {
            const response = await crearFactura(factura); // Llama a la función del servicio
            if (response) {
                alert('Factura guardada correctamente.');
            }
        } catch (error) {
            console.error('Error al guardar la factura:', error);
            alert('Hubo un error al guardar la factura.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const factura = {
            numero: facturaNumero,
            nit,
            fecha,
            fecha_vencimiento: fechaVencimiento,
            cliente_id: clienteId,
            productos,
            pagoContado,
            transferencia,
            articulo,
            servicio,
            telefono,
            correo,
            vendedor,
            comprador,
            direccion,
            ciudad,
            nota,
            total,
            fecha_recibido: fechaRecibido
        };
        const response = await crearFactura(factura);
        if (response) {
            console.log('Factura creada:', response);
        }
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <img className='imagenfondo'
            src="/oip.jpeg"
            alt="imagen de fondo" />
                <Button type="button" onClick={handleGuardarFactura}>Guardar</Button>  
                <Button type="button" onClick={handleImprimirFactura}>Imprimir</Button>
        <FormContainer id="form-container">
            <h3 className="text-center mb-4">Nueva Factura</h3>
            <h6>Rellena todos los campos para ingresar un nuevo registro de facturación:</h6>
            <form onSubmit={handleSubmit}>
                {/* Datos de la Empresa y del Cliente */}
                <ProductTable>
                    <thead>
                        <tr>
                            <ProductTableHeader>Número de Factura</ProductTableHeader>
                            <ProductTableHeader>Fecha de Elaboración</ProductTableHeader>
                            <ProductTableHeader>Fecha de Vencimiento</ProductTableHeader>
                            <ProductTableHeader>Nombre del Vendedor</ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ProductTableCell>
                                <input type="text" value={facturaNumero} readOnly />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="date" value={fechaVencimiento} onChange={(e) => setFechaVencimiento(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="text" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />
                            </ProductTableCell>
                        </tr>
                    </tbody>
                </ProductTable>

                <ProductTable>
                    <thead>
                        <tr>
                            <ProductTableHeader>NIT</ProductTableHeader>
                            <ProductTableHeader>Cliente ID</ProductTableHeader>
                            <ProductTableHeader>Fecha de Envío</ProductTableHeader>
                            <ProductTableHeader>Nombre del Comprador</ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ProductTableCell>
                                <input type="text" value={nit} onChange={(e) => setNit(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="text" value={clienteId} onChange={(e) => setClienteId(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="date" value={fechaRecibido} onChange={(e) => setFechaRecibido(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="text" value={comprador} onChange={(e) => setComprador(e.target.value)} />
                            </ProductTableCell>
                        </tr>
                    </tbody>
                </ProductTable>

                <ProductTable>
                    <thead>
                        <tr>
                            <ProductTableHeader>Dirección</ProductTableHeader>
                            <ProductTableHeader>Ciudad</ProductTableHeader>
                            <ProductTableHeader>Teléfono</ProductTableHeader>
                            <ProductTableHeader>Correo Electrónico</ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ProductTableCell>
                                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </ProductTableCell>
                            <ProductTableCell>
                                <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            </ProductTableCell>
                        </tr>
                    </tbody>
                </ProductTable>

                <ProductTable>
                    <thead>
                        <tr>
                            <ProductTableHeader>Producto ID</ProductTableHeader>
                            <ProductTableHeader>Nombre</ProductTableHeader>
                            <ProductTableHeader>Descripción</ProductTableHeader>
                            <ProductTableHeader>Cantidad</ProductTableHeader>
                            <ProductTableHeader>Valor Unitario</ProductTableHeader>
                            <ProductTableHeader>Valor Total</ProductTableHeader>
                            <ProductTableHeader>Acciones</ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto, index) => (
                            <tr key={index}>
                                <ProductTableCell>
                                    <input type="text" value={producto.producto_id} onChange={(e) => handleProductoChange(index, 'producto_id', e.target.value)} />
                                </ProductTableCell>
                                <ProductTableCell>
                                    <input type="text" value={producto.nombre} onChange={(e) => handleProductoChange(index, 'nombre', e.target.value)} />
                                </ProductTableCell>
                                <ProductTableCell>
                                    <input type="text" value={producto.descripcion} onChange={(e) => handleProductoChange(index, 'descripcion', e.target.value)} />
                                </ProductTableCell>
                                <ProductTableCell>
                                    <input type="number" value={producto.cantidad} onChange={(e) => handleProductoChange(index, 'cantidad', e.target.value)} />
                                </ProductTableCell>
                                <ProductTableCell>
                                    <input type="number" value={producto.valor_unitario} onChange={(e) => handleProductoChange(index, 'valor_unitario', e.target.value)} />
                                </ProductTableCell>
                                <ProductTableCell>
                                    <input type="number" value={producto.valor_total} readOnly />
                                </ProductTableCell>
                                <ProductTableCell>
                                    <button type="button" onClick={() => eliminarProducto(index)}>Eliminar</button>
                                </ProductTableCell>
                            </tr>
                        ))}
                    </tbody>
                </ProductTable>
                <br />
                {/* Total */}
                <ProductTable style={{ width: '40%', justifyContent: 'center', margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <ProductTableHeader>Total</ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ProductTableCell>
                                <input type="number" value={total} readOnly />
                            </ProductTableCell>
                        </tr>
                    </tbody>
                </ProductTable>
                <br />
                <button type="button" onClick={agregarProducto}>Agregar Producto</button>

                {/* Opciones de Pago */}
                <ProductTable>
                    <thead>
                        <tr>
                            <ProductTableHeader>Opciones de Pago</ProductTableHeader>
                            <ProductTableHeader>Tipo de Producto</ProductTableHeader>
                            <ProductTableHeader>Notas</ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                    <ProductTableCell>
                                <label>
                                    <input type="checkbox" checked={pagoContado} onChange={(e) => setPagoContado(e.target.checked)} />
                                    Pago Efectivo
                                </label>
                                <br />
                                <br />
                                <label>
                                    <input type="checkbox" checked={transferencia} onChange={(e) => setTransferencia(e.target.checked)} />
                                    Transferencia
                                </label>
                                </ProductTableCell>
                                <ProductTableCell>
                                <label>
                                    <input type="checkbox" checked={articulo} onChange= {(e) => setArticulo(e.target.checked)} />
                                    Artículo(s)
                                </label>
                                <br />
                                <br />
                                <label>
                                    <input type="checkbox" checked={servicio} onChange={(e) => setServicio(e.target.checked)} />
                                    Servicio(s)
                                </label>
                            </ProductTableCell>
                            <ProductTableCell>
                                <textarea value={nota} onChange={(e) => setNota(e.target.value)} rows="5" style={{ width: '100%' }} />
                            </ProductTableCell>
                        </tr>
                    </tbody>
                </ProductTable>
                <br />
                <Button type="submit">Crear Factura</Button>            
                </form>
        </FormContainer>
        </div>
    );
};

export default CrearFactura;