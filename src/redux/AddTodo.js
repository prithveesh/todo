import React from 'react'
import {connect} from 'react-redux';
import {actionAddTodo} from "./actions";

function AddTodo({onAddTodo}) {
  const [text, setText] = React.useState("");
  const onSubmit = () => {
    onAddTodo(text)
    setText("")
  }

  return <div>
    <input
      value={text}
      onChange={(e) => {
        setText(e.currentTarget.value)
      }}/>
    <button onClick={onSubmit}>Add</button>
  </div>

}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (text)=> {
      dispatch(actionAddTodo(text))
    }
  }
}

const returnWrapperFunction = connect(mapStateToProps, mapDispatchToProps)
export default returnWrapperFunction(AddTodo)

