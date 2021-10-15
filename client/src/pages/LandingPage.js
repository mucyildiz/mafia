import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, Text, TextInput } from 'grommet';
import { Group, User } from 'grommet-icons';

import { io } from 'socket.io-client';

import Axios from 'axios';

import AppBar from '../components/AppBar';

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

function LandingPage(props) {
  const [friendCode, setFriendCode] = useState([null]);
  const [redirect, setRedirect] = useState(false);
  const [gameId, setGameId] = useState([]);
  const [socket, setSocket] = useState({});

  // useEffect(() => {
  //   // Connect with server
  //   console.log("connecting");
  //   let socket = io('http://localhost:4000');
  //   socket.on('connect', () => {
  //     console.log(socket.connected());
  //   });
  // });

  function connect() {
    console.log("Connecting");
    let socket = io();
    socket.connect();
    socket.on('connect', () => {
      console.log(socket.connected());
    })
  }


  function createGame() {
    console.log("Creating game");
  }

  function joinGame() {
    console.log(`Joining game ${friendCode}`);
  }

  return (
    <Box full responsive align="center">
      <AppBar isAuthenticated={props.isAuthenticated}/>
      <Button onClick={connect} label="Try" />

      {/* Redirect for when the user wants to move on */}
      {redirect ? <Redirect to={{pathname: "/game/" + gameId, state: {id: gameId}}} /> : null}

      <Grid fill columns={{ size: "medium", count: "fit"}}>
        <ItemCard align="end" title="Host">
          <CardBody pad="small" align="center">
            <Box height="4em">
              <Text>Host your own game to play with friends</Text>
            </Box>
            
            <Group size="xlarge" />
          </CardBody>
          <CardFooter pad="small">
            <Button primary label="Play Now" onClick={createGame} />
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
            <Button primary label="Join" onClick={joinGame} />
          </CardFooter>
        </ItemCard>
      </Grid>
    </Box>
  );
}

export default LandingPage;