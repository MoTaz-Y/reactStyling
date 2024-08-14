import styled from "styled-components";
const StyledButton = () => {
  const Button = styled.button`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  `;
  return <Button>click me</Button>;
};

export default StyledButton;
