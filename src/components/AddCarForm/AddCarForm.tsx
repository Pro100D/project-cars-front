import { CarProps } from "pages/CarList/CarList";
import { FormEvent, useState } from "react";
import { Button, Row, Form } from "react-bootstrap";

export const AddCarForm: React.FC<{
  car?: CarProps;
  handleSubmit: (e: FormEvent) => void;
  showModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ handleSubmit, car, showModalForm }) => {
  const [file, setFile] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
        showModalForm(false);
      }}
      data-car-id={car?._id}
    >
      <Row className="mb-3">
        <Form.Group as="col" controlId="make">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            required
            name="make"
            defaultValue={car?.make}
          />
        </Form.Group>

        <Form.Group as="col" controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            required
            name="model"
            defaultValue={car?.model}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as="col" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            required
            name="year"
            defaultValue={car?.year}
          />
        </Form.Group>

        <Form.Group as="col" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            required
            name="price"
            defaultValue={car?.price}
          />
        </Form.Group>

        <Form.Group as="col" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Button
        variant="secondary"
        onClick={() => showModalForm(false)}
        className="me-2"
      >
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Complete
      </Button>
    </Form>
  );
};
