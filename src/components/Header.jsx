import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun, FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const { keycloak, initialized } = useKeycloak();

  const menuClicked=(param)=>{
    navigate(param);
  }

  return (
    <Navbar className='border-b-2'>
        <Link
            to='/'
            className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
        >
            <span className='px-2 py-1 bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500 rounded-lg text-white'>
            Somadhan 
            </span>            
        </Link>
        {/* <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='inline'
        />
      </form>              */}
      {/* <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button> */}
    
      <div className="flex md:order-2">
        {
          keycloak.authenticated ? 
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={()=>menuClicked(`/profile/${keycloak.subject}`)}>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>keycloak.logout()}>Sign out</Dropdown.Item>
          </Dropdown>
          :
          <Button onClick={()=>keycloak.login()} className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-1 py-1 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
            Login
          </Button>
        }


      </div>     
     </Navbar>   
    
  );
}
