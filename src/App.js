import { useState } from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Info from './components/Info'
import AddInput from './components/AddInput'
import Todos from './components/Todos'
import Empty from './components/Empty'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Semangka', count: 1},
  ])

  const handleSubtractionCount = (index) => {
    const newTodos = [...todos]
    const indexedCountProperty = newTodos[index].count

    if(indexedCountProperty > 0) {
      newTodos[index].count = newTodos[index].count - 1
    } else {
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1
    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No blank list')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  return (
    <>
      <Navbar />
      <Container>
        <AddInput 
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {
          todos.length > 0 ? (
            <Todos 
              todos={todos}
              onSubtraction={(index) => handleSubtractionCount(index)}
              onAddition={(index) => handleAdditionCount(index)}
            />
          ) : (
            <Empty />
          )
        }

      </Container>
    </>
  );
}

export default App;
