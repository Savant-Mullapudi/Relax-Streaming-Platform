import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utilities/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
   return ( <Stack 
    direction = "row"
    alignItems = "center"
    p = {2}
    sx = {{position: 'sticky', background: 'black', top: 0, justifyContent: 'space-between'}}>
        <Link
        to="/"
        style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
        }}
        >
        <img src={logo} alt="logo" height={45} />
        <span
            style={{
            marginLeft: '8px',
            fontSize: '30px',
            color: '#1890F1',
            fontWeight: 'bold'
            }}
        >
            Relax
        </span>
        </Link>
        <SearchBar />

    </Stack>
   )
}

export default Navbar
