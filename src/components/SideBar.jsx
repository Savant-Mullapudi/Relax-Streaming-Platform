import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilities/constants';

const SideBar = ({ selectedCategory, setselectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
      background: 'black',
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name} 
        className="category-btn"
        onClick={() => setselectedCategory(category.name)} 
        style={{
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'flex-start', 
          background: category.name === selectedCategory ? '#1890F1' : 'transparent', 
          color: '#FFF',
          border: 'none',
          borderRadius: '30px',
          outline: 'none', 
          cursor: 'pointer', 
          padding: '10px 20px', 
          width: '100%',
          transition: 'background 0.3s', 
        }}
        onMouseOver={(e) => {
          const button = e.currentTarget; 
          if (category.name !== selectedCategory) {
            button.style.background = '#333'; 
          }
        }}
        onMouseOut={(e) => {
          const button = e.currentTarget; 
          if (category.name !== selectedCategory) {
            button.style.background = 'transparent'; 
          }
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : '#1890F1',
            marginRight: '15px',
            fontSize: '18px',
          }}
        >
          {category.icon}
        </span>
        <span style={{ fontSize: '16px' }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
