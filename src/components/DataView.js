import styled from "@emotion/styled";
import React from "react";
import Title from "./Title";
import TodoList from "./TodoList";

const DataView = ({ todoList, onDelete }) => {
  return (
    <DataViewWrapStyle>
      <Title label="할 일 목록" />
      <TodoList todoList={todoList} onDelete={onDelete} />
    </DataViewWrapStyle>
  );
};

export default DataView;

const DataViewWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;
