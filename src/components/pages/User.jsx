import {FaArrowLeft , FaMapMarkerAlt , FaTwitter , FaGlobe , FaUsers , FaCodepen , FaStore, FaUtensils , FaLink , FaStar, FaEye ,FaInfo} from 'react-icons/fa'
import { useContext  , useEffect} from 'react'
import { useParams , Link } from 'react-router-dom'
import githubContext from '../contexts/githubContext/GithubContext'
import {userProfile , getRepos} from '../contexts/githubContext/GithubActions'



function User() {

    const {user ,repos, dispatch , loading} = useContext(githubContext)  

    const params = useParams()

    const goToProfile = async () => {
        dispatch({type:"SET_LOADING"})
        const profile = await userProfile(params.login)
        const Repos = await getRepos(params.login)
        dispatch({
            type:'GET_REPOS',
            payload: Repos
        })
        dispatch({
          type: 'USER_PROFILE',
          payload: profile
        })
    }

    useEffect(() => {
        goToProfile()
    } , [])

    if(loading)return(<div className='m-auto text-4xl font-bold'>Loading...</div>)

  else return (
    <>
    <Link to='/'><button className='btn btn-ghost w-48 ml-12 mt-6 text-md tracking-wider'><FaArrowLeft className='mr-2' /> back to search</button></Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center rounded-none p-12'>
            <div className='grid justify-items-center ml-8'>
                <div className="card w-full bg-base-100 shadow-xl text-center opacity-40">
                    <figure className='h-full w-8/12 md:w-full '><img className='rounded-2xl' src={user.avatar_url} alt="profile picture" /></figure>
                </div>
                <div className="relative bottom-16 right-12 ">
                    <h2 className="text-xl">{user.login}</h2>
                    <p className='text-md'>{user.name}</p>
                </div>
            </div>
            <div className="col-span-2 w-10/12 ">
                <div className="flex flex-row  justify-left">
                    <h2 className='text-4xl '>{user.name}</h2>
                    <p className ='ml-4 h-6 mt-3 text-sm badge-primary rounded-lg pt-0.5 px-2'>{(user.hierable)?"hireable": "Unhireable" }</p>
                    <p className='ml-4 h-6 mt-3 text-sm badge-success pt-0.5 px-2 rounded-lg'>{user.type}</p>
                </div>
                <div className='my-1'>
                    {user.bio}
                </div>
                <a href={user.html_url} target="_blank" ><button className='btn btn-outline my-4'>visit profile</button></a><br/>

                <div className="stats shadow w-full my-4">
                    
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaMapMarkerAlt className='text-2xl fill-pink-600' />
                        </div>
                        <div className="stat-title">Location</div>
                        <div className="">{user.location}</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaGlobe className='text-2xl fill-pink-600' />
                        </div>
                        <div className="stat-title">Website</div>
                        <div className="">{user.blog}</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaTwitter className='text-2xl fill-pink-600' />
                        </div>
                        <div className="stat-title">Twitter</div>
                        <div className="">{user.twitter_username}</div>
                    </div>
                    
                </div>
                <div className="stats shadow w-full my-4">
                    
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaUsers className='text-2xl fill-pink-600' />
                        </div>
                        <div className="stat-title">Followers</div>
                        <div className="">{user.followers}</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaUsers className='text-2xl fill-pink-600' />
                        </div>``
                        <div className="stat-title">Following</div>
                        <div className="">{user.following}</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaStore className='text-2xl fill-pink-600' />
                        </div>
                        <div className="stat-title">Gists</div>
                        <div className="">{user.public_gists}</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-figure text-primary">
                            <FaCodepen className='text-2xl fill-pink-600' />
                        </div>
                        <div className="stat-title">Public Repos</div>
                        <div className="">{user.public_repos}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols px-20 mb-12">
            <h2 className=' text-3xl font-bold'>Latest Repositories</h2>
            {repos.map((repo) => {return(
            <a key={repo.id} href={repo.html_url} target="_blank" className="bg-gray-800 h-auto w-full my-2 hover:bg-gray-900 p-12 ">
                <FaLink />
                <h2 className='text-xl font-semibold  '>{repo.name}</h2>
                <p className='mt-2' >{repo.description}</p>
                <div className='mt-6'>
                    <div className="mr-2 badge badge-lg badge-info">
                        <FaEye className='mr-2' /> {repo.watchers}
                    </div>
                    <div className="mr-2 badge badge-lg badge-success">
                        <FaStar className='mr-2' /> {repo.stargazers_count}
                    </div>
                    <div className="mr-2 badge badge-lg badge-error">
                        <FaInfo className='mr-2' /> {repo.open_issues}
                    </div>
                    <div className="mr-2 badge badge-lg badge-warning">
                        <FaUtensils className='mr-2' /> {repo.watchers_count}
                    </div>
                </div>
            </a>
            )
            })    
        }
        </div>
    </>
  )
}

export default User
