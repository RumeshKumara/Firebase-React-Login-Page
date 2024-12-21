import styled from 'styled-components';

const Login = () => {
    return (
        <>
          <LoginContainer>
            <BackImg>
               <img src="./img/bg.jpg" alt='background'/>
            </BackImg>

            <LoginForm>
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <a href="/">fogot password?</a>
              <LoginButton>
                <button type="submit">Login</button>
              </LoginButton>
            </LoginForm>
          </LoginContainer>
        </>
    )
}

export default Login;

const LoginContainer = styled.div`
overflow: hidden;
  `;

  const BackImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  `;
  
  const LoginForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  `;

  const LoginButton = styled.div`
  position: absolute;
  `;