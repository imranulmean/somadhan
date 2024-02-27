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
  const [userProfile, setUserProfile]= useState(null);
  console.log(location);
  const menuClicked=(param)=>{
    navigate(param);
  }

  useEffect(()=>{
    
      const fetchUserProfile=async ()=>{
        const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_profiles?id=eq.${keycloak.subject}`);
        const data=await res.json();
        console.log(data[0]);
        setUserProfile(data[0]);
    }    
    fetchUserProfile();
  },[keycloak.authenticated]);

  return (
    // <Navbar className={`border-b-2 border-none ${location.pathname==="/" ? "bg-black" : ""}`}>
    <Navbar className='border-b-2'>
        {/* <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500 rounded-lg text-white'>
            Somadhan 
            </span>
        </Link> */}
        <Link to='/' className={`${path=='/' && 'text-blue-500' } self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white`}>
        <span className="flex flex-col items-center">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/>
              </svg>
              Home
            </span> 
        </Link>        
        <Link to='/inbox' className={`${path.includes('inbox') && 'text-blue-500' } self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white`}>
            <span className="flex flex-col items-center">
             <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8c0 .6.4 1 1 1h1v2a1 1 0 0 0 1.7.7L9.4 13H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4Z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M8 17.2h.1l2.1-2.2H15a3 3 0 0 0 3-3V8h2c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-1v2a1 1 0 0 1-1.7.7L14.6 18H9a1 1 0 0 1-1-.8Z" clip-rule="evenodd"/>
              </svg>
              
              Inbox
            </span>            
        </Link>
        <Link to='/askNow' className={`${path.includes('askNow') && 'text-blue-500' } self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white`}>
            <span className="flex flex-col items-center">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
              </svg>                
              Ask Now
            </span>            
        </Link>
        <Link to='/experts' className={`${path.includes('experts') && 'text-blue-500' } self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white`}>
            <span className="flex flex-col items-center">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
              </svg>              
              Experts
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
              <span className="block text-sm">{userProfile?.first_name}{" "}{userProfile?.last_name}</span>
              <span className="block truncate text-sm font-medium">{userProfile?.title}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={()=>menuClicked(`/profile/${keycloak.subject}`)}>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>My Benifits</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Privacy Policy</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item >How it Works</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item >Send Feedback</Dropdown.Item>
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
