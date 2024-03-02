import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

export default function PrivateRoute() {
  const { keycloak, initialized } = useKeycloak();
  useEffect(() => {
    if (initialized && !keycloak.authenticated) {
        keycloak.login();
        // alert("Login to See These Options")
    }
  }, [!keycloak.authenticated]);

   return(
    <>
      {
        keycloak.authenticated && (<Outlet />)
      }
    </>
   ) 
}