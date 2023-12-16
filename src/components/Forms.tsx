interface Props {
  inputType: string;
  key: string;
  handleSubmit: (input: String) => void;
}

function Forms({ inputType, key, handleSubmit }: Props) {
  return (
    <div className="mb-3 --bs-body-color-rgb">
      <label
        htmlFor={"input" + inputType.replace(/ /g, "") + "1"}
        className="form-label"
      >
        {inputType}
      </label>
      <input
        type={inputType === "Email Address" ? "email" : "password"}
        className="form-control"
        id={"input" + inputType.replace(/ /g, "") + "1"}
        aria-describedby={
          (inputType === "Email Address" ? "email" : "password") + "Help"
        }
      />
      <div
        id={(inputType === "Email Address" ? "email" : "password") + "Help"}
        className="form-text"
      >
        {inputType === "Email Address"
          ? "We'll never share your Email with anyone else."
          : "Never Share your Password with anyone"}
      </div>
    </div>
  );
}

export default Forms;
