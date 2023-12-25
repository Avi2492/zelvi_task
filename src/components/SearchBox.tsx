
import React, { useState } from 'react';

interface SearchBoxProps {
  onSearch: (category: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch(category);
  };

  return (
    
    <div className="flex items-center justify-center h-full">
  <div className="flex w-full md:w-1/3">
    <input
      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 m-2"
      type="text"
      placeholder="Search by category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    />
    <button
      type="button"
      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline m-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
</div>

  );
};

export default SearchBox;
