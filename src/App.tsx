import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import FetchData from './components/FetchData';


const App: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState('');

  const handleSearch = (category: string) => {
    setSearchCategory(category);
  };

  return (
    <div className="app">
      <SearchBox onSearch={handleSearch} />
      <FetchData category={searchCategory} />
    </div>
  );
};

export default App;
