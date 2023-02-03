import "./Nav.css";
import Button1 from "../Buttons/Button1";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <Button1 buttonText="Click meh" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
