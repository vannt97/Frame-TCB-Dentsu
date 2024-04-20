// import { useEffect, useState } from "react";
// import { Pagination } from "antd";
// import ContainerFrame from "../../components/ContainerFrame/ContainerFrame";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
// import { numberWithFullStop } from "../../utils/common";
import ComingSoonCSRGallery from "../../components/ComingSoon/ComingSoonCSRGallery";

// const WINNERS = [
//   {
//     img: "/assets/images/ex-img.png",
//     name: "Kenny Truong",
//     likes: 278,
//     money: "682578",
//   },
//   {
//     img: "/assets/images/ex-img.png",
//     name: "Kenny Truong",
//     likes: 278,
//     money: "682578",
//   },
//   {
//     img: "/assets/images/ex-img.png",
//     name: "Kenny Truong",
//     likes: 278,
//     money: "682578",
//   },
// ];
export default function CSRGallery() {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  // const renderWinners = () => {
  //   return WINNERS.map((item, index) => {
  //     return (
  //       <div key={index} className="winners-person">
  //         <img src={item.img} loading="lazy" alt="" />
  //         <div className="winners-person-card">
  //           <div>
  //             <p className="">{item.name}</p>
  //             <div className="winners-person-detail detail-likes-donated">
  //               <span>
  //                 {item.likes} <span>likes</span>
  //               </span>{" "}
  //               <span>•</span>{" "}
  //               <span>
  //                 {numberWithFullStop(item.money)}{" "}
  //                 <div className="underline inline-block  underline-offset-2">
  //                   đ
  //                 </div>{" "}
  //                 <span>donated</span>
  //               </span>
  //             </div>
  //           </div>
  //           <div>
  //             <img loading="lazy" src="/assets/svg/gold-icon.svg" alt="" />
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  // const renderPerformanceList = () => {
  //   let arr = new Array(10).fill("1", 0, 10);
  //   return arr.map((item, key) => {
  //     return (
  //       <div key={key} className={item}>
  //         <div className="mb-[0.5rem] md:mb-[1.25rem]">
  //           <img
  //             style={{
  //               aspectRatio: "245 / 353",
  //               width: "100%",
  //             }}
  //             className=""
  //             src="/assets/images/ex-image-performance.png"
  //             alt=""
  //           />
  //         </div>
  //         <p className="text-[1.4rem] md:text-[2.4rem] font-bold ">
  //           Ethan Nguyen
  //         </p>
  //         <div className="detail-likes-donated">
  //           <span>
  //             278 <span>likes</span>
  //           </span>{" "}
  //           <span>•</span>{" "}
  //           <span>
  //             {numberWithFullStop(600000)}{" "}
  //             <div className="underline inline-block  underline-offset-2">
  //               đ
  //             </div>{" "}
  //             <span>donated</span>
  //           </span>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  return (
    <>
      <Header />
      <section className="csr-gallery">
        {/* <ContainerFrame>
          <section className="donation">
            <p className="donation-title title">
              total <span>donation amount</span> (vnd)
            </p>

            <div className="donation-amount">
              <div className="donation-amount-number">
                <span>8</span>
              </div>
              <div className="donation-amount-number">
                <span>3</span>
              </div>
              <div className="donation-amount-number">
                <span>0</span>
              </div>
              <div className="donation-amount-dot">
                <span>.</span>
              </div>
              <div className="donation-amount-number">
                <span>4</span>
              </div>
              <div className="donation-amount-number">
                <span>4</span>
              </div>
              <div className="donation-amount-number">
                <span>4</span>
              </div>
              <div className="donation-amount-dot">
                <span>.</span>
              </div>
              <div className="donation-amount-number">
                <span>2</span>
              </div>
              <div className="donation-amount-number">
                <span>2</span>
              </div>
              <div className="donation-amount-number">
                <span>2</span>
              </div>
            </div>
          </section>
          <section className="winners">
            <p className="winners-title title">
              top <span>winners of the weeks</span>
            </p>
            <div className="ct-custom">
              <div className="grid grid-cols-3 gap-10">{renderWinners()}</div>
            </div>
            <div className="text-center">
              <button className="btn btn-3">view all submissions</button>
            </div>
          </section>
        </ContainerFrame>
        <section className="ar-game">
          <div className="ct-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="ar-game-left">
                <img
                  className="mt-[3rem] md:mt-[5rem] mb-[0rem] lg:my-[5rem] mx-auto"
                  src="/assets/images/phone.png"
                  alt=""
                />
              </div>
              <div className="ar-game-right">
                <div>
                  <h4 className="ar-game-h-1 text-[3.2rem] md:text-[4.8rem] leading-[4rem] md:leading-[6.4rem] uppercase mb-[2rem]">
                    <b>ar game</b>
                  </h4>
                  <div className="ar-game-dash"></div>
                  <div className="my-[2rem]">
                    <h5 className="ar-game-h-2 uppercase text-[2.4rem] mb-[1rem]">
                      <b>Operational information</b>
                    </h5>
                    <p>
                      An immersive augmented reality (AR) game on Facebook that
                      takes your gaming experience to the next level! Embark on
                      a thrilling adventure, where the real world blends
                      seamlessly with the virtual, creating an unparalleled
                      gaming escapade.{" "}
                    </p>
                  </div>
                  <div className="ar-game-dash"></div>
                  <div className="my-[2rem]">
                    <h5 className="ar-game-h-2 text-[2.4rem] uppercase font-bold mb-[2rem]">
                      Rules of participartion
                    </h5>
                    <h6 className="mb-[1rem]">
                      <b>Eligibility</b>
                    </h6>
                    <p className="mb-[2rem]">
                      The game is intended for players of all ages; however,
                      users under the age of 13 should have parental consent.
                    </p>
                    <h6 className="mb-[1rem]">
                      <b>Personal safety</b>
                    </h6>
                    <p className="mb-[2rem]">
                      Always prioritize your safety and the safety of others. Do
                      not engage in gameplay in hazardous or restricted areas.
                    </p>
                  </div>
                  <div className="ar-game-btns">
                    <button className="btn btn-3">JOIN NOW</button>
                    <button className="btn btn-3">
                      VIEW INSTRUCTIONAL IDEO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="performance" className="performance">
          <p className="performance-title title">
            <span>performance</span> list
          </p>
          <div className="ct-custom">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[1rem] gap-y-[3rem] mb-[5rem]">
                  {renderPerformanceList()}
                </div>
                <Pagination defaultCurrent={1} total={50} />
              </>
            )}
          </div>
        </section> */}
        {/* <ComingSoon /> */}
        <ComingSoonCSRGallery />
      </section>
      <Footer />
    </>
  );
}

{
  /* <section id="performance" className="performance">
        <p className="performance-title title">
          <span>performance</span> list
        </p>
        <div className="ct-custom">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[1rem] gap-y-[3rem] mb-[5rem]">
                {renderPerformanceList()}
              </div>
              <Pagination defaultCurrent={1} total={50} />
            </>
          )}
        </div>
      </section> */
}

{
  /* <section className="ar-game">
        <div className="ct-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="ar-game-left">
              <img
                className="mt-[3rem] md:mt-[5rem] mb-[0rem] lg:my-[5rem] mx-auto"
                src="/assets/images/phone.png"
                alt=""
              />
            </div>
            <div className="ar-game-right">
              <div>
                <h4 className="ar-game-h-1 text-[3.2rem] md:text-[4.8rem] leading-[4rem] md:leading-[6.4rem] uppercase mb-[2rem]">
                  <b>ar game</b>
                </h4>
                <div className="ar-game-dash"></div>
                <div className="my-[2rem]">
                  <h5 className="ar-game-h-2 uppercase text-[2.4rem] mb-[1rem]">
                    <b>Operational information</b>
                  </h5>
                  <p>
                    An immersive augmented reality (AR) game on Facebook that
                    takes your gaming experience to the next level! Embark on a
                    thrilling adventure, where the real world blends seamlessly
                    with the virtual, creating an unparalleled gaming escapade.{" "}
                  </p>
                </div>
                <div className="ar-game-dash"></div>
                <div className="my-[2rem]">
                  <h5 className="ar-game-h-2 text-[2.4rem] uppercase font-bold mb-[2rem]">
                    Rules of participartion
                  </h5>
                  <h6 className="mb-[1rem]">
                    <b>Eligibility</b>
                  </h6>
                  <p className="mb-[2rem]">
                    The game is intended for players of all ages; however, users
                    under the age of 13 should have parental consent.
                  </p>
                  <h6 className="mb-[1rem]">
                    <b>Personal safety</b>
                  </h6>
                  <p className="mb-[2rem]">
                    Always prioritize your safety and the safety of others. Do
                    not engage in gameplay in hazardous or restricted areas.
                  </p>
                </div>
                <div className="ar-game-btns">
                  <button className="btn btn-3">JOIN NOW</button>
                  <button className="btn btn-3">VIEW INSTRUCTIONAL IDEO</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="performance">
          <p className="performance-title">
            <span>performance</span> list
          </p>
          <div className=""></div>
        </section>
      </section> */
}

//   <>
//   <Header />
//   <section className="csr-gallery">
//     <ContainerFrame>
//       <section className="donation">
// <p className="donation-title">
//   total <span>donation amount</span> (vnd)
// </p>
// <div className="donation-amount">
//   <div className="donation-amount-number">
//     <span>8</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>3</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>0</span>
//   </div>
//   <div className="donation-amount-dot">
//     <span>.</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>4</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>4</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>4</span>
//   </div>
//   <div className="donation-amount-dot">
//     <span>.</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>2</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>2</span>
//   </div>
//   <div className="donation-amount-number">
//     <span>2</span>
//   </div>
//           </section>

// <section className="csr-gallery">
//   <ContainerFrame>
//     <section className="donation">
//       <p className="donation-title title">
//         total <span>donation amount</span> (vnd)
//       </p>
//       <div className="donation-amount">
//         <div className="donation-amount-number">
//           <span>8</span>
//         </div>
//       </section>
//       <section className="winners">
//         <p className="winners-title">
//           top <span>winners of the weeks</span>
//         </p>
//         <div className="ct-custom">
//           <div className="grid grid-cols-3 gap-10">{renderWinners()}</div>
//         </div>
//         <div className="text-center">
//           <button className="btn btn-3">view all submissions</button>
//         </div>
//       </section>
//     </ContainerFrame>

//     <section className="ar-game">
//       <div className="ct-custom">
//         <div className="grid grid-cols-2">
//           <div>
//             <img
//               className="my-[3rem]"
//               src="/assets/images/phone.png"
//               alt=""
//             />
//           </div>
//           <div>
//             <div>
//               <h4 className="ar-game-h-1 text-[4.8rem] leading-[6.4rem] uppercase">
//                 <b>ar game</b>
//               </h4>
//               <div></div>
//               <div>
//                 <h5 className="ar-game-h-2 uppercase">
//                   <b>Operational information</b>
//                 </h5>
//                 <p>
//                   An immersive augmented reality (AR) game on Facebook that
//                   takes your gaming experience to the next level! Embark on
//                   a thrilling adventure, where the real world blends
//                   seamlessly with the virtual, creating an unparalleled
//                   gaming escapade.{" "}
//                 </p>
//               </div>
//               <div></div>
//               <div>
//                 <h5 className="ar-game-h-2">Rules of participartion</h5>
//                 <h6 className="">
//                   <b>Eligibility</b>
//                 </h6>
//                 <p>
//                   The game is intended for players of all ages; however,
//                   users under the age of 13 should have parental consent.
//                 </p>
//                 <h6 className="">
//                   <b>Personal safety</b>
//                 </h6>
//                 <p>
//                   Always prioritize your safety and the safety of others. Do
//                   not engage in gameplay in hazardous or restricted areas.
//                 </p>
//               </div>
//               <div>
//                 <button className="btn btn-3">JOIN NOW</button>
//                 <button className="btn btn-3">
//                   VIEW INSTRUCTIONAL IDEO
//                 </button>
//               </div>
//         <div className="donation-amount-dot">
//           <span>.</span>
//         </div>
//         <div className="donation-amount-number">
//           <span>4</span>
//         </div>
//         <div className="donation-amount-number">
//           <span>4</span>
//         </div>
//         <div className="donation-amount-number">
//           <span>4</span>
//         </div>
//         <div className="donation-amount-dot">
//           <span>.</span>
//         </div>
//         <div className="donation-amount-number">
//           <span>2</span>
//         </div>
//         <div className="donation-amount-number">
//           <span>2</span>
//         </div>
//         <div className="donation-amount-number">
//           <span>2</span>
//         </div>
//       </div>
//     </section>
//     <section className="winners">
//       <p className="winners-title title">
//         top <span>winners of the weeks</span>
//       </p>
//       <div className="ct-custom">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {renderWinners()}
//         </div>
//       </div>
//       <div className="text-center">
//         <button className="btn btn-3">view all submissions</button>
//       </div>
//     </section>
//   </ContainerFrame>

//   <Footer />
// </>

// </section>
