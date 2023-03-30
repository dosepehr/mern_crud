import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const UsersList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get('http://localhost:4000/api/users');
            setUsers(data);
        };
        getUsers();
    }, [users]);
    const deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users', {
            headers: {
                Authorization: id,
            },
        });
    };
    return (
        <>
            <div className='flex items-center justify-center my-5'>
                <Link
                    to='/add'
                    className='bg-pink-500 hover:bg-pink-500 duration-200 text-white px-4 py-2'
                >
                    افزودن
                </Link>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-hidden'>
                            <table className='min-w-full'>
                                <thead className='bg-white border-b'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            نام
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            ایمیل
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            جنسیت
                                        </th>
                                        <th
                                            scope='col'
                                            className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                        >
                                            عملیات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.length > 0 &&
                                        users.map((item, index) => (
                                            <tr
                                                className='bg-gray-100 border-b'
                                                key={index}
                                            >
                                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                                    {index + 1}
                                                </td>
                                                <td className='text-sm text-gray-900  px-6 py-4 whitespace-nowrap'>
                                                    {item.name}
                                                </td>
                                                <td className='text-sm text-gray-900  px-6 py-4 whitespace-nowrap'>
                                                    {item.email}
                                                </td>
                                                <td className='text-sm text-gray-900  px-6 py-4 whitespace-nowrap'>
                                                    {item.gender}
                                                </td>
                                                <td className='text-sm text-gray-900 space-x-4 px-6 py-4 whitespace-nowrap'>
                                                    <button
                                                        onClick={() =>
                                                            deleteUser(item._id)
                                                        }
                                                        className='px-4 py-2 text-white bg-red-500 hover:bg-red-700 duration-200'
                                                    >
                                                        حذف
                                                    </button>
                                                    <button className='px-4 py-2 text-white bg-green-500 hover:bg-green-700 duration-200'>
                                                        ویرایش
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsersList;
