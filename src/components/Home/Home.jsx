import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAvaliableItems } from "../../redux/actions/action_items";
import { Container, Row, Col } from "react-bootstrap";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAvaliableItems());
  }, []);
  const itemsAvaliable = useSelector((state) => state.items.ItemsAvaliable);
  const display = itemsAvaliable.map((ele, index) => {
    return <Col key={index}>
      <p>{itemsAvaliable.name}</p>
    </Col>;
  });
  return (
    <Container>
      <Row>{display}</Row>
    </Container>
  );
}
