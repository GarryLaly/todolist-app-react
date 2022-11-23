// import { useState } from 'react'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import ListGroup from 'react-bootstrap/ListGroup'

// import logo from './logo.svg'
import './App.css'
import './component/navbar'

// function App() {
//   const [list, setList] = useState({
//     random: Math.random(),
//     data: [
//       { title: 'Baca buku' },
//       { title: 'Olahraga' },
//       { title: 'Istirahat' },
//     ],
//   })
//   const [newTodo, setNewTodo] = useState('')

//   const actionAddTodo = () => {
//     const newData = list.data
//     newData.push({ title: newTodo })
//     setList({ random: Math.random(), data: newData })
//     setNewTodo('')
//   }

//   const actionEditTodo = () => {
//     const newData = list.data
//     newData.pop({ title: newTodo })
//     setList({ random: Math.random(), data: newData })
//     setNewTodo('')
//   }

//   const actionDeleteTodo = (index) => {
//     const newData = list.data
//     newData.splice(index, 1)
//     setList({ random: Math.random(), data: newData })
//     setNewTodo('')
//   }

//   return (
//     <div className="App">
//       <div style={{ maxWidth: 300, margin: 'auto' }}>
//         <h1>Todo List App</h1>
//         <br />
//         <InputGroup className="mb-3">
//           <Form.Control
//             placeholder="Input your data in her..."
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//           />
//           <Button variant="primary" onClick={actionAddTodo}>
//             Add Data
//           </Button>
//         </InputGroup>
//         <ListGroup as="ol" numbered>
//           {list.data.map((item, index) => (
//             <ListGroup.Item
//               key={index}
//               as="li"
//               style={{ display: 'flex', justifyContent: 'space-between' }}
//             >
//               {item.title}
//               <Button
//                 variant="warning"
//                 size="sm"
//                 onClick={() => actionEditTodo(index)}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="danger"
//                 size="sm"
//                 onClick={() => actionDeleteTodo(index)}
//               >
//                 Delete
//               </Button>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//     </div>
//   )
// }
function App() {
  return (
    <div className="App">
      <h1>Simple Todo App</h1>
    </div>
  )
}

export default App

// export default App
