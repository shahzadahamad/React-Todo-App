import React,{useState} from 'react';
import sweetAlert from '../sweetAlert/alerts';

const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.trim()) {
      editTodo(value,task.id)
      sweetAlert('Task Updated!','success');
    } else {
      sweetAlert('Enter Value...','error')
    }
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" value={value} className='todo-input' onChange={(e)=> setValue(e.target.value)} placeholder='Update Task' />
      <button type='sumbit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
