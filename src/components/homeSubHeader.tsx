import styled from "styled-components";
import snowman from "../assets/snowman.png";

const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;
`;

const HeaderWrapper = styled.div`
  border-radius: 14px;
  background: rgba(36, 82, 36, 0.62);
  color: #d9b559;
  font-size: 14px;
  letter-spacing: 1.96px;
  line-height: 23px;
  padding: 10px 20px;
  text-align: right;
  b {
    color: #d23039;
  }

  &.center {
    text-align: center;
  }
`;

const SantaWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 23px;
  background: #419c55;
  position: absolute;
  top: -30px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
`;

const HomeSubHeader = ({ isMyMailbox }: any) => {
  return (
    <Wrapper>
      <HeaderWrapper className={!isMyMailbox ? "center" : ""}>
        {isMyMailbox ? (
          <>
            You can read the received message <br />
            <b> on December 25th</b>
          </>
        ) : (
          <>
            You can send an exciting <br />
            <b>Christmas letter!</b>
          </>
        )}
      </HeaderWrapper>
      <SantaWrapper>
        <img src={snowman} />
      </SantaWrapper>
    </Wrapper>
  );
};

export default HomeSubHeader;
