
import Home from './../Home/Home';
import Search from '../Pages/Search/Search';
import UploadCV from '../UploadCV/Upload';
import HeaderOnly from '../Component/Layout/HeaderOnly';
import Profile from '../Profile/Profile';


//public routers
const publicRouters = [
    {path: '/',component: Home},
    {path: '/search',component: Search},
    {path: '/profile',component: Profile},
    {path: '/uploadcv',component: UploadCV,layout: HeaderOnly},

]

const privateRouters = [

]

export {publicRouters,privateRouters}