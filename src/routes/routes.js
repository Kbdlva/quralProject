import MainPage from "../pages/MainPage";
import Price from "../pages/Price";
import FAQ from "../pages/FAQ";

export const routes = [
    {path: '/main', component: <MainPage/>, export: true},
    {path: '/price', component: <Price/>, export: true},
    {path: '/faq', component: <FAQ/>, export: true},
]