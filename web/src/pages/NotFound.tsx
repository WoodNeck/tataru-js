import "./NotFound.css";

const NotFound = () => (
  <div className="not-found-container">
    <svg className="not-found-icon">
      <use xlinkHref={`${process.env.PUBLIC_URL}/icons/warn.svg#icon`} />
    </svg>
    <span>404 Not Found</span>
  </div>
);

export default NotFound;