import Button from "./Button";

const ShowInputButton = ({ show, onClick }) => {
  return (
    <div>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? undefined : "#304ffe"}
        onClick={onClick}
      />
    </div>
  );
};

export default ShowInputButton;
