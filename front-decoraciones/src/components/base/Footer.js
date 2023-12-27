import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sendWhatsapp = (selectedProduct) => {
    var link = "https://wa.me/{telefono}?text=Hola,%20¿cómo%20estás?%20quiero%20esta:%20{producto}";
    const telefono = "573002312301";
    link = link.replace("{telefono}", telefono).replace("{producto}", selectedProduct);
    window.open(link);
}

const Footer = (props) => {
    return (
        <div className='app-bg-complementary pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col-sm-2'>
                        <h5>Navegar</h5>
                        <ul className='list-unstyled'>
                          <li>
                            <Link to= "/">
                                <a style= {{ color: 'black' }}>inicio</a>
                            </Link>
                            </li> 
                            <li>
                            <Link to= "/">
                                <a style= {{ color: 'black' }}>catálogo</a>
                            </Link>
                            </li> 
                        </ul>

                    </div>

                </div>
                <div className='row'>

                </div>

            </div>

            <Button color="primary" onClick={() => sendWhatsapp("cortina kawaii")}>mandame un whats</Button>
        </div>
    )
}

export default Footer;