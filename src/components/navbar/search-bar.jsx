import { useState } from "react";
import { Icon } from "../icon.jsx";
import { SearchModal } from "../../modals/search-modal.jsx";
import { CustomModal } from "../../modals/modal.jsx";

export function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="navbar-search">
        <input
          type="search"
          placeholder="Search"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <Icon name="search" />
      </div>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SearchModal />
      </CustomModal>
    </>
  );
}
