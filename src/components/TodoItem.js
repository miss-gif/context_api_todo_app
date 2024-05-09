import styled from "@emotion/styled";
import Button from "./Button";

const TodoItem = ({ label, onDelete }) => {
  return (
    <TodoItemWrapStyle>
      <LabelStyle>{label}</LabelStyle>
      <Button label={label} onClick={onDelete} />
    </TodoItemWrapStyle>
  );
};

export default TodoItem;

const TodoItemWrapStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const LabelStyle = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;
