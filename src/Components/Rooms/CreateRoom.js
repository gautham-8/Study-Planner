import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker";

function Appointmentform() {
    const {register,handleSubmit,formState:{errors}} = useForm()

    
    const navigate = useNavigate();

    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);

    const onFormSubmit = (room) => {
        window.alert("Successfully registered a room");
        const userEmail = [userObj.email];
        const userEmails = {
            emails: userEmail
        };
        const roomDetails = Object.assign(room,userEmails)
        // console.log(roomDetails);
        console.log(roomDetails.emails);
        axios.post('http://localhost:4000/room-api/create-room',roomDetails)
        .then(response => {
            // console.log(response)
            navigate('/')
        })
        .catch(error => alert(error))
    }
    return (
        <div className="pt-3">
            <div className="row mx-auto">
                <div className="cols col-lg-2"></div>
                <div className="cols col-lg-8">  
                    <div className="row pb-4">
                        <div className="col-lg-10 col-md-8 mx-auto">
                            <form onSubmit = {handleSubmit(onFormSubmit)} className="form-shadow">
                                <div>
                                    <label htmlFor="roomname">Room name:</label>
                                    <input type="text" id="roomname" className="form-control" {...register("roomname",{required:true,minLength:3})} />
                                    {errors.name?.type==='required'&& <p className="text-danger">* Required field</p>}
                                    {errors.name?.type === 'minLength' && <p className='text-danger'>* Min length should be 3</p>}
                                </div>
                                <div>
                                    <label htmlFor="subjectname">Subject name:</label>
                                    <input type="text" id="subjectname" className="form-control" {...register("subjectname",{required:true,minLength:3})} />
                                    {errors.name?.type==='required'&& <p className="text-danger">* Required field</p>}
                                    {errors.name?.type === 'minLength' && <p className='text-danger'>* Min length should be 3</p>}
                                </div>
                                <label htmlFor="enddate">Start date:  </label>
                                <input type="date" id="enddate" className="form-control" {...register("startdate")}/>
                                <label htmlFor="starttime">Start time:  </label>
                                <select name="starttime" id="starttime" className="form-select" {...register("starttime")}>
                                    <option value="19:00" >19:00</option>
                                    <option value="19:30" >19:30</option>
                                    <option value="20:00" >20:00</option>
                                </select>
                                <label htmlFor="enddate">End date:  </label>
                                <input type="date" id="enddate" className="form-control" {...register("enddate")}/>
                                <label htmlFor="endtime">End time:  </label>
                                <select name="endtime" id="endtime" className="form-select" {...register("endtime")}>
                                    <option value="19:00" >19:00</option>
                                    <option value="19:30" >19:30</option>
                                    <option value="20:00" >20:00</option>
                                </select>
                                <label htmlFor="maxlimit">Maximum Capacity:  </label>
                                <input type="number" name="maxlimit" id="maxlimit" className="form-control" {...register("maxlimit")}/>
                                <button size="lg" style={{display: "block"}} type="submit" className="btn btn-secondary w-50 mx-auto mt-2">Book!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Appointmentform