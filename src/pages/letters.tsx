import { resolve } from "path";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import gift from "../assets/hand_gift_a.png";
import CardImg from "../components/cardImg";
import ApiService from "../services/apiService";
import { ICard } from "../types/Users";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 80px 25px 0px;
  overflow-y: scroll;
`;

const Title = styled.div`
  color: #fff;
  font-size: 36px;

  margin-bottom: 60px;
`;

const Gift = styled.img`
  width: 75px;
  position: absolute;
  top: 60px;
  right: 30px;
`;

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
  margin-bottom: 15px;
  cursor: pointer;
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

const Letters = () => {
  const { id } = useParams();
  const [cards, setCards] = useState<ICard[]>([]);
  const navigate = useNavigate();

  const getMailboxbyId = (id: string) => {
    ApiService.getCardByUser(id)
      .then((response: any) => {
        if (response.data) setCards(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id) getMailboxbyId(id);
  }, [id]);

  return (
    <>
      <Wrapper>
        <Title>Received </Title>
        <Gift src={gift} />
        {cards.length > 0 ? (
          cards.map((card: ICard) => (
            <CardImg
              onClick={() => navigate(`/detail/${card._id}`)}
              color={card.card_color}
              deco={card.card_deco}
              text={card.card_text}
              sticker={card.card_sticker}
            />
          ))
        ) : (
          <>You haven't received any letters yet</>
        )}
      </Wrapper>
    </>
  );
};

export default Letters;
