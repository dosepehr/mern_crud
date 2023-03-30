import UsersList from './components/UsersList';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
function App() {
    return (
        <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/add' element={<AddUser />} />
        </Routes>
    );
}

export default App;
