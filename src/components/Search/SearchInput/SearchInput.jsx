/* eslint-disable react/prop-types */
import "./SearchInput.css";

export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearSearch,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        value={searchInputValue}
        placeholder="Search here..."
        onChange={handleChange}
      />

      {searchInputValue && (
        <button type="button" onClick={clearSearch}>
          <img
            width="32px"
            height="32px"
            style={{ objectFit: "contain" }}
            src="https://logowik.com/content/uploads/images/close1437.jpg"
            alt="Clear search"
          />
        </button>
      )}
    </div>
  );
};
