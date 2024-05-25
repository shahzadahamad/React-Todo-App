import React,{useState} from 'react'
import sweetAlert from '../sweetAlert/alerts'


const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.trim()) {
      addTodo(value)
      sweetAlert('Task Added','success')
    } else {
      sweetAlert('Enter Task...','error')
    }
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" value={value} className='todo-input' onChange={(e)=> setValue(e.target.value)} placeholder='What is the task today?' />
      <button type='sumbit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
