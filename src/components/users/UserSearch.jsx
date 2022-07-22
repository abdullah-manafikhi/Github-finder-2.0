import {useState , useContext ,} from 'react'
import {userSearch} from '../contexts/githubContext/GithubActions' 
import githubContext from '../contexts/githubContext/GithubContext'


function UserSearch() {

  const [input, setinput] = useState("")
  const [alert, setalert] = useState("")
  const {dispatch , users , loading} = useContext(githubContext)


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(input.length === 0){
      setalert("Please Enter Something ....")
      setTimeout( () => {setalert("") }, 3000)
    }
    else{
    dispatch({type:"SET_LOADING"})
    e.preventDefault()
    const searchResult = await userSearch(input)
        dispatch({
          type: "GET_USERS",
          payload: searchResult
        })
        setinput("")
      }
  }

  const handleClear = () => {
    dispatch({
      type:'CLEAR',
      payload:''
    })
  }

  if(loading)return(<div className='m-auto text-4xl font-bold'>Loading...</div>)
  
  else return (
    <>  
      <div><p className='mt-16 relative bottom-8 tracking-widest text-4xl font-bold'>Search for a Github User :</p></div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 my-8 justify-items-center'>
        <div></div>
        <div className='w-80 sm:w-auto'>
        <h2 className='text-red-700 mb-2'>{alert}</h2>
          <form className='flex justify-center mx-auto '>
              <input onChange = {(e) => {setinput(e.currentTarget.value) ; console.log(input) }} 
              className='w-96 h-14 relative left-12 rounded-xl flex-initial text-black focus:outline-none p-4 sm:left-16 '
              placeholder='Search' type="text" />
              <button  onClick={handleSubmit} className='flex-none relative right-12 rounded-r-xl rounded-l-none h-14 w-24 btn sm:w-32 sm:right-16 '>Go</button>
          </form>
        </div>
        <div>{users.length !== 0 &&<button onClick={handleClear} className='btn mt-3'>clear</button>}</div>
      </div>
    </>
  )
}

export default UserSearch