import http from "../http-common";
import { ICard, IMailbox, IUsers } from "../types/Users";

const login = (body: IUsers) => {
  return http.post("/auth/login", body);
};

const getUser = () => {
  const headers = checkTocken();
  return http.get("/user", { headers });
};

const createMailbox = (data: IMailbox) => {
  const headers = checkTocken();
  return http.post("/mailbox", data, { headers });
};

const getMailbox = () => {
  const headers = checkTocken();
  return http.get("/mailbox", { headers });
};

const getMailboxbyId = (id: string) => {
  return http.get(`/mailbox/${id}`);
};

const createCard = (data: ICard) => {
  return http.post("/letter/card", data);
};

const getCardId = (id: string) => {
  return http.get(`/letter/card/${id}`);
};

const getCardByUser = (id: string) => {
  return http.get(`/letter/cards/${id}`);
};

const writeLetter = (data: any) => {
  return http.post("/letter", data);
};

const getLetter = (id: any) => {
  return http.get(`/letter/${id}`);
};

const getCardCount = () => {
  const headers = checkTocken();
  console.log(headers);
  return http.get(`/letter/card-counting`, { headers });
};

const checkTocken = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

const ApiService = {
  getUser,
  login,
  createMailbox,
  getMailbox,
  getMailboxbyId,
  createCard,
  getCardId,
  writeLetter,
  getCardByUser,
  getLetter,
  getCardCount,
};

export default ApiService;
