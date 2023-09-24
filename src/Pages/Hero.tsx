import styled from "styled-components";
import hero from "../assets/img12.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <LargeTxt>
            Supercharge Your Mobile Life with <span> HashIT!</span>{" "}
          </LargeTxt>
          <ImageHolder>
            <Img src={hero} />
          </ImageHolder>
          <TxtHolder>
            <Txt>
              Level up your mobile experience with Hashit! Send money, buy
              airtime, pay utilities, save, earn, learn, connect with friends,
              explore our vibrant marketplace, advertise your biz, and win
              exciting giveaways - all in one place.
            </Txt>
          </TxtHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Txt = styled.div`
  width: 60%;
  text-align: center;
  font-size: 16px;
  padding: 40px 0;

  @media screen and (max-width: 780px) {
    font-size: 15px;
    text-align: center;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const TxtHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LargeTxt = styled.div`
  width: 100%;
  padding: 40px 0;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  span {
    color: #ec5a24;
  }

  @media screen and (max-width: 780px) {
    text-align: center;
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  padding-top: 100px;
`;