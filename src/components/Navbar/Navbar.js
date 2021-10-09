import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__nav">
        <NavLink activeClassName="navbar__item-active" className="navbar__item" exact to="/">
          Today
        </NavLink>
        <NavLink activeClassName="navbar__item-active" className="navbar__item" exact to="/summary">
          Summary
        </NavLink>
      </div>
      <footer className="navbar__footer">
      </footer>
    </nav>
  )
}
