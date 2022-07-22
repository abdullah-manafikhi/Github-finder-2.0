import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

function NotFound() {
  return (
    <div className='grid grid-cols-1 justify-items-center'>
        <h2 className='text-6xl font-extrabold'>Oops !</h2>
        <h2 className='text-4xl font-bold my-6'>404-page is not found</h2>
        <Link to='/' className="btn btn-primary mt-2"><FaHome className='mr-2 text-2xl' />go back Home</Link>
    </div>
  )
}

export default NotFound
