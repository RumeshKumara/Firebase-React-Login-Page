import styled from 'styled-components';

const Login = () => {
    return (
        <>
          <LoginContainer>
            <BackImg>
               <img src="./img/bg.jpg" alt='background'/>
            </BackImg>

            <LoginForm>
                <h1>User Login</h1>
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
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 200px;
  margin-left: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;

  h1{
    font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  }

  `;

  const LoginButton = styled.div`

  width: 100%;
  padding: 0.8rem;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  cursor: pointer;

  `;

 
 