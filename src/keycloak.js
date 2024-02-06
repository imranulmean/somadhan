import Keycloak from 'keycloak-js';

const keycloakConfig = {
  realm: 'public',
  clientId: 'webui',
  url: 'https://sso-24f4009b4204.edgeflare.io/',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;