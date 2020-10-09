import React , {Fragment , useState ,useEffect}  from 'react'
import ReactDom from 'react-dom'
import './style.css'

import Form from './components/Form'
import TodoList from './components/TodoList'

const App = ()=> {

    const [inputText , setInputText] = useState("")
 
    const [todos,setTodos] = useState([])
    const [status , setStatus] = useState("all")
    const [filteredTodos,setFilteredTodos] = useState([])

    useEffect(()=>{
        filterHandler()
    },[todos,status ])

    const filterHandler = ()=> {
        switch(status){
            case "completed": 
            setFilteredTodos(todos.filter(todo => todo.completed === true))
            break;

            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed !== true))
 break;
                default :
                setFilteredTodos(todos)
                break;
        }

    }

   
return (

 <Fragment>
 <header>
     <h1>TODO LIST APP</h1>
 </header>
 <Form 
 inputText = {inputText}
 todos={todos} setTodos = {setTodos} setInputText = {setInputText} setStatus = {setStatus} />
 <TodoList filteredTodos={filteredTodos} todos = {todos} setTodos={setTodos} />
 </Fragment>

)
}

 ReactDom.render(<App />,document.querySelector('#root'))