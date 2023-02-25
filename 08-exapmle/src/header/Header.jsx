import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerRigth">
        <h3>
          <span className="nuran">Nuran</span>
          Frontend Developer
        </h3>
      </div>
      <Nav/>
    </div>
  );
};

export default Header;
