import { useContext , useEffect} from 'react'
import { Link } from 'react-router-dom'
import githubContext from '../contexts/githubContext/GithubContext'

function SearchResult() {

  const {users ,user , dispatch} = useContext(githubContext)

  
  return (
    <>
    {users.length !== 0 &&
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center align-middle pb-8'>
        {users.map((user) => {
          return(
            <div key={user.id} className='test'>
              <div className="card card-side bg-base-100 shadow-2xl w-72 px-4">
                <figure><img className='rounded-full w-20' src={user.avatar_url} alt="profile picture" /></figure>
                <div className="card-body ">
                  <p className='text-xl font-bold'>{user.login}</p>
                  <div className="card-actions justify-center">
                    <Link to={`user/${user.login}`} ><button className=' btn btn-ghost text-xs text-slate-400'>Visit Profile</button></Link>
                  </div>
                </div>
              </div> 
            </div>      
          )
        }
        )}
      </div>
      }
    </>
  )
}

export default SearchResult
