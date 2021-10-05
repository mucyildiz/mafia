import { useState } from 'react';

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, Text, TextInput } from 'grommet';
import { Group, User } from 'grommet-icons';

import AppBar from '../components/AppBar';
import { Link } from 'react-router-dom';

const ItemCard = props => {
  const [el, setEl] = useState(["small"]);

  return(
    <Box fill responsive align={props.align} pad="large">
      <Card 
        align="center" 
        background="main" 
        height="medium" 
        width="medium" 
        elevation={el}
        onMouseEnter={() => {setEl("xlarge")}}
        onMouseLeave={() => {setEl("none")}}
      >
        <CardHeader pad="medium">
          <Text size="xlarge" weight="bold">{props.title}</Text>
        </CardHeader>
        {props.children}
      </Card>
    </Box>
  );
}

function LandingPage() {
  const [friendCode, setFriendCode] = useState([null]);

  return (
    <Box full responsive align="center">
      <AppBar />

      <Grid fill columns={{ size: "medium", count: "fit"}}>
        <ItemCard align="end" title="Host">
          <CardBody pad="small" align="center">
            <Box height="4em">
              <Text>Host your own game to play with friends</Text>
            </Box>
            
            <Group size="xlarge" />
          </CardBody>
          <CardFooter pad="small">
            <Button primary label="Play Now" />
          </CardFooter>
        </ItemCard> 

        <ItemCard align="start" title="Join">
          <CardBody pad="small" align="center">
            <Box height="4em">
              <Text>Enter your friend's code and join their game</Text>
            </Box>
            <User size="xlarge" />
          </CardBody>
          <CardFooter pad="small">
            <TextInput 
              placeholder="Enter Code" 
              onChange={(event) => {setFriendCode(event.target.value)}}
            />
            <Button primary label="Join" onClick={() => alert("Joining game " + friendCode)} />
          </CardFooter>
        </ItemCard>
      </Grid>
    </Box>
  );
}

export default LandingPage;