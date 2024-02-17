import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

// NOTE: DropdownContext를 하위 컴포넌트에서 사용해야 하므로 export (OK)
export const useDropdown = () => useContext(DropdownContext);

// REVIEW: But Why DropdownProvider는 export?
// DropdownContext.Provider로 제공하고 있기 때문에 export하지 않아도 문제 없지 않나?
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
