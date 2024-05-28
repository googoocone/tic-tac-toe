import {useState} from 'react';

export default function Player({name, symbol}) {

  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState(name)

  function handleIsEdit() {
    setIsEdit((prevState) => !prevState);
  }

  function handleUserName(event) {
    setUserName(event.target.value)
  }

  let userNameTag = <span className="player-name">{userName}</span>
  if(isEdit === true) {
    userNameTag = <input type="text" onChange={handleUserName} value={userName}></input>
  }
  return (
    <li>
      <span className="player">
        {userNameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEdit}> Edit</button>
    </li>
  )
}