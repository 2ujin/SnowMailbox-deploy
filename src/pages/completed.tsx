import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import santa from "../assets/santa.png";
import sock from "../assets/sock.png";
import Button from "../components/button";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const SnowmanImg = styled.img`
  width: 280px;
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 48px;
  padding: 0px 40px;
  margin-top: 40px;
  line-height: 60px;
  b {
    color: #d23039;
  }
`;

const SockImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
`;

const LoginBtn = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: white;
  color: #353535;
  text-align: center;
  width: 200px;
  margin-left: 40px;
  margin-top: 50px;
  cursor: pointer;
`;

const Desc = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 40px;
  letter-spacing: 1.12px;
`;

const ButtonWrapper = styled.div`
  width: 260px;
  margin-left: 40px;
  margin-top: 20px;
`;

const Completed = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <SnowmanImg src={santa} />
        <Title>
          Letter sent <br /> <b>Completed!</b>
        </Title>
        <Desc>
          Create your own mailbox <br />
          and receive Christmas letters!
        </Desc>
        <ButtonWrapper>
          <Button onClick={() => navigate("/")} name="Sign up" />
        </ButtonWrapper>
        <SockImg src={sock} />
      </Wrapper>
    </>
  );
};

export default Completed;
