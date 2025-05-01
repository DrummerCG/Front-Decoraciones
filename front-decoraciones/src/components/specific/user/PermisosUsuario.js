import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PermisosUsuario = () => {
    const { id } = useParams(); // ID del usuario
    const navigate = useNavigate();
    const [permisos, setPermisos] = useState([]);
    const [todosLosPermisos, setTodosLosPermisos] = useState([
        'gestionar_usuarios',
        'gestionar_inventario',
        'gestionar_pedidos',
        'gestionar_facturacion',
        'ver_informacion_personal',
    ]);

    useEffect(() => {
        // Cargar los permisos actuales del usuario
        const fetchPermisos = async () => {
            try {
                const response = await axios.get(`/api/usuarios/${id}/permisos`);
                setPermisos(response.data);
            } catch (error) {
                console.error('Error al cargar los permisos:', error);
            }
        };

        fetchPermisos();
    }, [id]);

    const handleTogglePermiso = (permiso) => {
        if (permisos.includes(permiso)) {
            setPermisos(permisos.filter((p) => p !== permiso));
        } else {
            setPermisos([...permisos, permiso]);
        }
    };

    const handleGuardar = async () => {
        try {
            await axios.put(`/api/usuarios/${id}/permisos`, { permisos });
            alert('Permisos actualizados correctamente');
            navigate('/users/lista');
        } catch (error) {
            console.error('Error al actualizar los permisos:', error);
            alert('Hubo un error al actualizar los permisos.');
        }
    };

    return (
        <div>
            <h2>Gestionar Permisos</h2>
            <ul>
                {todosLosPermisos.map((permiso) => (
                    <li key={permiso}>
                        <label>
                            <input
                                type="checkbox"
                                checked={permisos.includes(permiso)}
                                onChange={() => handleTogglePermiso(permiso)}
                            />
                            {permiso}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleGuardar}>Guardar Cambios</button>
            <button onClick={() => navigate('/users/lista')}>Cancelar</button>
        </div>
    );
};

export default PermisosUsuario;