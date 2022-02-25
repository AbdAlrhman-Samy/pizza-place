import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='h-screen flex flex-col justify-center items-center select-none'>

        <div className='text-center text-light'>
            <span className='text-xl'>¯\_(ツ)_/¯</span>
            <h1 className='text-7xl font-extrabold my-5 text-primary animate-pulse'>404</h1>
            <p className='text-xl'>There's ✨nothing✨ here.</p>

            <Link to="/">
                <button className='my-10 font-semibold border-4 border-primary px-2 py-3 hover:bg-primary hover:text-dark hover:border-light active:scale-95'>Go Back Home</button>
            </Link>
        </div>
        
        
    </div>
  )
}

export default Error