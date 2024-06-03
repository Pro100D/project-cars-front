import { AddCarForm } from "components/AddCarForm/AddCarForm.1";
import { CarProps } from "pages/CarList/CarList";
import { FormEvent, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export const CarItem: React.FC<{
  car: CarProps;
  functions: {
    onDelete: (id: string) => void;
    onEdit: (e: FormEvent) => Promise<void>;
  };
}> = ({ car, functions: { onDelete, onEdit } }) => {
  const [isRefactoring, setIsRefactoring] = useState(false);

  return (
    <>
      {isRefactoring ? (
        <Modal show={isRefactoring} onHide={() => setIsRefactoring(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Refactoring</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddCarForm
              car={car}
              handleSubmit={onEdit}
              showModalForm={setIsRefactoring}
            />
          </Modal.Body>
        </Modal>
      ) : (
        <Card style={{ width: "18rem", padding: "0" }}>
          <Card.Img
            variant="top"
            src={`http://localhost:3030/${car.imageUrl}`}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{car.make}</Card.Title>
            <Card.Text>Model: {car.model}</Card.Text>
            <Card.Text>Year: {car.year}</Card.Text>
            <Card.Text>Price: {car.price}</Card.Text>

            {!isRefactoring && (
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="primary"
                  onClick={() => setIsRefactoring(true)}
                >
                  Refactor info
                </Button>
                <Button variant="danger" onClick={() => onDelete(car._id)}>
                  Delete
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
};
