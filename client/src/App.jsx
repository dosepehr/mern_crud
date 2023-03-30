import { useState } from 'react';
import UsersList from './components/UsersList';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
function App() {
    const [user, setUser] = useState([]);

    return (
        <Routes>
            <Route
                path='/'
                element={<UsersList user={user} setUser={setUser} />}
            />
            <Route path='/add' element={<AddUser />} />
            <Route
                path='/edit'
                element={<EditUser user={user} setUser={setUser} />}
            />
        </Routes>
    );
}

export default App;
