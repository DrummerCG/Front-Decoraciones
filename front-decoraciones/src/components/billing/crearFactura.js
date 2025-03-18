import React, { useState, useEffect } from 'react';
import { crearFactura, obtenerUltimaFactura } from './facturaService';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const CrearFactura = () => {
    const [clienteId, setClienteId] = useState('');
    const [productos, setProductos] = useState([{ producto_id: '', nombre: '', descripcion: '', cantidad: '', valor_unitario: '', valor_total: '' }]);
    const [facturaNumero, setFacturaNumero] = useState('000000');
    const [nit, setNit] = useState('');
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
    const [fechaVencimiento, setFechaVencimiento] = useState('');
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
    const [fechaRecibido, setFechaRecibido] = useState('');

    useEffect(() => {
        const fetchUltimaFactura = async () => {
            const ultimaFactura = await obtenerUltimaFactura();
            const nuevoNumero = ultimaFactura ? (parseInt(ultimaFactura.numero, 10) + 1).toString().padStart(6, '0') : '000001';
            setFacturaNumero(nuevoNumero);
        };
        fetchUltimaFactura();
    }, []);

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
        if (!response) {
            console.error('Error al crear la factura:', response);
            return;
        }
        else if (response.error) {
            console.error('Error al crear la factura: con response.error', response.error);
            return;
        }
        else {
            console.log('Factura creada:', response);
            // Incrementar el número de factura para la siguiente factura
            const nuevoNumero = (parseInt(facturaNumero, 10) + 1).toString().padStart(6, '0');
            setFacturaNumero(nuevoNumero);
        }
    };

    const handleProductoChange = (index, field, value) => {
        const newProductos = [...productos];
        newProductos[index][field] = value;
        if (field === 'cantidad' || field === 'valor_unitario') {
            const cantidad = newProductos[index].cantidad || 0;
            const valor_unitario = newProductos[index].valor_unitario || 0;
            newProductos[index].valor_total = cantidad * valor_unitario;
        }
        setProductos(newProductos);
        setTotal(newProductos.reduce((acc, producto) => acc + (producto.valor_total || 0), 0));
    };

    const agregarProducto = () => {
        setProductos([...productos, { producto_id: '', nombre: '', descripcion: '', cantidad: '', valor_unitario: '', valor_total: '' }]);
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormRow>
                    <FormGroup>
                        <label>Número de Factura:</label>
                        <input type="text" value={facturaNumero} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <label>NIT:</label>
                        <input type="text" value={nit} onChange={(e) => setNit(e.target.value)} />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <label>Fecha de Elaboración:</label>
                        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <label>Fecha de Vencimiento:</label>
                        <input type="date" value={fechaVencimiento} onChange={(e) => setFechaVencimiento(e.target.value)} />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <label>Cliente ID:</label>
                        <input type="text" value={clienteId} onChange={(e) => setClienteId(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <label>Teléfono:</label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <label>Correo Electrónico:</label>
                        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <label>Nombre del Vendedor:</label>
                        <input type="text" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <label>Nombre del Comprador:</label>
                        <input type="text" value={comprador} onChange={(e) => setComprador(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <label>Dirección:</label>
                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <label>Ciudad:</label>
                        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </FormGroup>

                </FormRow>
                {productos.map((producto, index) => (
                    <div key={index}>
                        <FormRow>
                            <FormGroup>
                                <label>Producto ID:</label>
                                <input type="text" value={producto.producto_id} onChange={(e) => handleProductoChange(index, 'producto_id', e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label>Nombre del Producto:</label>
                                <input type="text" value={producto.nombre} onChange={(e) => handleProductoChange(index, 'nombre', e.target.value)} />
                            </FormGroup>
                        </FormRow>
                        <FormRow>
                            <FormGroup>
                                <label>Descripción del Producto:</label>
                                <input type="text" value={producto.descripcion} onChange={(e) => handleProductoChange(index, 'descripcion', e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label>Cantidad:</label>
                                <input type="number" value={producto.cantidad} onChange={(e) => handleProductoChange(index, 'cantidad', e.target.value)} />
                            </FormGroup>
                        </FormRow>
                        <FormRow>
                            <FormGroup>
                                <p>Forma de Pago:</p>
                                <label>Efectivo</label>
                                <input type="checkbox" checked={pagoContado} onChange={(e) => setPagoContado(e.target.checked)} />
                                <label>Transferencia</label>
                                <input type="checkbox" checked={transferencia} onChange={(e) => setTransferencia(e.target.checked)} />
                            </FormGroup>
                            <FormGroup>
                                <p>Tipo de Producto:</p>
                                <label>Artículo(s)</label>
                                <input type="checkbox" checked={articulo} onChange={(e) => setArticulo(e.target.checked)} />
                                <label>Servicio(s)</label>
                                <input type="checkbox" checked={servicio} onChange={(e) => setServicio(e.target.checked)} />
                            </FormGroup>
                        </FormRow>
                        <button type="button" onClick={agregarProducto}>Agregar Producto</button>
                        <br />
                        <br />
                        <FormRow>
                            <FormGroup>
                                <label>Valor Unitario:</label>
                                <input type="number" value={producto.valor_unitario} onChange={(e) => handleProductoChange(index, 'valor_unitario', e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label>Valor Total:</label>
                                <input type="number" value={producto.valor_total} readOnly />
                            </FormGroup>
                            <FormGroup>
                                <label>Total:</label>
                                <input type="number" value={total} readOnly />
                            </FormGroup>
                        </FormRow>
                    </div>
                ))}
                <FormRow>
                    <FormGroup>
                        <label>Fecha de Recibido:</label>
                        <input type="date" value={fechaRecibido} onChange={(e) => setFechaRecibido(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <label>Nota:</label>
                        <textarea value={nota} onChange={(e) => setNota(e.target.value)} />
                    </FormGroup>
                </FormRow>
                <button type="submit">Crear Factura</button>
                <p>Que viva el metal</p>
            </form>
        </FormContainer>
    );
};

export default CrearFactura;