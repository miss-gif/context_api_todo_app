import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  border: 0;
  color: #fff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ onClick }) => {
  return <ButtonStyle onClick={onClick}>삭제</ButtonStyle>;
};

export default Button;
