import { useReducer, useState } from 'react'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.key]: action.value
      }

    default:
      return state
  }
}

export default function Nosotros() {
  //   const [name, setName] = useState('Bladimir')
  //   const [lastName, setLastName] = useState('Ventura')

  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    lastName: 'Ventura'
  })

  return (
    <div>
      <h1>Nosotros</h1>
      <form>
        <div>
          <label>Nombres</label>
          <input
            value={formState.name}
            onChange={(e) => {
              dispatch({
                type: 'SET_VALUE',
                value: e.target.value,
                key: 'name'
              })
              //   setName(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Apellidos</label>
          <input
            value={formState.lastName}
            onChange={(e) => {
              dispatch({
                type: 'SET_VALUE',
                value: e.target.value,
                key: 'lastName'
              })
              //   setLastName(e.target.value)
            }}
          />
        </div>
      </form>
    </div>
  )
}
