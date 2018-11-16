import Config from 'react-native-config';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: Config.AUTH0_DOMAIN,
  clientId: Config.AUTH0_CLIENT_ID,
});

export default auth0;
