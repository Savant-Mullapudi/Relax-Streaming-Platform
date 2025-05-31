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
      background: 'black', // Sidebar background color
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name} // Add unique key for each category
        className="category-btn"
        onClick={() => setselectedCategory(category.name)} // Corrected event handler
        style={{
          display: 'flex', // Align icon and text side by side
          alignItems: 'center', // Vertically align icon and text
          justifyContent: 'flex-start', // Align content to the left
          background: category.name === selectedCategory ? '#1890F1' : 'transparent', // Active category background
          color: '#FFF', // Text color
          border: 'none', // Remove button border
          borderRadius: '30px',
          outline: 'none', // Remove focus outline
          cursor: 'pointer', // Pointer cursor on hover
          padding: '10px 20px', // Adjust padding
          width: '100%', // Full width of the sidebar
          transition: 'background 0.3s', // Smooth hover effect
        }}
        onMouseOver={(e) => {
          const button = e.currentTarget; // Ensure the hover applies to the entire button
          if (category.name !== selectedCategory) {
            button.style.background = '#333'; // Highlight on hover (not active)
          }
        }}
        onMouseOut={(e) => {
          const button = e.currentTarget; // Ensure hover-out affects the entire button
          if (category.name !== selectedCategory) {
            button.style.background = 'transparent'; // Remove highlight
          }
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : '#1890F1', // Icon color logic
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
