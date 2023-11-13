import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => props.color};
  width: 100%;
  height: 270px;
  padding: 21px;
  .card-text {
    font-family: "EF_jejudoldam";
    color: white;
    font-size: 23px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 10px;
    }
  }
  .sticker {
    width: 140px;
    margin-top: 25px;

    &.tree {
      width: 70px;
    }

    &.small {
      width: 100px;
    }
  }
`;

const CardImg = ({ deco, color, sticker, text, onClick }: any) => {
  return (
    <>
      <Card onClick={onClick} color={color}>
        <div className="card-text">
          <img src={require(`../assets/decorations/${deco}.png`)} />
          {text}
        </div>
        <img
          className={`sticker ${
            sticker === "tree"
              ? "tree"
              : sticker === "santa_glasses" ||
                sticker === "santa2" ||
                sticker === "santa5"
              ? "small"
              : ""
          }`}
          src={require(`../assets/stickers/${sticker}.png`)}
        />
      </Card>
    </>
  );
};

export default CardImg;
