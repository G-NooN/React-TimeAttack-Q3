import React from "react";
import { DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = () => {
  const { selectedItem, toggleDropdown } = useDropdown();

  return (
    <button onClick={toggleDropdown}>{selectedItem ? selectedItem : "Dropdown Button"}</button>
  );
};

const DropdownMenu = ({ items }) => {
  const { isOpen, toggleDropdown, selectItem } = useDropdown();

  if (!isOpen) return null;

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          onClick={() => {
            // 아이템 클릭 시
            selectItem(item); // (1) selected item : 클릭한 item
            toggleDropdown(); // (2) Dropdown 닫힘
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const Dropdown = ({ items }) => {
  return (
    <DropdownProvider>
      <div>
        <DropdownButton />
        <DropdownMenu items={items} />
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
