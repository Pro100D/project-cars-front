import { addCar, deleteCar, editCar, getAllCars } from "api";
import { AddCarForm } from "components/AddCarForm/AddCarForm.1";
import { CarItem } from "components/CarItem/CarItem";
import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";

export type CarProps = {
  model: string;
  make: string;
  price: number;
  year: number;
  imageUrl: string;
  _id: string;
};

export const CarList = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    (async () => {
      setCars(await getAllCars());
    })();
  }, []);

  const handleInputChange = (e: FormEvent) => {
    const text = e.target as HTMLFormElement;
    setQuerySearch(text.value);
  };

  const filteredCars = cars.filter((car: CarProps) =>
    car.make.toLowerCase().includes(querySearch.toLowerCase())
  );

  useEffect(() => {
    const localStorageCarsCollection = JSON.stringify(cars);
    localStorage.setItem("collections-cars", localStorageCarsCollection);
  }, [cars]);

  const handleSubmitForm = (e: FormEvent) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();

    const newCar = {
      make: (form.elements.namedItem("make") as HTMLFormElement)?.value,
      model: (form.elements.namedItem("model") as HTMLFormElement)?.value,
      year: (form.elements.namedItem("year") as HTMLFormElement)?.value,
      price: (form.elements.namedItem("price") as HTMLFormElement)?.value,
      imageUrl: (form.elements.namedItem("image") as HTMLFormElement)?.files[0],
    };

    handleAddCar(newCar);

    setShowModal(false);
  };

  const handleAddCar = async (newCar: Partial<CarProps>) => {
    const response = await addCar(newCar);
    setCars((prevState) => [response, ...prevState]);
  };

  const handleDeleteCar = async (carId: string) => {
    await deleteCar(carId);
    const filteredCars = cars.filter((car: CarProps) => car._id !== carId);
    setCars(filteredCars);
  };

  const handleEditCar = async (e: FormEvent) => {
    const form = e.target as HTMLFormElement;

    e.preventDefault();

    const editedCar: CarProps = {
      make: (form.elements.namedItem("make") as HTMLFormElement)?.value,
      model: (form.elements.namedItem("model") as HTMLFormElement)?.value,
      year: (form.elements.namedItem("year") as HTMLFormElement)?.value,
      price: (form.elements.namedItem("price") as HTMLFormElement)?.value,
      imageUrl: (form.elements.namedItem("image") as HTMLFormElement)?.files[0],
      _id: form.dataset.carId,
    };

    try {
      const response = await editCar(editedCar);
      const findIndexEditTask = cars.findIndex((car: CarProps) => {
        return car._id === response._id;
      });
      setCars((prevState) =>
        prevState.toSpliced(findIndexEditTask, 1, response)
      );
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Sorted by Make"
        value={querySearch}
        onChange={handleInputChange}
        style={{ marginBottom: "50px" }}
      />
      {showModal ? (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add new car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddCarForm
              handleSubmit={handleSubmitForm}
              showModalForm={setShowModal}
            />
          </Modal.Body>
        </Modal>
      ) : (
        <Button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: "9",
          }}
          variant="primary"
          onClick={() => setShowModal(true)}
        >
          Add Car
        </Button>
      )}
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Car List</h2>
      <Container>
        <Row
          md={4}
          gap={5}
          style={{
            rowGap: "25px",
            columnGap: "15px",
            justifyContent: "center",
          }}
        >
          {filteredCars.map((car: CarProps) => (
            <CarItem
              key={car._id}
              car={car}
              functions={{ onDelete: handleDeleteCar, onEdit: handleEditCar }}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};
