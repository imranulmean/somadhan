import React, { useEffect, useRef } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

export default function PrivateRoute() {
  const { keycloak, initialized } = useKeycloak();
  
  useEffect(() => {
    if (initialized && !keycloak.authenticated) {
        keycloak.login();
    }
  }, [initialized, keycloak]);

   return keycloak.authenticated && <Outlet /> ;
}