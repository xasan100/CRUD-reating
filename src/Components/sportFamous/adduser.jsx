import React, { useState } from 'react'
import "./style.css"
import { useCreateTable2Mutation } from '../../redux/slice/slice.js'
import { toast } from 'react-toastify'
import { useCreateFamousMutation } from '../../redux/slice/famous.js'
export const AddUser = () => {
    const [state, setState] = useState(false)

    const [createFamous, { isLoading }] = useCreateFamousMutation();

    const [user, userState] = useState({
        firstname: '',
        lastname: '',
    })
    const dataSubmit = async () => {
        const formData = new FormData();
        formData.append('name', user.firstname);
        formData.append('rating', user.lastname);
        try {
            await createFamous(formData).unwrap();
            toast.success(`${user.firstname}`);
            userState({
                firstname: '',
                lastname: '',
            })

            setState(false);
        } catch (error) {
            toast.error(` ${user.firstname} `);
        }
    }

    const close = () => {
        setState(false)
    }
    return (
        <div>
            <button className='add-user-btn' onClick={() => setState(true)}>Add  User </button>
            {state &&
                <div className="wrapper">
                    <div className='modalContainer'>
                        <div className='mod-flex'>
                            <h1>Add user</h1>
                            <p onClick={() => close()}>✖︎</p>
                        </div>
                        <div className="input-box">
                            <div className='adduser_input'>
                                <div >
                                    <span>Name</span>
                                    <input onChange={(e) => userState({ ...user, firstname: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Ball</span>
                                    <input onChange={(e) => userState({ ...user, lastname: e.target.value })} type="text" />
                                </div>

                            </div>

                        </div>
                        <div className='submitadd'>
                            <button onClick={dataSubmit} disabled={isLoading}>
                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                            </button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}
export default AddUser