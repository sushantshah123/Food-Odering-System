// import CategorySlider from "@/components/CategorySlider";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import SliderBanner from "@/components/SliderBanner";


export default function Home() {
  return (
    <main>
      <SliderBanner/>
      <Featured/>
      {/* <CategorySlider /> */}
      <Offer/>
    </main>
  )
}
