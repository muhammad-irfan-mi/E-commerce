import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaGithubSquare} from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

export const Footer = () => {
  const linkedinProfileURL = "https://www.linkedin.com/in/muhammad-irfan-mi";
  const githubProfilelURL = "https://github.com/muhammad-irfan-mi"
  return (
    <>
     <footer id='foter-section'>
        <div className="container-fliud footer p-3">
          <div className="row">
            <div className="col-lg-4 p-5">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio deleniti saepe, provident, ducimus quas rerum ipsam similique error magnam ut </p>
            </div>
            <div className="col-lg-2 p-5">
              <h3>Category</h3>
              <ul>
                <li><a href="/plastic" className='f-list'>Toy</a></li>
                <li><a href="cetagory" className='f-list'>Jewllerey</a></li>
                <li><a href="cetagory" className='f-list'>Bag</a></li>
                <li><a href="cetagory" className='f-list'>Beauty</a></li>
                <li><a href="cetagory" className='f-list'>Accessories</a></li>
              </ul>
            </div>
            <div className="col-lg-2 p-5">
              <h3>Information</h3>
              <ul>
                <li><a href="/" className='f-list'>E-Shop</a></li>
                <li><a href="/contact" className='f-list'>Contact</a></li>
                <li><a href="/login" className='f-list'>Register</a></li>
              </ul>
            </div>
            <div className="col-lg-4 p-5">
              <h3>Contact</h3>
              <p>XYZ Town, Street 1, Punjab, Pakistan <br /> Call: +92 3090000000 <br />Email: 123xyz@gmail.com</p>
              <a href={linkedinProfileURL} target="_blank"><FaFacebookSquare /></a>
              <a href={linkedinProfileURL} target="_blank"><FaLinkedin /></a>
              <a href={linkedinProfileURL} target="_blank"><FaYoutube /></a>
              <a href={linkedinProfileURL} target="_blank"><RiTwitterXLine /></a>
              <a href={githubProfilelURL} target="_blank"><FaGithubSquare/></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
