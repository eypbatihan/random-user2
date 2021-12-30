import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    0deg,
    rgba(234, 246, 244, 1) 60%,
    rgba(253, 187, 45, 0.9054972330729166) 60%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
  }
`;

export const Cards = styled.div`
  width: 500px;
  height: fit-content;
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255) 76%,
    rgb(212, 194, 194) 77%,
    rgba(234, 246, 244, 1) 77%
  );
  padding: 10px;
  margin-top: 1rem;
  box-shadow: 0 0 5px 1px #282c3442;
`;
export const Image = styled.div`
  img {
    width: 100px;
    border-radius: 100%;
    box-shadow: 1px 3px 2px gray;
    border: thick double #f0f1f2;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  cursor: pointer;

  img {
    width: 25px;
    border-radius: 100%;
    box-shadow: 1px 3px 2px gray;
  }
`;
export const Buttondiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
`;
export const Button = styled.button`
  background: #8d4b8d;
  color: white;
  width: 100px;
  border-radius: 0.3rem;
  cursor: pointer;
  &: hover {
    background: #fdc241;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid;
  background: white;
  width: 80%;
  height: 1.5rem;
  border-radius: 0.3rem;
  img {
    width: 20px;
    border-radius: 100%;
    padding: 0 8px;
  }
`;
export const Tablediv = styled.div`
  width: 100%;
`;
export const Table = styled.table`
  width: 100%;
  background: white;
`;
export const TableTitle = styled.thead`
  width: 100%;
  background: #fdc241;
`;
export const TableBody = styled.tbody`
  width: 100%;
  background: #eaf6f4;
  font-size: 12px;
`;
