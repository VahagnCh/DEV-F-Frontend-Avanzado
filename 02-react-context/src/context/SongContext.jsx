import { createContext, useEffect, useState } from 'react'
// usamos @ para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

// Context tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir la misma informaicon entre diferentes Niveles de componentes de forma directa.

// Para usar Context requerimos seguir una serie de pasos:

// Paso 1. Crear el contexto
const SongContext = createContext()

// Paso 2. Crear el provider
// El provider, maneja de donde se obtiene la informacion y como se comparte.
// En este caso, el provider es un componente que envuelve a los componentes que necesitan la informacion (el contexto)

function SongProvider ({ childern }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  // Simulamos una petición a una API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  // Esto es lo que se va a compartir de manera global
  const data = {
    list,
    loading
  }

  return (
    <SongContext.Provider value={{ data }}>
      {childern}
    </SongContext.Provider>
  )
}

export {
  SongProvider,
  SongContext
}
