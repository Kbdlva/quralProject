import MainPage from "../pages/MainPage";
import Price from "../pages/Price";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/main', component: <MainPage/>, export: true},
    {path: '/price', component: <Price/>, export: true},
    {path: '/faq', component: <FAQ/>, export: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, export: true},

]