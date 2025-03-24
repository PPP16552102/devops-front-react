import { useEffect } from "react";
import { useState } from "react";
import { getUserInfo } from './api/users';
import { Button } from 'antd';

function App() {

  const [users, setUsers] = useState([]);

  function checkUserInfo() {
    console.log(users);
  }

  useEffect(() => {
    getUserInfo().then((res) => {
      setUsers(res.data);
    })
  },[])

  return (
    <>
      <div>
        <ul>
          {users.map((item, index) => {
            return <li key={index}>{index}-{item.name}</li>
          })}
        </ul>
        <Button onClick={checkUserInfo}>点击查看</Button>
      </div>
    </>
  )
}

export default App
