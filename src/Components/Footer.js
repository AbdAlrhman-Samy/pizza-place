import { BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className='bg-dark text-center text-light py-4'>
        <h3 className=' text-md font-light mb-3'>Copyright © 2022 KrustyKrab</h3>

        <div className="mx-auto flex flex-row justify-center gap-8">
            <BsFacebook className="text-2xl hover:text-sky-800 hover:scale-110"/>
            <BsTwitter className="text-2xl hover:text-sky-500 hover:scale-110"/>
        </div>

    </footer>
  )
}

export default Footer