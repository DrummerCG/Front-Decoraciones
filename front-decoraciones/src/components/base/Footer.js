import React from 'react';
import { Button } from 'reactstrap';

const sendWhatsapp = (selectedProduct) => {
    var link = "https://wa.me/{telefono}?text=Hola,%20¿cómo%20estás?%20quiero%20esta:%20{producto}";
    const telefono = "573002312301";
    link = link.replace("{telefono}", telefono).replace("{producto}", selectedProduct);
    window.open(link);
}

const Footer = (props) => {
    return (
        <div>
            <p>Footer {props.fecha}</p>
            <Button color="primary" onClick={() => sendWhatsapp("cortina kawaii")}>mandame un whats</Button>
        </div>
    )
}

export default Footer;