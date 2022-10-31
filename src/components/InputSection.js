import style from "./InputSection.module.scss"

const InputSection = ({inputValues, onChange, onFormSubmit}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(JSON.stringify(inputValues))
  }

  return (
    <div className={style.Container}>
      <form id={"form"} onSubmit={onSubmit}>
        <div className={style.InputField}>
          <label htmlFor="inputOne">Text input 1: </label>
          <input 
            type={"text"} 
            id={"inputOne"} 
            name={"inputOne"}
            value={inputValues.inputOne}
            onChange={onChange}
            />
        </div>
        <div className={style.InputField}>
          <label htmlFor="inputTwo">Text input 2: </label>
          <input 
            type={"text"} 
            id={"inputTwo"} 
            name={"inputTwo"}
            value={inputValues.inputTwo}
            onChange={onChange}
            />
        </div>
        <div className={style.InputField}>
          <label htmlFor="checkboxOne">Checkbox 1: </label>
          <input 
            type={"checkbox"} 
            id={"checkboxOne"} 
            name={"checkboxOne"}
            onChange={onChange}
            checked={inputValues.checkboxOne}
            />
        </div>
        <div className={style.InputField}>
          <label htmlFor="checkboxTwo">Checkbox 2: </label>
          <input 
            type={"checkbox"} 
            id={"checkboxTwo"} 
            name={"checkboxTwo"}
            onChange={onChange}
            checked={inputValues.checkboxTwo}
            />
        </div>

        <div className={style.InputField}>
          <label htmlFor="radioOne">Radio 1: </label>
          <input 
            type={"radio"} 
            id={"radioOne"} 
            name={"radio"}
            onChange={onChange}
            value={"one"}
            checked={inputValues.radio === "one"}
            />
        </div>

        <div className={style.InputField}>
          <label htmlFor="radioTwo">Radio 2: </label>
          <input 
            type={"radio"} 
            id={"radioTwo"} 
            name={"radio"}
            onChange={onChange}
            value={"two"}
            checked={inputValues.radio === "two"}
            />
        </div>

        <div className={style.InputField}>
          <label htmlFor="radioThree">Radio 3: </label>
          <input 
            type={"radio"} 
            id={"radioThree"} 
            name={"radio"}
            onChange={onChange}
            value={"three"}
            checked={inputValues.radio === "three"}
            />
        </div>

        <select onChange={onChange} name={"selectedValue"} value={inputValues.selectedValue}>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>

      </form>

      <button type="submit" form="form">Submit</button>
    </div>
  );
}
 
export { InputSection };