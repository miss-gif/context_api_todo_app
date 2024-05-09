import styled from "@emotion/styled";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onDelete }) => {
  return (
    <TodoListStyle>
      {todoList.map(todo => (
        <TodoItem key={todo} label={todo} onDelete={() => onDelete(todo)} />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;

const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
