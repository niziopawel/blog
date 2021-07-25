import './Form.css'

function Form({ children, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.FormGroup = function FormGroup({ children }) {
  return <div className="form__form-group">{children}</div>
}

Form.Input = function FormInput({ children, ...restProps }) {
  return (
    <input className="form__input" {...restProps}>
      {children}
    </input>
  )
}

Form.Label = function FormLabel({ children, ...restProps }) {
  return (
    <label className="form__label" {...restProps}>
      {children}
    </label>
  )
}

Form.TextArea = function FormTextArea({ children, ...restProps }) {
  return (
    <textarea className="form__text-area" {...restProps}>
      {children}
    </textarea>
  )
}

Form.ErrorMessage = function FormErrorMessage({ children, ...restProps }) {
  return (
    <div className="form__error-message" {...restProps}>
      {children}
    </div>
  )
}

export default Form
