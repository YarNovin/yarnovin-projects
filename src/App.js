import YarnovinProjectsIndex from "./components";
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Services from "./components/page/services";
import ContactUs from "./components/page/contact_us";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <YarnovinProjectsIndex />
    },
    {
        path: 'services',
        element: <Services />
    },
    {
        path: 'contact-us',
        element: <ContactUs />
    }
]);

function App() {
    return <RouterProvider router={Route} />
}

export default App;
