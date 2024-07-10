// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Echelle from './component/echelle'
// import Footer from './component/footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div className='border border-blue-500 h-screen'>
//       <div className=''>
//           <Echelle/>
//       </div>
//       <div className=''>
//           <Footer/>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
// import './App.css'
import Echelle from './component/echelle'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' h-screen flex flex-col justify-between'>
          <Echelle/>
      <div>
          <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
