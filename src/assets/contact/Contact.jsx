import React from 'react'
import { AiTwotoneMessage } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { BsPeopleFill } from 'react-icons/bs'
import { FaHandshake } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    <div className="contact py-5">
        <div className="container">
            <div className="row">
                    <h3>Recommended</h3>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <i><AiTwotoneMessage /></i>
                    <strong>Message Us</strong>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nisi exercitationem.</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img src="/Images/contact.jpg" alt="#" />
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
            <h3>Other methods</h3>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                <i><BsPeopleFill /></i>
                    <strong>Ask the community</strong>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nisi exercitationem.</p>
                </div>
                <div className="col-md-3 mx-3">
                <i><FaHandshake /></i>
                    <strong>Resolution Center</strong>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nisi exercitationem.</p>
                </div>
                <div className="col-md-3 mx-3">
                <i><IoIosCall /></i>
                    <strong>Call Us</strong>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nisi exercitationem.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
