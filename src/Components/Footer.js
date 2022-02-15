import { BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className='bg-dark text-center text-light py-4'>
        <h5 className='opacity-50 text-lg font-light mb-3'>2022 © Samy Boi's Pizza Place</h5>

        <div className="mx-auto flex flex-row justify-center gap-8">
            <BsFacebook className="text-2xl hover:text-sky-700 hover:scale-110"/>
            <BsTwitter className="text-2xl hover:text-sky-500 hover:scale-110"/>
        </div>

    </footer>
  )
}

export default Footer