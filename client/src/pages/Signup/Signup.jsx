import React from 'react'
import "./signup.css"

const SignUp = () => {
    return (
        <div className='signup-formContainer'>
            <div className='fsi-container'>
                <div className='signupForm-Div'>
                    <div className='signUp-Div'>
                        <p>Don't have an Account?... <span className='signUptxt-span'>Sign-up</span> </p>

                        <div className='signUp-Welcome'>
                            <h3>Welcome to Alabasta...</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, inventore.</p>
                        </div>
                    </div>

                    <form className='signupForm'>
                        <input type="text" name="firstname" id="fname" placeholder='firstname' required></input>

                        <input type="text" name="lastname" id="lname" placeholder='last name' required></input>

                        <input type="text" name="username" id="username" placeholder='create username' required></input>

                        <input type="email" name="email" id="email" placeholder='email' required></input>

                        <input type="number" name="phone" id="phone" placeholder='phone'></input>

                        <input type="password" name="password" id="pswd" placeholder='Create password' required></input>

                        <input type="text" name="confirmPassword" id="cpswd" placeholder='Confirm password' required></input>

                        <button className='submitBtn'>Sign up</button>
                    </form>

                    <div className='signUp-design'>
                        <div className='circle1'></div>
                        <div className='horizontal-line1'></div>
                        <p className='or-signUp'>Or sign up with</p>
                        <div className='horizontal-line2'></div>
                        <div className='circle2'></div>
                    </div>

                    <div className='socialMedia-icons'>
                        <i class="fab fa-google-plus"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-github"></i>
                    </div>
                </div>

                <div className='sideInfo'>
                    <h3>Heading of Contents</h3>
                    <div className='contents'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias nesciunt dignissimos, consectetur deleniti, dicta delectus, similique natus voluptatem laudantium magnam. Deleniti, officiis aperiam dignissimos ad a quia laborum blanditiis. </p>
                    </div>

                    <div className='contentsB'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia illo eos suscipit dolore magni, fugit, numquam perferendis ad adipisci voluptates aspernatur, sunt iste. Minus mollitia quae officia quia! Repellat, velit.</p>
                    </div>

                    <button className='signIn-Btn'> Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
