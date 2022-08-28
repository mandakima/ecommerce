import styled from "styled-components"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;`

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content center;:
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: black;
    transition: all 0.5s ease;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem