import React from 'react'
import { Link } from 'react-router'

export const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <Link to='/corazon/presion-alta'>Presión alta</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
