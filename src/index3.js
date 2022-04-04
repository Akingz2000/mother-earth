import React, { useEffect , useRef, useState} from "react";
import {FaFacebookSquare, FaTwitterSquare , FaLinkedin, FaSnapchatSquare, FaInstagramSquare} from "react-icons/fa";
import {FcSearch} from "react-icons/fc";
import {IoEarthSharp} from "react-icons/io5"

import Aos from "aos";
import "aos/dist/aos.css"

const Index3 = () => {

  const [a, setA] = useState("fourth-section__label1")
  const [b , setB] = useState("fourth-section__input1")
  const [c, setC] = useState("fourth-section__label2")
  const [d, setD] = useState("fourth-section__input2")
  const [e, setE] = useState("fourth-section__label3")
  const [f, setF] = useState("fourth-section__input3")




  const Remove = useRef(null)


  const RunNa = () => {
   Remove.current.style.display = "none"
  }

  
  const Run2Na = () => {
    Remove.current.style.display = "block"
   }





  const Run = () => {
    setA("fourth-section__label1-edit ")
    setB("fourth-section__input1-edit")
  }

  const Run1 = () => {
setC("fourth-section__label2-edit ")
      setD("fourth-section__input2-edit")
      
  }

  const Run2 = () => {
    setE("fourth-section__label3-edit")
    setF("fourth-section__input3-edit")

  }

  

  useEffect(() => {
    Aos.init({duration:2000});
  })
  




  return(
    <main className="main">

      <section className="main-section">

        
   <section  ref={Remove} className="pop-up"> 
        <div style={{marginTop: '1rem' , display: "flex", alignItems: "center", }} className="first-section__h2-holder">
             <h2  style={{ color: "white", marginRight: '.5rem', marginLeft: "5rem", marginTop: ".5rem"}} className="first-section__h2">Mother Earth</h2>
             <IoEarthSharp style={{ marginRight: "auto" , fontSize: "3rem" }} className="first-section__icon"></IoEarthSharp> 
               <div  onClick={RunNa} style={{ color: "white", cursor: "pointer"  ,fontSize: "4rem", marginTop: ".5rem", marginRight: "6rem"}} className="first-section__times">&times;</div>
         </div>
            
   
       <div className="pop-up__holder">

       <ul className="pop-up__ul">
              <li className="pop-up__li"><a className="first-section__link1" href="#set1">  home  </a>  </li>

              
              <li className="pop-up__li"><a className="first-section__link1" href="#set3">  about  </a> </li>
              <li className="pop-up__li"><a className="first-section__link1" href="#set4">  gallary  </a> </li>
              <li className="pop-up__li"><a className="first-section__link1" href="#set2">  service  </a> </li>

            </ul>


       </div>
           
        </section> 




      <section className="first-section" id="set1">
      <header className="first-section__part1">

        <div className="first-section__part1-holder">
             <div className="first-section__h2-holder">
             <h2 className="first-section__h2"> <a className="first-section__link2" href="#set1"> Mother Earth  <IoEarthSharp className="first-section__icon"></IoEarthSharp> </a>     </h2>
            <h3 className="first-section__h3"> photos of our beloved universe   </h3>
             </div>
            
            
            <ul style={{marginRight: "13rem"}} className="first-section__ul">
              <li className="first-section__li1"> <a className="first-section__link1" href="#set1">  home  </a>  </li>

              <li className="first-section__li1">   <a className="first-section__link1" href="#set3">   about  </a></li>
              <li  className="first-section__li2">   <a className="first-section__link1" href="#set4">  gallary  </a> </li>
              <li className="first-section__li1">   <a className="first-section__link1" href="#set2">  contact   </a>   </li>
              <li  className="first-section__li3-3">   <a className="first-section__link1" href="#set4">  <FcSearch className="first-section__icon1" ></FcSearch>  </a> </li>
              
           
            </ul>
            
            <div onClick={Run2Na}  className="first-section__line"></div>



        </div>

      </header>

      <section className="first-section__part2">

        <div  className="first-section__part2-holder">

          <section  data-aos = "fade-down" className="first-section__part-2-1">
            <div className="first-section__part-2-1-holder">
            <h2 className="first-section__part2-h2">

Our beloved Universe 

</h2>
<p  data-aos = "fade-right" className="first-section__part2-p">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque ipsa id corporis iste debitis eligendi quasi saepe nostrum enim facilis, vero reprehenderit soluta! Fuga rem amet nostrum sed reiciendis.

</p>

<button className="first-section__button">search</button>


            </div>


          </section>

          <section className="first-section__part-2-2">
            <div className="first-section__part-2-2-holder">
           
<img src={"./web-3/IMG_20210407_025504.jpg"}  alt="" className="first-section__part-2-2-img" />


            </div>


          </section>
         
          

        </div>
        </section> 
    </section>










    <div id="set3" className="second-section">

      <section className="second-section__holder">

        <h2 className="second-section__h2">

        mother nature

        </h2>

        <p className="second-section__p">
              deep view into our beloved universe     

        </p><div className="second-section__sub-p">

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, culpa facilis in deleniti, fugiat, vero id ducimus nemo provident quo dolor adipisci. Et cumque, enim in dolorum harum temporibus odit.

        </div>






      </section>


    </div>




    <div id="set4" className="third-section">



<h2 className="third-section__h2"> gallary  </h2>


<section className="third-section__holder">
  <div className="third-section__1">

    <section className="third-section__1-holder">

<img  data-aos = "fade-right"  src={"./web-3/IMG_20210708_075549.jpg"}  alt="" className="third-section__img1" />

    </section>


  </div>

  <div className="third-section__2">

    <section className="third-section__2-holder">

    <div className="third-section__part1">
    
<img data-aos = "fade-down" src={"./web-3/IMG_20210817_192407.jpg"}  alt="" className="third-section__img2" />
</div>

<div className="third-section__part2">

<img  data-aos = "fade-up" src={"./web-3/IMG_20210828_013156.jpg"}  alt="" className="third-section__img3" />

<img  data-aos = "fade-up" src={"./web-3/IMG_20210828_012309.jpg"}  alt="" className="third-section__img4" />

</div>

      
    </section>


  </div>

  <div className="third-section__3">

    <section className="third-section__3-holder">

    <div className="third-section__part3">
    
<div data-aos = "fade-left" className="third-section__img5" > </div>
</div>
<div className="third-section__part4">
<div  data-aos = "fade-left" className="third-section__img6" > </div>
</div>
    </section>


  </div>


</section>

    </div>




    <div id="set2" className="fourth-section">
    
       

 


      <section className="fourth-section__holder">
          
         <div className="fourth-section__part1">



           <section className="fourth-section__part1-holder">
         <h2 className="fourth-section__h2">contact</h2>
   <div className="fourth-section__1">
    <label htmlFor="fourth-section__input1" className={a}>full name</label>
   <input  onClick={Run} id="fourth-section__input1"   type="text" className={b}/>
   </div>
        
   <div className="fourth-section__2">
   <label htmlFor="fourth-section__input2" className={c}>email</label>
<input onClick={Run1}  id="fourth-section__input2"   type="text" className={d} />
</div>


     
<div className="fourth-section__3">
<label htmlFor="fourth-section__input3" className={e}>message</label>
<input onClick={Run2} id="fourth-section__input3"  type="text" className={f} />
</div>
     
<button className="fourth-section__button">sign up</button>

           </section>

         </div>





      </section>
    </div>


    
    



  <div className="footer">
    <section className="footer__holder">

      <div data-aos = "fade-right" className="footer__part1">

        <h2 className="footer__h2">
        Reach Us On The Following Places
        </h2>
       
        <div className="footer__num">
           <FaInstagramSquare className="footer__icon"></FaInstagramSquare>
           <FaFacebookSquare className="footer__icon"></FaFacebookSquare>
           <FaTwitterSquare className="footer__icon"></FaTwitterSquare>
        </div>


      </div>

      <ul data-aos = "fade-up" className="footer__ul">
      <li className="footer__li2">  oceaan view  </li>
        <li className="footer__li1">rocks</li>
        <li className="footer__li1">  skys view
</li>
        <li className="footer__li1">  earth </li>
        

      </ul>
      
      <section data-aos = "fade-up" className="footer__ul1">
      <div className="footer__li2">  social handles </div>
   <section className="footer__li2-2">
   <div className="footer__li3"><FaTwitterSquare className="footer__icon"></FaTwitterSquare></div>
        <div className="footer__li3">  <FaInstagramSquare className="footer__icon"></FaInstagramSquare></div>
        <div className="footer__li3">  <FaFacebookSquare className="footer__icon"></FaFacebookSquare></div>
        <div className="footer__li3">  <FaLinkedin className="footer__icon"></FaLinkedin>   </div>
        <div className="footer__li3"> <FaSnapchatSquare className="footer__icon"></FaSnapchatSquare>   </div>

   </section>
     
      </section>
      
      <div data-aos = "slide-left" className="footer__ul3">
      <p className="footer__li2">Subscribe</p>
        <p className="footer__li4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam odit cum consectetur laudantium praesentium.</p>
     
     <div className="footer__input-holder">
     <input placeholder="subscribe" type="text" className="footer__input" />
<button className="footer__button">subscribe</button>
      </div>
     </div>
       




    </section>

    <div  className="footer__name"> made by <span className="footer__span"> Patricia-Son</span>   </div>



  </div>














      </section>



    </main>

    
    
    
    
    )






}

export default  Index3;