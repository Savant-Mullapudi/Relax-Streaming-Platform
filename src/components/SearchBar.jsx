import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        pl: 2,
        backgroundColor: '#1E1E1E',
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
        margin: '0 auto',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          background: 'none',
          border: 'none',
          outline: 'none',
          color: 'white',
          fontSize: '16px',
        }}
      />

      {searchTerm && (
        <IconButton onClick={() => setSearchTerm('')} sx={{ p: '10px', color: 'gray' }}>
          <CloseIcon />
        </IconButton>
      )}

      <IconButton type="submit" sx={{ p: '10px', color: '#1890F1' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
