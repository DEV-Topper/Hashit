import { styled } from "styled-components";
import { GoPerson , GoMail } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Otherpage = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            Join the waitlist for <span>HashIT!</span>
          </Text>
          <Input>
            <Icon>
              <GoPerson />
            </Icon>
            <input type="text" name="" id="" placeholder="Full name" />
          </Input>
          <Input>
            <Icon>
              <GoMail />
            </Icon>
            <input type="text" name="" id="" placeholder="Email" />
          </Input>
          <Button>Get notified when HashIT is live</Button>
          <Iconss>
            <BsFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillLinkedin />
          </Iconss>
        </Wrapper>
      </Container>
    </div>
  );
};
export default Otherpage

const Icon = styled.p`
  font-size: 20px;
  padding-left: 15px;
`;
const Iconss = styled.p`
  width: 50%;
  height: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 25px;
`;
const Button = styled.div`
  width: 47%;
  height: 50px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1083px) {
    width: 300px;
    font-size: 10px;
    font-weight: 300;
    height: 50px;
  }
`;
const Input = styled.div`
  width: 47%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid black;

  input {
    flex: 1;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 780px) {
    width: 300px;
    height: 50px;
  }
`;
const Text = styled.h1`
  font-size: 49px;
  width: 50%;
  text-align: center;
  margin-top: 50px;

  span {
    color: #ec5a24;
  }

  @media screen and (max-width: 780px) {
    text-align: center;
    font-size: 39px;
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 60%;
  background-color: white;
  display: flex;
  justify-content: center;
`;