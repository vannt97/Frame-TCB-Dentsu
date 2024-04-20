import { useEffect } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import ComingSoonCelebrationEvent from "../../components/ComingSoon/ComingSoonCelebrationEvent";

// import ContainerFrame from "../../components/ContainerFrame/ContainerFrame";
// import Events from "../../components/Events/Events";
// const DATA_KV_PROCESS = [
//   "/assets/images/ex-event-1.png",
//   "/assets/images/ex-event-2.png",
//   "/assets/images/ex-event-3.png",
//   "/assets/images/ex-event-4.png",
//   "/assets/images/ex-event-5.png",
// ];
// const DATA_AGENDA = [
//   {
//     title: "Opening Ceremony and Ribbon Cutting",
//     time: "From 10:00AM to 12:00PM",
//     desc: "The schedule can be adjusted based on the nature of the exhibition, the number of exhibitors, and the preferences of the organizers. Additionally, consider incorporating breaks to allow attendees to explore the exhibition at their own pace and engage with exhibitors and artists.",
//   },
//   {
//     title: "VIP Preview and Networking Lunch",
//     time: "From 12:00PM to 1:30PM",
//     desc: "Join us as we kick off the Art & Innovation Expo with a grand Opening Ceremony and Ribbon Cutting, marking the beginning of a spectacular showcase of creativity and cutting-edge technology.",
//   },
//   {
//     title: "Exhibition Open to VIP Guests and Press",
//     time: "From 1:30PM to 4:30PM",
//     desc: "The schedule can be adjusted based on the nature of the exhibition, the number of exhibitors, and the preferences of the organizers. Additionally, consider incorporating breaks to allow attendees to explore the exhibition at their own pace and engage with exhibitors and artists.",
//   },
//   {
//     title: "Guided Tours and Demonstrations",
//     time: "From 4:30PM to 7:00PM",
//     desc: "Join us as we kick off the Art & Innovation Expo with a grand Opening Ceremony and Ribbon Cutting, marking the beginning of a spectacular showcase of creativity and cutting-edge technology.",
//   },
// ];
export default function CelebrationEvent() {
  useEffect(() => {
    console.log("use effect CelebrationEvent: ");
  }, []);

  // const renderDataKvProcess = () => {
  //   let arr = [
  //     ...DATA_KV_PROCESS,
  //     ...DATA_KV_PROCESS,
  //     ...DATA_KV_PROCESS,
  //     ...DATA_KV_PROCESS,
  //   ];
  //   return arr.map((item, index) => {
  //     return (
  //       <div key={index} className="w-[400px]">
  //         <img
  //           className="w-full aspect-[300/342] lg:aspect-[396/560] h-full object-cover"
  //           src={item}
  //           alt=""
  //         />
  //       </div>
  //     );
  //   });
  // };

  // const renderAgenda = () => {
  //   return DATA_AGENDA.map((item, index) => {
  //     return (
  //       <div
  //         key={index}
  //         className={`text-[1.8rem] grid grid-cols-1 lg:grid-cols-[40%_60%] ${
  //           index == DATA_AGENDA.length - 1
  //             ? ""
  //             : "border-b-[0.5px] border-black-color"
  //         }`}
  //       >
  //         <div className="">
  //           <p className="text-[2.4rem] uppercase font-bold mb-[0.5rem]">
  //             {item.title}
  //           </p>
  //           <p className=" font-semibold text-yellow-color mb-[1.5rem]">
  //             {item.time}
  //           </p>
  //         </div>
  //         <div className="text-grey-color pb-[1.5rem] lg:pb-0">{item.desc}</div>
  //       </div>
  //     );
  //   });
  // };
  return (
    <>
      <Header />
      <section className="celebration-event">
        {/* <ComingSoon /> */}
        <ComingSoonCelebrationEvent />
      </section>
      {/* <section className="celebration-event">
        <ContainerFrame>
          <section className="kv-process">
            <div className="kv-process-ct flex w-fit justify-center gap-[1rem]">
              {renderDataKvProcess()}
            </div>
          </section>
          <section className="celebration-desc">
            <div className="ct-custom">
              <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[2rem] lg:gap-[0rem]">
                <div>
                  <div className="journey-ct">
                    <p className="journey-title-1">about the</p>
                    <p className="journey-title-3">
                      <span>gala</span> night
                    </p>
                  </div>
                </div>
                <div className="ps-[0rem] lg:ps-[2rem]">
                  <p className="text-[1.8rem] mb-[1rem] text-justify">
                    Immerse yourself in the enchanting allure of the 'Boulevard
                    Exhibition,' a grand celebration of artistic brilliance and
                    refined elegance. This meticulously curated event invites
                    patrons to traverse a magnificent boulevard adorned with a
                    breathtaking collection of diverse and captivating artworks,
                    creating an immersive experience that transcends the
                    ordinary.
                  </p>
                  <p className="text-[1.8rem] text-justify">
                    Join us as we kick off the Art & Innovation Expo with a
                    grand Opening Ceremony and Ribbon Cutting
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ContainerFrame>
        <section className="agenda">
          <div className="py-[7rem]">
            <p className="title">
              Event <span>agenda</span>
            </p>
            <div className="ct-custom">
              <div className="grid grid-cols-1 gap-[1.5rem]">
                <div className=" text-[1.8rem] hidden lg:grid grid-cols-[40%_60%] pb-[1rem] border-none lg:border-b-[0.5px] border-black-color">
                  <div className="uppercase font-semibold">key events</div>
                  <div className="font-semibold">DETAILS</div>
                </div>
                {renderAgenda()}
              </div>
            </div>
          </div>
        </section>
        <Events />
      </section> */}
      <Footer />
    </>
  );
}
