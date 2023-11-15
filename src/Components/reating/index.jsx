import React, { useState } from 'react'
import "./style.css"
import { useDeleteTbale2Mutation, useGetTable1Query } from '../../redux/slice/slice.js'
import AddUser from './adduser.jsx'
import { toast } from 'react-toastify'

export const ReatingCom = () => {
    const { data, isLoading } = useGetTable1Query()
    const [deleteTbale2] = useDeleteTbale2Mutation();

    const deletItem = async (id) => {
        try {
            await deleteTbale2({ id });
            toast.success("Delete!");
        } catch (err) {
            toast.error("---");
        }
    }

    return (
        <div className='container'>
            <div>
                <div className='flex'>
                    <h1> </h1>
                    <AddUser />
                </div>
                <table border={'2px'}>
                    <tr>
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>University name</th>
                        <th>Semester</th>
                        <th>Gpa</th>
                        <th>Nationality</th>
                        <th>Hobby</th>
                        <th>Action</th>

                    </tr>

                    {isLoading ? <p>Loadin...</p> :
                        data?.length > 0 ?
                            data?.map((val, index) => {
                                return (
                                    <tr key={val.id}>
                                        <th>{index + 1}</th>
                                        <th>{val?.first_name}</th>
                                        <th>{val?.last_name}</th>
                                        <th>{val?.age}</th>
                                        <th>{val?.gender}</th>
                                        <th>{val?.university_name}</th>
                                        <th>{val?.semester}</th>
                                        <th>{val?.gpa}</th>
                                        <th>{val?.nationality}</th>
                                        <th>{val?.hobby}</th>
                                        <th className='th-btn'>
                                            <button onClick={() => deletItem(val.id)} className='delete-btn'>
                                                delete
                                            </button>
                                        </th>

                                    </tr>
                                )
                            })
                            : <h5>Now data</h5>
                    }
                </table>
            </div>

        </div>
    )
}

export default ReatingCom