import Test from './test';
import { Route, Routes } from 'react-router-dom';


function App() {

    return (
        <>
        <Routes>
            <Route path='/' Component={Test} />
        </Routes>
        </>
    );
}

export default App;