import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: " 200px 20px",
      }}
    >
      <h1 style={{ textShadow: "7px 7px 6px rgba(75, 75, 129, 1)" }}>
        Discover Your Dream Car Today!
      </h1>
      <p>
        Welcome to [Your Company Name], where your journey to the perfect
        vehicle begins. Whether you're looking for a sleek sports car, a
        reliable family SUV, or a budget-friendly sedan, we've got you covered
        with our extensive and diverse inventory.
      </p>
      <NavLink
        to="/about"
        style={{
          backgroundColor: "#007BFF", // Синий цвет фона
          color: "white", // Белый цвет текста
          padding: "10px 20px", // Внутренние отступы
          fontSize: "16px", // Размер шрифта
          border: "none", // Без рамки
          borderRadius: "5px", // Скругленные углы
          cursor: "pointer", // Курсор указателя
          textDecoration: "none", // Без подчеркивания
          display: "inline-block", // Отображение в виде строки
          transition: "background-color 0.3s ease",
        }}
      >
        Learn More About Us
      </NavLink>
    </div>
  );
};
