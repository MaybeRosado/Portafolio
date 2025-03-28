import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
  <nav 
  className='mb-20 flex items-center justify-between py-6'>
    <div 
    className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/emilio-rosado-araujo/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/MaybeRosado" target='_blank'> <FaGithub /></a>
       
    </div>
  </nav>
  )
}

export default Navbar