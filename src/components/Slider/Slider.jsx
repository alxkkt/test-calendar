import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <div style={{ display: "flex" }}>
      <button>&#60;</button>
      <p>Month / Year</p>
      <button>&#62;</button>
    </div>
  );
};

export default Slider;
