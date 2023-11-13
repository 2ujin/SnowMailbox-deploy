import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift.png";
import Button from "../components/button";
import MailboxImg from "../components/mailboxImg";
import ApiService from "../services/apiService";
import { IMailbox } from "../types/Users";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding: 80px 25px 0px;
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 2.52px;
  b {
    color: #d23039;
  }
  margin-bottom: 50px;
`;

const GiftImg = styled.img`
  position: absolute;
  top: 50px;
  right: 0;
  width: 140px;
`;

const ItemWrapper = styled.div`
  margin-top: 30px;

  span {
    font-weight: 700;
    font-family: "GmarketSans";
  }

  input {
    margin-top: 10px;
    color: white;
  }
`;

const ColorWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const Color = styled.div<{ color?: string }>`
  width: 58px;
  height: 58px;
  border-radius: 50% 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  flex-shrink: 0;

  &.is_active {
    border: 4px solid white;
  }
`;

const DecoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Deco = styled.div`
  width: 90px;
  height: 95px;
  background-color: #f5f5f5;
  border-radius: 50% 50%;
  flex: auto;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }

  &.is_active {
    border: 4px solid #f2b243;
  }
`;

const MailboxWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  .img {
    width: 280px;
  }
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 20px;
`;

const DecorationImg = styled.img`
  width: 50px;
  position: absolute;
  top: 55px;
  left: 54%;
  transform: translateX(-50%);
  z-index: 999;
`;

const MailboxName = styled.div`
  color: white;
  font-family: "EF_jejudoldam";
  font-size: 16px;
  position: absolute;
  top: 25px;
  left: 54%;
  transform: translateX(-50%);
  z-index: 999;
`;

const MailboxSvg = ({ color }: any) => {
  return (
    <svg
      width="290"
      height="334"
      viewBox="0 0 290 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.5 181.096L40.5 1.09644H250.5C271.5 1.09641 289.5 29.5964 289.5 61.5964V173.074L71.5 181.096Z"
        fill={color}
      />
      <path
        d="M71.5 181.096L1 168.096L2 44.5963C2.5 24.0963 14 -3.40369 42 1.59629C60.6242 4.92202 72 32.5963 71.5 44.5963V181.096Z"
        fill={color}
        stroke="#4D4D4D"
        stroke-opacity="0.16"
      />
      <path d="M138 334V155H165V334H138Z" fill={color} />
      <path
        d="M10.4238 54.1357L10.5819 44.137L56.5762 44.8644L56.418 54.8631L10.4238 54.1357Z"
        fill="#676767"
        fill-opacity="0.23"
      />
    </svg>
  );
};

const Mailbox = () => {
  const navigate = useNavigate();
  const color_list = [
    "#C60000",
    "#730F13",
    "#4F8A3D",
    "#71372A",
    "#A2E2F0",
    "#F2B243",
  ];

  const deco_list = [
    "bell",
    "star",
    "christmas-ball",
    "snowflake",
    "wreath",
    "leaf",
    "ginger",
    "sock",
  ];

  const [name, setName] = useState("");
  const [selectedColor, setSelectedState] = useState(color_list[0]);
  const [selectedDeco, setDecoState] = useState(deco_list[0]);

  const handleSubmit = async () => {
    if (!name) {
      alert("Please fill name!");
    }

    const create: IMailbox = {
      name: name,
      mailbox_color: selectedColor,
      mailbox_decorations: selectedDeco,
    };

    await ApiService.createMailbox(create)
      .then((response) => {
        navigate(`/${response.data}`);
      })
      .catch((err) => alert("Something Wrong 😅" + JSON.stringify(err)));
  };

  return (
    <>
      <Wrapper>
        <Title>
          Make your <br /> own <b>Mailbox!</b>
        </Title>
        <GiftImg src={gift} />

        <ItemWrapper>
          <span>Name</span>
          <input
            maxLength={10}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </ItemWrapper>

        <ItemWrapper>
          <span>Color</span>
          <ColorWrapper>
            {color_list.map((color, index) => (
              <Color
                className={color === selectedColor ? "is_active" : ""}
                onClick={() => setSelectedState(color)}
                color={color}
                key={index}
              ></Color>
            ))}
          </ColorWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <span>Decorations</span>
          <DecoWrapper>
            {deco_list.map((name, index) => (
              <Deco
                key={index}
                onClick={() => setDecoState(name)}
                className={name === selectedDeco ? "is_active" : ""}
              >
                <img src={require(`../assets/decorations/${name}.png`)} />
              </Deco>
            ))}
          </DecoWrapper>
        </ItemWrapper>

        <MailboxWrapper>
          <MailboxImg deco={selectedDeco} color={selectedColor} name={name} />
        </MailboxWrapper>

        <ButtonWrapper>
          <Button onClick={handleSubmit} name="Next" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Mailbox;
