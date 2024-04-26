import { Card } from "react-bootstrap";

function ProductPreview(props) {
    return (
        <Card>
            <Card.Img src={props?.product?.image}/>
            <Card.Body>
                <Card.Title>{props?.product?.nombre}</Card.Title>
                <Card.Text>
                    {props?.product?.description}
                </Card.Text>
            </Card.Body>
        </Card>


    );
}

export default ProductPreview;