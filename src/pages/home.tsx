import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../components/homeHeader";
import HomeSubHeader from "../components/homeSubHeader";
import Button from "../components/button";
import calendar from "../assets/calendar.png";
import ApiService from "../services/apiService";
import { useState, useEffect } from "react";
import { IMailbox, IUsers } from "../types/Users";
import moment from "moment";
import MailboxImg from "../components/mailboxImg";

const Wrapper = styled.div`
  height: 100vh;
  padding: 80px 25px 0px;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: 20px;
  width: 100%;
`;

const MailboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 30px;
`;

const Dday = styled.div`
  color: #fff;
  font-size: 36px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 25px;
  }
`;

let user: IUsers | any = localStorage.getItem("user");
user = JSON.parse(user);

const Home = () => {
  const initMailState = {
    id: "",
    name: "",
    user_id: "",
    mailbox_color: "",
    mailbox_decorations: "",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<IMailbox>(initMailState);
  const [count, setCount] = useState<Number>(0);

  const [isMyMailbox, setIsMyMailbox] = useState(false);

  const today = moment().format("YYYY-MM-DD");
  const christmas = moment("2023-12-25");
  const dday = christmas.diff(today, "days");

  const getMailboxbyId = (id: string) => {
    ApiService.getMailboxbyId(id)
      .then((response: any) => {
        if (response.data) setData(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getCardCount = () => {
    ApiService.getCardCount()
      .then((response: any) => {
        if (response.data) setCount(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleButtonClick = () => {
    if (isMyMailbox) {
      const currentUrl = window.location.href;
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert(
        "Your url has been copied. Share with your friends to receive letters! 💌😉"
      );
    } else {
      navigate(`/design/${data.user_id}`);
    }
  };

  useEffect(() => {
    if (id) getMailboxbyId(id);
  }, [id]);

  useEffect(() => {
    if (data.user_id === user?._id) {
      setIsMyMailbox(true);
    }
  }, [data, user]);

  useEffect(() => {
    getCardCount();
  }, [count]);

  return (
    <>
      <Wrapper>
        <HomeHeader count={count} isMyMailbox={isMyMailbox} name={data.name} />
        <HomeSubHeader isMyMailbox={isMyMailbox} />

        <MailboxWrapper>
          <Dday>
            <img src={calendar} /> D - {dday}
          </Dday>
          {data.mailbox_decorations ? (
            <MailboxImg
              is_mymailbox={isMyMailbox}
              is_style={true}
              deco={data.mailbox_decorations}
              color={data.mailbox_color}
              name={"jin"}
            />
          ) : (
            <></>
          )}

          <ButtonWrapper>
            <Button
              onClick={handleButtonClick}
              name={isMyMailbox ? "Share my Mailbox 📮" : "Write a Letter 💌"}
            />
          </ButtonWrapper>
        </MailboxWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
