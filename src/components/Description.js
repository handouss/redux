import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Description.css'
const Description = ({TasksList,setTaskList}) => {
  const params= useParams()
  const navigate = useNavigate()
   const _task=TasksList.find(el => el.id === +params.id) 

const editTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    setTaskList(current =>
      current.map(obj => {
        if (+obj.id === +params?.id) {
          console.log('found !')
          return {...obj, title: formProps?.title, description: formProps?.description};
        }

        return obj;
      }),
    );
    navigate('/')
}
console.log(TasksList)
  return (
    <div className="ca">
    <>
    <Link to={'/'}>  <button> home </button> </Link> 
     <div className='desc'>{_task?.description}</div>
     <form
          id="form"
          onSubmit={editTask}
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input type={"text"} name="title"  placeholder={"title"} />
          <input type={"text"} name="description" placeholder={"description"} />
            <p>Is your task done?</p>
  {/* <div>
    <input type="radio" id="contactChoice1"
     name="isDone" />
    <label for="contactChoice1">True</label>

    <input type="radio" id="contactChoice2"
     name="isNotDone" />
    <label for="contactChoice2">False</label>
  </div> */}

          <button type="submit">Edit Task</button>

        </form>
    </>
    </div>
  )
}
export default Description