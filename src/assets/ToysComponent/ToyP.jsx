import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const ToyP = () => {
  return (
    <>
    <div className="toy">
      <div className="container py-5">
        <div className="row ptoy-content p-5">
          <div className="col-md-7">
            <h1 className='pb-3'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam officia itaque? Eius dolorum totam vitae atque sint deserunt incidunt sapiente repellendus cupiditate. Velit ducimus sequi aperiam a debitis, amet, officia reprehenderit laudantium molestias, perspiciatis qui incidunt atque! Amet odio rerum esse earum voluptatem accusamus eligendi repellendus vitae nesciunt aut enim eveniet corporis sequi nihil modi, temporibus odit, impedit fuga maxime ut aliquid facere. Autem suscipit enim magnam, sed culpa dolores illo. Ullam, iusto vero? Sed nam nemo autem a at ducimus in quo obcaecati dolorum accusantium esse dolores, exercitationem aliquid quidem minima omnis explicabo accusamus magnam nulla culpa laboriosam. Eum doloremque laboriosam incidunt cupiditate.</p>
          </div>
          <div className="col-md-5">
            <img src="/Images/plastic-4.avif" alt="/" style={{width: '100%', height: '360px'}}/>
          </div>
        </div>
      </div>
      <div className="container my-5 p-5">
          <div className="row w-toy-cart">
            <div className="col-md-4 my-5">
              <img src="/Images/plastic-1.avif" alt="" />
              <div className="f-detail">
                <h3>CarvedKids Crafts</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$33.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/plastic-6.avif" alt="" />
              <div className="f-detail">
                <h3>ClassicWood Creations</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$30.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/plastic-5.avif" alt="" />
              <div className="f-detail">
                <h3>TreeTop Toys</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$20.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/plastic-4.avif" alt="" />
              <div className="f-detail">
                <h3>WoodWheel Roadster</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$50.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/plastic-11.avif" alt="" />
              <div className="f-detail">
                <h3>Nature's Playthings</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$10.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/plastic-9.avif" alt="" />
              <div className="f-detail">
                <h3>WoodWonder Blocks</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$17.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
