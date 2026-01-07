import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

function ProductPreview(props) {
    return (
        <Card>
            <Card.Img src={props?.product?.image} />
            <Card.Body>
                <Card.Title>{props?.product?.name}</Card.Title>
                <Card.Text>
                    {props?.product?.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

ProductPreview.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductPreview;