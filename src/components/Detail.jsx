import { Alert } from "react-bootstrap";

const Detail = props => <Alert variant="success">{props.selected ? props.selected : "No value selected"}</Alert>;

export default Detail;
