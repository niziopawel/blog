import Form from '../../../components/form'
import Button from '../../../components/button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddCommentForm.css'

function AddCommentForm() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [formErrors, setFormErrors] = useState({ email: '', content: '' })

  const handleEmailChange = e => setEmail(e.currentTarget.value)
  const handleContentChange = e => setContent(e.currentTarget.value)
  const handleCommentSave = e => {
    e.preventDefault()
    const isFormValid = validateForm()

    if (isFormValid) {
      clearForm()
    }
  }

  const clearForm = () => {
    setEmail('')
    setContent('')
    setFormErrors({ email: '', content: '' })
  }

  const validateForm = () => {
    let isFormValid
    const re = /^[^\s@]+@[^\s@]+$/

    if (!re.test(email)) {
      setFormErrors(formErrors => ({ ...formErrors, email: 'Email incorrect' }))
      isFormValid = false
    }
    if (content.trim().length < 5) {
      setFormErrors(formErrors => ({
        ...formErrors,
        content: 'Comment content must have atleast 5 characters.',
      }))
      isFormValid = false
    }
    return isFormValid
  }

  return (
    <div className="comments__add-comment">
      <Form>
        <Form.FormGroup>
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {formErrors.email && (
            <Form.ErrorMessage>{formErrors.email}</Form.ErrorMessage>
          )}
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="content">Content:</Form.Label>
          <Form.TextArea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            required
          />
          {formErrors.content && (
            <Form.ErrorMessage>{formErrors.content}</Form.ErrorMessage>
          )}
        </Form.FormGroup>
        <Button
          onClick={handleCommentSave}
          color="primary"
          disabled={!content.length || !email.length}
        >
          Save comment
        </Button>
      </Form>
    </div>
  )
}

export default AddCommentForm
