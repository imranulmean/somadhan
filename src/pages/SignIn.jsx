import { Button } from 'flowbite-react';
import { useKeycloak } from '@react-keycloak/web';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SignIn() {
  const { keycloak, initialized } = useKeycloak();
  const navigate= useNavigate();

  useEffect(()=>{
    if(keycloak.authenticated){
      navigate('/');
    }
  },[keycloak.authenticated])

  return (
      <div className='flex h-screen justify-center items-center'>
        <Button onClick={()=>keycloak.login()} className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
            Login To Continue
        </Button>
      </div>
        
  );
}