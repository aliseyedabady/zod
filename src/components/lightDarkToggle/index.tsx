import "./style.scss";
const LightDarkToggle = () => {
  const clickHandler = () => document.documentElement.classList.toggle("dark");

  return (
    <div>
      <input
        type="checkbox"
        onClick={clickHandler}
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          data-icon="feather:sun"
          className="sun-icon iconify iconify--feather text-yellow-400"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          data-icon="feather:moon"
          className="moon-icon iconify iconify--feather text-white"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79"
          ></path>
        </svg>
        <span className="ball" />
      </label>
    </div>
  );
};

export default LightDarkToggle;
