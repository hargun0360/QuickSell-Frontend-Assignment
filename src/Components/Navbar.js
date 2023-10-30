import React, { useState } from "react";

const Navbar = ({grouping , setGrouping}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleChange = (event) => {
    setGrouping(event.target.value);
  }

  return (
    <div className="Navbar">
      <div className="dropdown-container">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
          <i className="bx bx-slider"></i>
          <div className="btn-txt">Display</div>
          <i className="bx bx-chevron-down"></i>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="Grouping">
              <label>Grouping</label>
              <select value={grouping} onChange={handleChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="Ordering">
              <label>Ordering</label>
              <select>
                <option value="Priority">Priority</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
