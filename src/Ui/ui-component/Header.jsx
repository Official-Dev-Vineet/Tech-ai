import '../ui.css';
const Header = ({image,title,children}) => {
  return (
    <div className="header-container">
        <img src={image} alt="data-science and ai" />
        <div className="header-text">
            <h1 className="theme-text">{title}</h1>
            <p>
              {children}
            </p>
          </div>
    </div>
  )
}

export default Header