import React from "react";
import styled from "styled-components";
import avatar from "../avatar.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  background: #f3f4f8;
  color: #374049;
`;
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);
`;

const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-style: normal;
  margin-top: 50px;
  font-family: "Share Tech Mono", monospace;
`;

const ProfileWrap = styled.div`
  padding: 25px;
  text-align: center;

  .styledanchor {
    display: block;
    font-size: 14px;
    height: 50px;
    color: #9ca0a5;
    font-weight: 600;
    text-decoration: none;
    padding-top: 20px;

    &:hover {
      color: black;
    }
  }
`;

const ProfileImg = styled.div`
  width: 80px;
  margin: 0 auto 10px;
  display: block;
  .image {
    width: 100%;
  }
`;

const UlWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SideBar = ({ user, setLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <MainTitle>Expense Tracker</MainTitle>
          <ProfileWrap>
            <ProfileImg>
              <img src={avatar} className="image" />
            </ProfileImg>
            <h3>{user.name}</h3>
            <a href="#" className="styledanchor">
              Dashboard
            </a>
            <a href="#" className="styledanchor">
              Profile
            </a>
            <a href="#" className="styledanchor">
              Settings
            </a>
            <Link to="/signup" onClick={handleLogout} className="styledanchor">
              Logout
            </Link>
          </ProfileWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default SideBar;
