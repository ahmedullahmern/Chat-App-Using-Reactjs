// // src/SignUpPage.js

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f4f4f4;
// `;

// const Form = styled.form`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   margin-bottom: 1rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.8rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.8rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const LinkContainer = styled.div`
//   margin-top: 1rem;
//   text-align: center;
// `;

// const SignUpPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle sign-up logic here
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <Container>
//             <Form onSubmit={handleSubmit}>
//                 <Title>Sign Up</Title>
//                 <Input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <Input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <Button type="submit">Sign Up</Button>
//                 <LinkContainer>
//                     <p>Already have an account? <Link to="/login">Login</Link></p>
//                 </LinkContainer>
//             </Form>
//         </Container>
//     );
// };

// export default SignUpPage;
