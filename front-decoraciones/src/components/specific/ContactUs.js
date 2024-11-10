import React from "react";

const ContactUs = () => {
    return(
        <div className="ContactUsContainer">
        <img className='imagenfondo'
             src="/oip.jpeg"
             alt="imagen de fondo" />
        <h1 className="Empresa">¿Quienes somos?</h1>
        <h6 className="DistribuidorO">Cortina tras cortina, tenemos ocultas muchas más cosas para tí...</h6>
        <button className="Button">Asesorías</button>
        </div>
    )
}

ContactUs.protoTypes = {};

export default ContactUs;