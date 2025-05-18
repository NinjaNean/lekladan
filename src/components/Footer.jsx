import { NavLink } from "react-router";

function Footer({ login }) {
  return (
    <footer>
      <section>
        <NavLink to={"/"} className="logo">
          Leklådan
        </NavLink>

        <div>
          <h2>Kontakta oss</h2>
          <p>leklada@hotmail.se</p>
          <p>031 01 23 34</p>
        </div>
      </section>
      <p>© 2025 Leklådan</p>

      <NavLink to="/login">
        <img src={login} alt="" />
      </NavLink>
    </footer>
  );
}

export default Footer;
