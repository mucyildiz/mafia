import { useState } from 'react';

import axios from 'axios';

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet';
import { Google } from 'grommet-icons';

import AppBar from '../components/AppBar';

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return(
    <Box responsive align="center" full>
      <AppBar />

      <Box pad="xlarge" align="center">
        <Card basis="small" align="center" elevation="large" background="main">
          <CardHeader>
            <Box pad="small">
              <Text>Login</Text>
            </Box>
          </CardHeader>
          <CardBody pad="medium">
            <Text>To continue to the game, please log in with Google</Text>
          </CardBody>
          <CardFooter pad="medium">
            <Button primary reverse href='/auth/google' label="Login with Google" icon={<Google color='plain' />} />
          </CardFooter>
        </Card>
      </Box>

      <Text>{isAuthenticated}</Text>
    </Box>
  );
}