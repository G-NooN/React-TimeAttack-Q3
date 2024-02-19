import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

// NOTE: DropdownContext를 하위 컴포넌트에서 사용해야 하므로 export (OK)
export const useDropdown = () => useContext(DropdownContext);

// NOTE: 모듈화를 위해 export
export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // dropdown의 open 상태
  const [selectedItem, setSelectedItem] = useState(null); // 선택한 item

  const toggleDropdown = () => setIsOpen(!isOpen); // dropdown의 open 상태 변경
  // item 선택
  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, selectedItem, toggleDropdown, selectItem }}>
      {children}
    </DropdownContext.Provider>
  );
};
