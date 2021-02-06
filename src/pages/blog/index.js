import { useEffect, useState } from 'react'

import Link from 'next/link'
import Button from '../../components/Button'

export default function Blog() {
  const [name, setName] = useState('Bladimir')

  const onClickHandler = () => {
    setName('bladimir.dev')
  }

  useEffect(() => {
    console.log(name, 'desde useEffect')

    return () => {
      console.log('Antes que este componente se destruya')
    }
  }, [name])

  return (
    <div>
      <h1>Hola</h1>
      <p>{name}</p>
      <Button onClickHandler={onClickHandler}>Change name</Button>
      <Link href='/'>Vamos a inicio</Link>
    </div>
  )
}

// const Blog = () => {
//   return (
//     <div>
//       <h1>Hola</h1>
//     </div>
//   )
// }

// export default Blog
