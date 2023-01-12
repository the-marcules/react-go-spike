import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import './style/index.css';
import SiteHeader from './components/Site/SiteHeader';
import SiteFooter from './components/Site/SiteFooter';
import Upload from './views/Upload/Upload';
import Navigation from './components/Site/Navigation/Navigation';
import Profile from './views/Profile';
import './i18n';
import Tests from "./views/Tests";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <div>
        <BrowserRouter>
            <SiteHeader />


            <div className='mainBody'>
                <div className="left"></div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Upload/>}/>
                        <Route path="/tests" element={<Tests/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>
                <div className="right"></div>
            </div>


            <SiteFooter />
        </BrowserRouter>
    </div>
);
// {/*<RouterProvider router={router} />*/}