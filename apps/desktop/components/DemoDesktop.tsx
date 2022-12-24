import cls from "./DemoDesktop.module.css";

const DemoDesktop = () => {
  return (
    <div
      className={cls.hero}
      style={{ backgroundImage: 'url("assets/background.png")' }}>
      <div className={cls.navbar}>
        <img src="./assets/logo.png" alt="logo" className={cls.logo} />
        <button type="button" className={cls["button-cls"]}>
          Sign Up
        </button>
      </div>
      <div className={cls.content}></div>
      <h1 className={cls["h1-cls"]}>
        Welcome to World's Creative Desktop Studio
      </h1>
      <button className={cls["button-cls"]} type="button">
        Take a tour
      </button>
    </div>
  );
};

export default DemoDesktop;
