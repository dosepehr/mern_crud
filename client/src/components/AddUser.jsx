import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const inputChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', user);
        navigate('/');
    };
    return (
        <div>
            <form
                action=''
                className='space-y-4'
                onSubmit={(e) => submitHandler(e)}
            >
                <div className='space-x-3'>
                    <input
                        placeholder='نام'
                        type='text'
                        className='border-pink-400 border-2'
                        name='name'
                        onChange={(e) => inputChangeHandler(e)}
                    />
                </div>
                <div className='space-x-3'>
                    <input
                        placeholder='ایمیل'
                        type='text'
                        className='border-pink-400 border-2'
                        name='email'
                        onChange={(e) => inputChangeHandler(e)}
                    />
                </div>
                <div>
                    <select
                        onChange={(e) => inputChangeHandler(e)}
                        name='gender'
                        id=''
                        className='px-10 border-2 border-pink-400'
                    >
                        <option>جنسیت</option>
                        <option value='male'>مرد</option>
                        <option value='female'>زن</option>
                    </select>
                </div>
                <button
                    type='submit'
                    className='bg-pink-500 hover:bg-pink-500 duration-200 text-white px-4 py-2'
                >
                    ثبت
                </button>
            </form>
        </div>
    );
};

export default AddUser;
