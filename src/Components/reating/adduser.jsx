import React, { useState } from 'react'
import "./style.css"
import { useCreateTable2Mutation } from '../../redux/slice/slice.js'
import { toast } from 'react-toastify'
export const AddUser = () => {
    const [state, setState] = useState(false)

    const [createTable2, {isLoading}] = useCreateTable2Mutation();

    const [user, userState] = useState({
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        address: '',
        university: '',
        semester: '',
        gpa: '',
        nationality: '',
        hobby: '',

    })
    const dataSubmit = async () => {
        const formData = new FormData();
        formData.append('first_name', user.firstname);
        formData.append('last_name', user.lastname);
        formData.append('age', user.age);
        formData.append('gender', user.gender);
        formData.append('address', user.address);
        formData.append('university_name', user.university);
        formData.append('semester', user.semester);
        formData.append('gpa', user.gpa);
        formData.append('nationality', user.nationality);
        formData.append('hobby', user.hobby);
        try {
            await createTable2(formData).unwrap();
            toast.success(`${user.firstname}`);
            userState({
                firstname: '',
                lastname: '',
                age: '',
                gender: '',
                address: '',
                university: '',
                semester: '',
                gpa: '',
                nationality: '',
                hobby: '',
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
                                    <span>First name</span>
                                    <input onChange={(e) => userState({ ...user, firstname: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Last name</span>
                                    <input onChange={(e) => userState({ ...user, lastname: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Age</span>
                                    <input onChange={(e) => userState({ ...user, age: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Gender</span>
                                    <input onChange={(e) => userState({ ...user, gender: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Address</span>
                                    <input onChange={(e) => userState({ ...user, address: e.target.value })} type="text" />
                                </div>
                            </div>
                            <div className='adduser_input'>
                                <div >
                                    <span>University name</span>
                                    <input onChange={(e) => userState({ ...user, university: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Semester #</span>
                                    <input onChange={(e) => userState({ ...user, semester: e.target.value })} type="text" />
                                </div>              <div>
                                    <span>GPA</span>
                                    <input onChange={(e) => userState({ ...user, gpa: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Nationality</span>
                                    <input onChange={(e) => userState({ ...user, nationality: e.target.value })} type="text" />
                                </div>
                                <div>
                                    <span>Hobby</span>
                                    <input onChange={(e) => userState({ ...user, hobby: e.target.value })} type="text" />
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