import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import santa from "../assets/santa_glasses.png";
import { IUsers } from "../types/Users";

const DecorationImg = styled.img`
  width: 50px;
  position: absolute;
  top: 55px;
  left: 54%;
  transform: translateX(-50%);
  z-index: 999;

  &.style {
    top: 179px;
  }
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

  &.style {
    top: 149px;
  }

  &.style {
    top: 149px;
  }
`;

let user: IUsers | any = localStorage.getItem("user");
user = JSON.parse(user);

const MailboxSvg = ({ color, is_click }: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (is_click) {
      navigate(`/letters/${user._id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: is_click ? "pointer" : "default" }}
    >
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
    </div>
  );
};

const MailboxImg = ({ deco, color, name, is_style, is_mymailbox }: any) => {
  return (
    <>
      <DecorationImg
        className={is_style ? "style" : ""}
        src={require(`../assets/decorations/${deco}.png`)}
      />
      <MailboxName className={is_style ? "style" : ""}>
        {name}'s mailbox
      </MailboxName>
      <MailboxSvg className="name" color={color} is_click={is_mymailbox} />
    </>
  );
};

export default MailboxImg;
