import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`;
const Announcement = () => <Container>Super deal! Free Shipping on over $50</Container>;

export default Announcement;
