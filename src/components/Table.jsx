import { ListGroup } from "react-bootstrap";

const Table = props => {
  const checkSelected = value => (value === props.selected ? "selected" : "");

  return (
    <>
      <ListGroup className="text-dark">
        <ListGroup.Item onClick={() => props.setSelected("First")} className={checkSelected("First")}>
          First
        </ListGroup.Item>
        <ListGroup.Item onClick={() => props.setSelected("Second")} className={checkSelected("Second")}>
          Second
        </ListGroup.Item>
        <ListGroup.Item onClick={() => props.setSelected("Third")} className={checkSelected("Third")}>
          Third
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">
        Local state is <strong>{props.selected || "null"}</strong>
      </p>
    </>
  );
};

export default Table;
