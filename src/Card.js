import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CardStyle";
import {
  Container,
  Icon,
  Image,
  Info,
  Cards,
  Buttondiv,
  Button,
  Footer,
} from "./CardStyle";
import cw from "./assets/cw.svg";
import mail from "./assets/mail.svg";
import gman from "./assets/growing-up-man.svg";
import gwoman from "./assets/growing-up-woman.svg";
import map from "./assets/map.svg";
import phonesvg from "./assets/phone.svg";
import padlock from "./assets/padlock.svg";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";
import design from "./assets/design.svg";
import Tables from "./Table";

const Card = () => {
  const [user, setUser] = useState([]);
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const [addUser, setAddUser] = useState([]);

  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    await axios("https://randomuser.me/api/")
      .then((res) => res.data.results[0])
      .then((res) => setUser(res));

    setText("My name is");
    setInfo(name?.first + " " + name?.last);
  };

  const { gender, name, location, email, phone, picture, dob, login } = user;

  return (
    <Container>
      <img src={cw} />
      <Cards>
        <Image>
          <img src={picture?.large} alt="picture" />
        </Image>
        <Info>
          {text}
          <span>{info}</span>
        </Info>
        <Icon>
          <img
            onMouseOver={() => {
              setText("My name is");
              setInfo(name?.first + " " + name?.last);
            }}
            src={gender == "male" ? man : woman}
          />
          <img
            onMouseOver={() => {
              setText("My email is");
              setInfo(email);
            }}
            src={mail}
          />
          <img
            onMouseOver={() => {
              setText("My age is");
              setInfo(dob?.age);
            }}
            src={gender == "male" ? gman : gwoman}
          />
          <img
            onMouseOver={() => {
              setText("My location is");
              setInfo(location.country);
            }}
            src={map}
          />
          <img
            onMouseOver={() => {
              setText("My phone number is");
              setInfo(phone);
            }}
            src={phonesvg}
          />
          <img
            onMouseOver={() => {
              setText("My password is");
              setInfo(login?.password);
            }}
            src={padlock}
          />
        </Icon>
        <Buttondiv>
          <Button onClick={data}>NEW USER</Button>
          <Button
            onClick={() => {
              addUser.includes(user)
                ? alert("This User is already added !!!")
                : setAddUser([...addUser, user]);
              setText("My name is");
              setInfo(name?.first + " " + name?.last);
            }}
          >
            ADD USER
          </Button>
        </Buttondiv>
        <Tables addUser={addUser} />
      </Cards>
      <Footer>
        <p>BATIHAN</p>
        <img src={design} />
        <p>Design</p>
      </Footer>
    </Container>
  );
};

export default Card;
