import { useEffect, useState } from 'react';

import { Box, Button, Card, CardHeader, CardBody, CardFooter, Header, Text } from 'grommet';

import axios from 'axios';

function LandingPage() {
  const colors = ["blue", "red", "green"]
  const [currentColor, setCurrentColor] = useState([0]);
  const [servMessage, setServMessage] = useState([""]);

  const fetchData = async () => {
    const test = await axios.get("/api/test");
    const data = await test.data;
    setServMessage(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  function changeColor() {
    let current = currentColor;

    current = (current + 1) % colors.length;

    setCurrentColor(current);
  }

  return (
    <Box full responsive align="center">
      <Header background={colors[currentColor]} fill align="center">
        <Button onClick={() => changeColor()} label="Change color" />
        <Text>This is the header</Text>
      </Header>

      <Box pad="large">
        <Card background="light-1" height="medium" width="medium" align="center" gap="large">
          <CardHeader pad="small">Login</CardHeader>
          <CardBody align="center">This is an example login card</CardBody>
          <CardFooter pad="medium">
            <Button primary onClick={() => {alert("Logged in!")}} label="Login" />
          </CardFooter>
        </Card>
      </Box>

      <Box>
        Message from server: {servMessage ? servMessage : "None"}
      </Box>
    </Box>
  );
}

export default LandingPage;