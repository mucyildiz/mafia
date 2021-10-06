import { useHistory } from 'react-router-dom';

import { Anchor, Box, Header, Text } from 'grommet';

export default function AppBar(props) {
    const history = useHistory();

    return(
        <Header
            background="main" 
            pad="small"
            width="full"
            height="4em"
            style={{ position: "sticky", top: "0", zIndex: "1" }}
            display="flex"
            align="center"
            responsive
        >
            <Box fill pad="small">
                <Anchor onClick={() => {history.push('/')}} color='mainText'>
                    <Text plain size="xlarge" weight="bold">Mafia Game</Text>
                </Anchor>
            </Box>
            <Box pad="small">
                <Anchor href="/api/logout" color='mainText'>
                    <Text plain size="medium" weight="bold">{props.isAuthenticated && 'Logout'}</Text>
                </Anchor>  
            </Box>

            {/* <Button secondary size="xsmall" label="About" onClick={() => alert('Created by Jeffrey Carr (https://github.com/jcarr98) and Alperen Yildiz (https://github.com/mucyildiz)')} /> */}
        </Header>
    );
}