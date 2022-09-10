import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './SuperResponsiveTableStyle.css';
import {Form,Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form';

function ViewAllRooms() {
  let [roomList,setRooms]=useState([]);
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
  // const {register,handleSubmit,formState: { errors },} = useForm();

  let url;
  url = `http://localhost:4000/room-api/getrooms`;
  useEffect(()=>{
    axios.get(url)
    .then((response) => {
      // console.log(response.data.payload);
      setRooms(response.data.payload);
    })
    .catch((error) => {
      console.log("error-", error);
    });
  },[roomList])
  // console.log(roomList);

  const onRegister = (ele) => {
    // console.log("Registered!!!")
    ele.emails.push(userObj.email);
    // console.log(ele)
    axios.put(`http://localhost:4000/room-api/update-room`,ele)
    .then((response) => {
      console.log(response)
      setRooms(response.data.payload);
    })
    .catch((error) => {
      console.log("error-", error);
    });
  };

  return (
    <div>
      <>
        <Table className='table table-center table-light container'>
          <Thead>
            <Tr>
              <Th>Room:</Th>
              <Th>Subject name:</Th>
              <Th>Current capacity:</Th>
              <Th>Start date:</Th>
              <Th>Start time:</Th>
              <Th>End date:</Th>
              <Th>End time:</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              (roomList!=undefined)?
              (<>
              {
                roomList.map((ele)=>
                  <Tr key={ele._id}>
                    <Td>{ele.roomname}</Td>
                    <Td>Ok</Td>
                    <Td>{ele.emails.length}/{ele.maxlimit}</Td>
                    <Td>{ele.startdate}</Td>
                    <Td>{ele.starttime}</Td>
                    <Td>{ele.enddate}</Td>
                    <Td>{ele.endtime}</Td>
                    <Td>
                      {
                        (ele.emails.includes(userObj.email))?
                        (<div>Registered</div>):
                        (
                          ((+ele.emails.length)===(+ele.maxlimit))?
                          (<div>Max capacity reached</div>):
                          (<Button onClick={()=>onRegister(ele)} variant="primary" type="submit" className="d-block mx-auto">
                          Register now
                          </Button>)
                        )
                      }
                    </Td>
                    {/* (<Button onClick={()=>onRegister(ele)} variant="primary" type="submit" className="d-block mx-auto">
                            Register now
                            </Button>) */}
                  </Tr>
                )
              }
              </>)
              :(<></>)
            }
          </Tbody>
        </Table>
      </>
    </div>
  )
}

export default ViewAllRooms