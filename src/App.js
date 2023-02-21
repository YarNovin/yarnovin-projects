import YarnovinProjectsIndex from "./components";
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Services from "./components/page/services";
import AboutUs from "./components/page/about";

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
        path: 'about',
        element: <AboutUs />
    }
]);

function App() {
    return <RouterProvider router={Route} />
}

export default App;
