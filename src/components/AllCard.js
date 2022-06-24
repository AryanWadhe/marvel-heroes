// import React, { useState } from "react";

// export default function AllCard(props) {
//   const [img, setImg] = useState("spider.jpg");
//   const imgChangeH = () => {
//     if (img === "hulk-1.jpg") {
//       setImg("spider.jpg");
//     } else {
//       setImg("hulk-1.jpg");              
//     }
//   };
//   const imgChangeA = () => {  
//     if (img === "captain.jpg") {
//       setImg("spider.jpg");
//     } else {
//       setImg("captain.jpg");
//     }
//   };
//   const imgChangeT = () => {
//     if (img === "thor-3.jpg") {
//       setImg("spider.jpg");
//     } else {
//       setImg("thor-3.jpg");
//     }
//   };
//   return (
//     <>
//      { <section className="main_content">
//          <h2 className="main_content__title">
//            <img src={img} id={props.title} alt="" />
//            <span className="main_content__title-first">{props.fname}</span>
//            <span className="main_content__title-second">Man</span>
//        </h2>
//       </section> }
//        <div className="body_2">
//          <div className="card">
//            <div className="imgboxes" onClick={imgChangeH}>
//             <img src="hulk-1.jpg" id="hulk-1" alt="" />
//             <div className="card-main_content">
//               <h2>                <b className="main_text">Hello everyone</b>
//                </h2>
//               <p className="main_text">Lorem ipsum dolor sit amet.</p>
//         </div>          </div>
//          </div>
//          <div className="card">
//            <div className="imgboxes" onClick={imgChangeT}>
//              <img src="thor-3.jpg" id="hulk-1" alt="" />
//              <div className="card-main_content">
//                <h2>
//                  <b className="main_text">Hello everyone</b>             </h2>
//                <p className="main_text">Lorem ipsum dolor sit amet.</p>
//              </div>
//            </div>
//          </div>
//          <div className="card">
//            <div className="imgboxes" onClick={imgChangeA}>           <img src="captain.jpg" id="hulk-1" alt="" />           <div className="card-main_content">             <h2>               <strong>                 {" "}                 <b className="main_text">Hello everyone</b>               </strong>             </h2>
//                <p className="main_text">Lorem ipsum dolor sit amet.</p>
//              </div>
//            </div>
//          </div>
//          </div>
         
//      </>
//  );
// }
