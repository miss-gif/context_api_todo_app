import styled from "@emotion/styled";
import DataView from "components/DataView";
import Title from "components/Title";
import TodoList from "components/TodoList";
import { useState } from "react";

const WrapStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

function App() {
  const [todoList, setTodoList] = useState(["a", "2", "f"]);

  const onDelete = todo => {
    setTodoList(todoList.filter(item => item !== todo));
  };

  return (
    <WrapStyle>
      <DataView todoList={todoList} onDelete={onDelete}></DataView>
    </WrapStyle>
  );
}

export default App;
