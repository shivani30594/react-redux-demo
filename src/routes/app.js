import Users from '../containers/users/users'
import Posts from '../containers/posts/posts'
import Photos from '../containers/photos/photos'
// import Register from '../containers/Register'
// import ForgotPassword from "../containers/ForgotPassword";
// import passwordReset from "../containers/PasswordReset";
// import VerifyEmail from "../containers/VerifyEmail";

const appRoutes = [                   
    { path: "/", exact: true,name: "Homepage", icon: "pe-7s-graph", component: Users, title: ' 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet'},
    { path: "/posts", exact: true,name: "Homepage", icon: "pe-7s-graph", component: Posts, title: ' 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet'},
    { path: "/photos", exact: true,name: "Homepage", icon: "pe-7s-graph", component: Photos, title: ' 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet'},
    // { path: "/login",exact: false, name: "Login", icon: "pe-7s-graph", component: Login, title: 'Account Login - GCCH Crypto Exchange'},
    // { path: "/forgotpassword",exact: false, name: "ForgotPassword", icon: "pe-7s-graph", component: ForgotPassword, title: 'Forgot Password - GCCH Crypto Exchange'},
    // { path: "/password/reset/:token",exact: false, name: "Password Reset", icon: "pe-7s-graph", component: passwordReset, title: 'Password Reset - GCCH Crypto Exchange'},
    // { path: "/register",exact: false, name: "Register", icon: "pe-7s-graph", component: Register, title: 'Register New Account - GCCH Crypto Exchange'},    
    // { path: "/account/verify/token/:id",exact: false, name: "Password Reset", icon: "pe-7s-graph", component: VerifyEmail, title: 'Verify Email - GCCH Crypto Exchange'},
    // // { redirect: true, path:"/", to:"/", name: "Home" }
];

export default appRoutes;