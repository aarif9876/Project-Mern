import React from "react";
import * as Components from './Component'
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const [signIn, toggle] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [name, setName] = React.useState(''); 

    const handleSignUp = () => {
      console.log(password, confirmPassword); 
     if(!name || !password || !confirmPassword)
     {
      alert("Please enter all fields")
      return;
     }
      if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
      }
     
      toggle(true);
  }
    const navigate=useNavigate()
  const handleLogin=()=>
  {
    alert("Enjoy your Game!!")
    navigate("/Welcome")
  }
    return(
      <body className="signbody">
      
      <Components.Container className="Signupcontainer">
     
      {signIn ? (
        <Components.SignInContainer signinIn={signIn} name={name}> 
                    <Components.Form>
                        <Components.Title>Hey {name}!!</Components.Title> 
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Anchor href='https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={handleLogin}>LOGIN</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
            ) : (
                <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' onChange={e => setName(e.target.value)} /> {/* New onChange handler */}
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' onChange={e => { setPassword(e.target.value); console.log(e.target.value); }} />
                        <Components.Input type='password' placeholder='Confirm Password' onChange={e => { setConfirmPassword(e.target.value); console.log(e.target.value); }} />
                        <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
                        </Components.Form>
                        </Components.SignUpContainer>
                        )}

                        <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Get Started!</Components.Title>
                    <Components.Paragraph>
                            Login to start your game 
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                            LOGIN
                        </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        
                        <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Champ</Components.Title>
                        <Components.Paragraph>
                        start your gaming journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                        Sign Up
                        </Components.GhostButton> 
                        </Components.RightOverlayPanel>
                        </Components.Overlay>
                        </Components.OverlayContainer>
                        </Components.Container>
                   
                        </body>
                        
                        )
  }

export default SignupForm;