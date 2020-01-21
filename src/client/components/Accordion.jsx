import React, { useState } from 'react';
import classnames from 'classnames';
import './Accordian.scss';

const Accordian = ({ title, open, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div className={classnames('card is-accordian', { 'is-open': isOpen })}>
      <header className="card-header" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <div className="card-header-title">{title}</div>
        <a className="card-header-icon" aria-label="more options">
          <span className="icon material-icons">
            <i aria-hidden="true">{isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
          </span>
        </a>
      </header>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Accordian;
