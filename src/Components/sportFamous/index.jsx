import React, { useState } from 'react'
import "./style.css"
import { useDeleteFamousMutation, useDeleteTbale2Mutation } from '../../redux/slice/./famous.js'
import AddUser from './adduser.jsx'
import { toast } from 'react-toastify'
import { useGetFamousQuery } from '../../redux/slice/famous.js'

export const FamousCom = () => {
    const { data, isLoading } = useGetFamousQuery()
    const [deleteTbale2] = useDeleteFamousMutation();

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
                        <th>Sports name</th>
                        <th>Rating</th>

                    </tr>

                    {isLoading ? <p>Loadin...</p> :
                        data?.length > 0 ?
                            data?.map((val, index) => {
                                return (
                                    <tr key={val.id}>
                                        <th>{index + 1}</th>
                                        <th>{val?.name}</th>
                                        <th>{val?.rating}</th>
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

export default FamousCom