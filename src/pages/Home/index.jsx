import HeaderRes from "../../component/homepage/HeaderRes"
import SupportSection from "../../component/homepage/SupportSection"
import CategorySelect from "../../component/homepage/CategorySelect"
import Promotion from "../../component/homepage/Promotion"
import Review from "../../component/homepage/Review"
import BestSeller from "../../component/homepage/BestSeller"
import BlogNews from "../../component/homepage/BlogNews"
import SubcriseNotice from "../../component/homepage/SubcriseNotice"
import Footer from "../../component/Footer"
import SliderComponent from "../../component/homepage/Slider"
import { useState } from "react"

function Home() {

  const [changeData, setChangeData] = useState(false)

  return (
    <div className=" overflow-x-hidden">
      <HeaderRes changeData={changeData} setChangeData={setChangeData}/>
      <SliderComponent changeData={changeData} setChangeData={setChangeData}/>
      <SupportSection />
      <CategorySelect />
      <Promotion />
      <Review />
      <BestSeller changeData={changeData} setChangeData={setChangeData}/>
      <BlogNews />
      <SubcriseNotice />
      <Footer />
    </div>
  )
}

export default Home
