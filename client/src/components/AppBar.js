import { useHistory } from 'react-router-dom';

import { Anchor, Box, Button, Header, Text } from 'grommet';

export default function AppBar() {
    const history = useHistory();

    return(
        <Header
            background="main" 
            pad="small"
            width="full"
            height="4em"
            style={{ position: "sticky", top: "0", zIndex: "1" }}
            responsive
        >
            <Box fill pad="small" align="center">
                <Anchor onClick={() => {history.push('/')}} color='mainText'>
                    <Text plain size="xlarge" weight="bold">Mafia Game</Text>
                </Anchor>
            </Box>

            {/* <Button secondary size="xsmall" label="About" onClick={() => alert('Created by Jeffrey Carr (https://github.com/jcarr98) and Alperen Yildiz (https://github.com/mucyildiz)')} /> */}
        </Header>
    );
}