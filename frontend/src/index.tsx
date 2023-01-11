import ReactDOM from 'react-dom/client';
import {createBrowserRouter, BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import './index.css';
import SiteHeader from './components/Site/SiteHeader';
import SiteFooter from './components/Site/SiteFooter';
import Upload from './views/Upload/Upload';
import CrashTests from './views/Tests';
import Navigation from './components/Site/Navigation/Navigation';
import Profile from './views/Profile';
import './i18n';
import Tests from "./views/Tests";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Upload />,
    },
    {
        path: '/tests',
        element: <CrashTests />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
]);

root.render(
    <div style={{ margin: '10px' }}>
        <BrowserRouter>
            <SiteHeader />
            <Navigation/>
            <Routes>
                <Route path="/" element={<Upload/>}/>
                <Route path="/tests" element={<Tests/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Outlet/>
            <SiteFooter />
        </BrowserRouter>
    </div>
);
// {/*<RouterProvider router={router} />*/}