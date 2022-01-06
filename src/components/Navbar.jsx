import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import styled from 'styled-components';

// Container Style
const Container = styled.section`
    /* height: 60px; */
`;
// Wrapper Style
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
// Left Style
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
// Language
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
`;

// ----------------------------
// Center Style
const Logo = styled.h1`
    font-weight: bold;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
// Right Style
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
`;

const Navbar = () => (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{ color: 'grey', fontSize: '16px' }} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Logo.</Logo>
            </Center>
            <Right>
                <MenuItems>Register</MenuItems>
                <MenuItems>Sign In</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItems>
            </Right>
        </Wrapper>
    </Container>
);

export default Navbar;
