import React, {useState} from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const UserOptions = () => {
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/sign-in');
    }

    if (isLogged) {
        return (
            <div>
                <Button className='me-3' id='app-sign-in-button'> sign out </Button>
            </div>
        )
    }
    return (
        <>
            <Button className='me-3' id='app-sign-in-button' onClick={handleSignInClick}> Iniciar Sesión </Button>
            <Button id='app-sign-up-button' onClick={handleRegisterClick}> inscribirse </Button>
        </>
    )
}

export default UserOptions;