import axios from "axios";
import { CarProps } from "pages/CarList/CarList";

export const getAllCars = async () => {
  try {
    const { data } = await axios.get("/api/cars");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addCar = async (newCar: Partial<CarProps>) => {
  try {
    const { data } = await axios.post("/api/cars", newCar, {
      headers: { "content-type": "multipart/form-data" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCar = async (carId: string) => {
  try {
    await axios.delete(`/api/cars/${carId}`);
  } catch (error) {
    console.log(error);
  }
};

export const editCar = async ({
  _id,
  make,
  model,
  year,
  price,
  imageUrl,
}: CarProps) => {
  try {
    console.log(editCar);
    const { data } = await axios.patch(
      `/api/cars/${_id}`,
      {
        make,
        model,
        price,
        year,
        imageUrl,
      },
      {
        headers: { "content-type": "multipart/form-data" },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
