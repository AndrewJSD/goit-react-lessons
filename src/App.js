import './App.css';
import React from "react";
import style from "./App.module.scss"
import { InputSection } from './components/InputSection';
import { OutputSection } from './components/OutputSection';

const defaultValues = {
  inputOne:"",
  inputTwo:"",
  checkboxOne: false,
  checkboxTwo: true,
  radio: "one",
  selectedValue: "lime",
}
class App extends React.Component {
  state = {
    inputValues: {
      ...defaultValues
    },
  formData: ""
  }

  onFormSubmit = (serializedData) => {
    this.setState({formData: serializedData})
    this.setState({
      inputValues: {
        ...defaultValues
      },
    })
  }

  onInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldType = e.target.type;

    const getValue = () => {
      switch(fieldType) {
        case "checkbox":
          return e.target.checked;
        case "radio":
          return e.target.value;
        case "text":
          default:
          return e.target.value;
      }
    };
    
    this.setState({
      inputValues: {
        ...this.state.inputValues,
        [fieldName]: getValue(),
      }
    })
  }

  render() {
    return (
      <div className={style.Wrapper}>
        <InputSection 
          inputValues={this.state.inputValues} 
          onFormSubmit={this.onFormSubmit}
          onChange={this.onInputChange}
          />
        <OutputSection formData={this.state.formData}/>
      </div>
    )

  }
}

export default App;