import style from "./OutputSection.module.scss"

const OutputSection = ({formData}) => {

  const renderData = () => {
    if (formData) return null;
    const formObject = JSON.parse(formData);

    const items = Object.entries(formObject).map(val => {
      return <p key={val[0]}>{val[0]}: {String(val[1])}</p>
    })

    return items
  }

  return <div className={style.Container}>{renderData()}</div>;
}
 
export { OutputSection };