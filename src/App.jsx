import Layout from "./layout/Layout"
import top from './assets/images/top-left-triangles.png'
import bottom from './assets/images/bottom-right-triangles.png'
import { FaChevronRight } from "react-icons/fa6";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function App() {

  return (
    <Layout>
      <section className="w-full h-[calc(100svh-56px)] md:h-[70vh] md:max-h-[700px] bg-[url(/images/homehero_ys.jpeg)] bg-cover bg-center relative flex flex-col justify-center items-center" style={{ backgroundColor: "rgba(64, 64, 65, 0.5)", backgroundBlendMode: "multiply" }}>
        <img src={top} alt="Top Triangles" className="absolute z-10 top-0 left-0 w-4/5 max-w-72 md:max-w-[480px] opacity-40" />
        <img src={bottom} alt="Top Triangles" className="absolute z-10 bottom-0 right-0 w-4/5 max-w-72 md:max-w-[480px] opacity-40" />
        <h1 className=" font-fjalla text-5xl leading-tight md:text-6xl text-center text-white">Yoga in the Heart of Manchester</h1>
        <h2 className="text-white text-center text-2xl md:text-3xl pt-3 pb-10">21 Day intro offer £30 - For new customers</h2>
        <button className=" font-fjalla text-dark bg-secondary py-2 px-10 text-base min-w-52">Buy Now</button>
      </section>
      <section className="w-full max-w-[1024px] px-5 mx-auto pt-20 pb-10 flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row justify-between gap-5 items-start">
          <div className="flex flex-col justify-start items-start w-full md:w-4/12 gap-2">
            <h3 className="text-primary font-fjalla text-5xl leading-snug md:text-left text-center">Yoga in the Heart of Manchester</h3>
            <div className="w-2/3 mx-auto h-1 border-t-2 border-t-secondary mb-5"></div>
            <a href="/" className="font-fjalla flex flex-row justify-start items-center gap-2"> See our packages & prices <FaChevronRight size={14} className="text-secondary" fill="#FCE227"/></a>
          </div>
          <div className="hidden flex-col justify-start items-start w-full md:w-6/12 gap-5 md:flex">
            <p>yoga soul has one of a kind yoga community, our space is here to help you grow your practice on and off the mat, creating some friends along the way.</p>
            <p>We would love you to come and say Hi.</p>
            <p>Our commitment is to be there with you every step of the way, supporting you through your journey as a yogi, and providing you with amazing teachers and a community you can rely on.</p>
            <p>You will receive a warm welcome with passionate people here to help you.</p>
            <p>Welcome to the Soul of Yoga.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center items-center relative w-full group cursor-pointer">
            <img src="/images/homehero_ys.jpeg" alt="" className="w-full aspect-video object-cover object-center relative z-0" />
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-20 flex flex-col justify-center items-center p-4">
              <h5 className="text-white font-fjalla text-2xl md:text-3xl font-normal text-center">Vinyasa Yoga</h5>
              <p className="text-white text-center leading-tight text-sm font-normal transition-all flex md:hidden md:group-hover:block py-2">Find your flow with our Vinyasa Yoga classes - connect your body to your mind through breath and movement.</p>
              <span className="font-fjalla flex-row justify-start items-center gap-2 text-white flex md:hidden md:group-hover:flex"> See our packages & prices <FaChevronRight size={14} className="text-secondary" fill="#FCE227"/></span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-full group cursor-pointer">
            <img src="/images/homehero_ys.jpeg" alt="" className="w-full aspect-video object-cover object-center relative z-0" />
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-20 flex flex-col justify-center items-center p-4">
              <h5 className="text-white font-fjalla text-2xl md:text-3xl font-normal text-center">Vinyasa Yoga</h5>
              <p className="text-white text-center leading-tight text-sm font-normal transition-all flex md:hidden md:group-hover:block py-2">Find your flow with our Vinyasa Yoga classes - connect your body to your mind through breath and movement.</p>
              <span className="font-fjalla flex-row justify-start items-center gap-2 text-white flex md:hidden md:group-hover:flex"> See our packages & prices <FaChevronRight size={14} className="text-secondary" fill="#FCE227"/></span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-full group cursor-pointer">
            <img src="/images/homehero_ys.jpeg" alt="" className="w-full aspect-video object-cover object-center relative z-0" />
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-20 flex flex-col justify-center items-center p-4">
              <h5 className="text-white font-fjalla text-2xl md:text-3xl font-normal text-center">Vinyasa Yoga</h5>
              <p className="text-white text-center leading-tight text-sm font-normal transition-all flex md:hidden md:group-hover:block py-2">Find your flow with our Vinyasa Yoga classes - connect your body to your mind through breath and movement.</p>
              <span className="font-fjalla flex-row justify-start items-center gap-2 text-white flex md:hidden md:group-hover:flex"> See our packages & prices <FaChevronRight size={14} className="text-secondary" fill="#FCE227"/></span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-full group cursor-pointer">
            <img src="/images/homehero_ys.jpeg" alt="" className="w-full aspect-video object-cover object-center relative z-0" />
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="absolute z-20 flex flex-col justify-center items-center p-4">
              <h5 className="text-white font-fjalla text-2xl md:text-3xl font-normal text-center">Vinyasa Yoga</h5>
              <p className="text-white text-center leading-tight text-sm font-normal transition-all flex md:hidden md:group-hover:block py-2">Find your flow with our Vinyasa Yoga classes - connect your body to your mind through breath and movement.</p>
              <span className="font-fjalla flex-row justify-start items-center gap-2 text-white flex md:hidden md:group-hover:flex"> See our packages & prices <FaChevronRight size={14} className="text-secondary" fill="#FCE227"/></span>
            </div>
          </div>
        </div>
        <button className=" font-fjalla text-dark bg-secondary py-2 px-10 text-base w-fit min-w-52 mx-auto">View All Classes</button>
      </section>
      <section className="w-full px-5 mx-auto my-10 py-10 flex flex-col gap-10 bg-gray">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h3 className="text-primary font-fjalla text-4xl leading-snug md:text-left text-center">Yoga in the Heart of Manchester</h3>
            <div className="w-full max-w-28 md:max-w-64 mx-auto h-1 border-t-2 border-t-secondary mb-5"></div>
          </div>
          <Splide className="pb-12 md:pb-16 slideprimary mt-5" options={{
            arrows: false,
            pagination: true,
            type: 'loop'
          }}>
            <SplideSlide>
              <div className="w-full flex flex-col-reverse md:flex-row justify-end items-center gap-4 md:gap-10 relative">
                <div className="flex flex-col justify-end items-center md:items-end gap-2 w-full md:w-4/12">
                  <h6 className="text-center md:text-right text-primary font-fjalla text-3xl">Gong Bath</h6>
                  <p className="text-center md:text-right ">yoga soul - Levenshulme | April 13, 6:00 pm -  April 13, 2024 7:00 pm</p>
                  <p className="text-center md:text-right font-light text-lg">Be bathed in the gong vibrations</p>
                </div>
                <img src="/images/homehero_ys.jpeg" alt="" className="w-full md:w-6/12 aspect-video object-cover object-center z-10 md:scale-90 origin-bottom-right" />
                <img src="/images/ys-grey-background.jpg" alt="" className="w-6/12 hidden md:block aspect-video object-cover object-center scale-90 absolute z-0 right-2 -top-2" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full flex flex-col-reverse md:flex-row justify-end items-center gap-4 md:gap-10 relative">
                <div className="flex flex-col justify-end items-center md:items-end gap-2 w-full md:w-4/12">
                  <h6 className="text-center md:text-right text-primary font-fjalla text-3xl">Gong Bath</h6>
                  <p className="text-center md:text-right ">yoga soul - Levenshulme | April 13, 6:00 pm -  April 13, 2024 7:00 pm</p>
                  <p className="text-center md:text-right font-light text-lg">Be bathed in the gong vibrations</p>
                </div>
                <img src="/images/homehero_ys.jpeg" alt="" className="w-full md:w-6/12 aspect-video object-cover object-center z-10 md:scale-90 origin-bottom-right" />
                <img src="/images/ys-grey-background.jpg" alt="" className="w-6/12 hidden md:block aspect-video object-cover object-center scale-90 absolute z-0 right-2 -top-2" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full flex flex-col-reverse md:flex-row justify-end items-center gap-4 md:gap-10 relative">
                <div className="flex flex-col justify-end items-center md:items-end gap-2 w-full md:w-4/12">
                  <h6 className="text-center md:text-right text-primary font-fjalla text-3xl">Gong Bath</h6>
                  <p className="text-center md:text-right ">yoga soul - Levenshulme | April 13, 6:00 pm -  April 13, 2024 7:00 pm</p>
                  <p className="text-center md:text-right font-light text-lg">Be bathed in the gong vibrations</p>
                </div>
                <img src="/images/homehero_ys.jpeg" alt="" className="w-full md:w-6/12 aspect-video object-cover object-center z-10 md:scale-90 origin-bottom-right" />
                <img src="/images/ys-grey-background.jpg" alt="" className="w-6/12 hidden md:block aspect-video object-cover object-center scale-90 absolute z-0 right-2 -top-2" />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </Layout>
  )
}

export default App
