import { useNavigate } from "react-router-dom"
import { FormContainer, Header, LoginContainer, StledButton, StyledForm, StyledInput } from "./Login.style"


const Login = ({ setCurrentUser }) => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentUser("anthony")
        sessionStorage.setItem("user", "anthony")
        navigate(-1)
    }
  return (
      <LoginContainer>
          <FormContainer>
              <StyledForm onSubmit={handleSubmit}>
                  <Header>Login Here</Header>
                  <StyledInput type="text" placeholder="Username" required/>
                  <StyledInput type="password" placeholder="Password" required/>
                  <StledButton type="submit">Login</StledButton>
              </StyledForm>
          </FormContainer>
    </LoginContainer>
  )
}

export default Login