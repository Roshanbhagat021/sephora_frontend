import { Link } from "react-router-dom";
import { PiCaretRightFill } from "react-icons/pi";
// react slider
import Slider from "react-slick";
// react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
    ]
  };

  return (
    <div id="bannercontainer">
      <div id="bannercontainerChild" className="mt-2 px-8 bg-white">
        <Slider{...settings}>
          {bannerData.map((ele) => (
            <div id="bannercontent" style={{border:"1px solid"}} key={ele.id} className="-ml-1 cursor-pointer">
              <div className="bannerImages">
                <img className="rounded-t-md  w-[595px] h-[363.33px] " src={ele.image} alt="image" />
              </div>
              <div
              id="textcontainer"
                className=" flex-col gap-3 h-[150px] pl-6 pt-6 rounded-b-md"
                style={{
                  backgroundColor:
                    ele.id === "1"
                      ? "#D1E1D7"
                      : ele.id === "2"
                      ? "#000000"
                      : ele.id === "3"
                      ? "#FFD7D2"
                      : ele.id === "4"
                      ? "#C8B8DC"
                      : ele.id === "5"
                      ? "#D1C4E0"
                      : ele.id === "6"
                      ? "#F6CABF"
                      : null,
                }}
              >
                <h1 className={`text-xl font-bold ${ele.id=="2"?"text-white":"text-black"}`}>{ele.name}</h1>
                <p className={`text-sm hover:underline ${ele.id=="2"?"text-white":"text-black"}`}>{ele.paragraph}</p>
                <div className={`mt-3 text-sm font-bold flex items-center gap-2 ${ele.id=="2"?"text-white":"text-black"}`}>
                  <Link id="linkShop" className="hover:underline">{ele.shop}</Link>
                  <PiCaretRightFill />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const bannerData = [
  {
    id: "1",
    image:
      "https://www.sephora.com/contentimages/homepage/041624/2024-04-25-slotting-april-hybrid-next-big-thing-single-world-site-rwd-home-page-hero-banner-4-product-english-US-handoff_01-2000x2000.jpeg?imwidth=545",
    name: "The Next Big Thing",
    paragraph: "Need-to-know hair care from on-the-rise brands",
    shop: "SHOP NOW",
  },
  {
    id: "2",
    image:
      "https://www.sephora.com/contentimages/2024-q2-fragrance-site-desktop-mobile-app-home-page-rwd-hero-banner-value-sets-1200x800-us-2868.jpg?imwidth=545",
    name: "Mother's Day Gifts",
    paragraph: "New fragrance sets for moms. Get 4X points on all scents 5/2-5/12. Use code GET4XPTS  .",
    shop: "SHOP NOW",
  },
  {
    id: "3",
    image:
      "https://www.sephora.com/contentimages/2024-oh-hair-yeah-site-desktop-mobile-home-page-rwd-hero-banner-generic-1200x800-us-2925.jpg?imwidth=545",
    name: "Oh Hair Yeah!",
    paragraph: "Save upto 50% on hair care from 4/30 unit 5/11.",
    shop: "SHOP NOW",
  },
  {
    id: "4",
    image:
      "https://www.sephora.com/contentimages/2024-04-concealer-mbc-site-desktop-mobile-app-home-page-rwd-hero-banner-multi-task-1200x800-us-can-2906.jpg?imwidth=545",
      name: "Complexsion Shortcuts",
      paragraph: "For your 'just concealer' days",
    shop: "SHOP NOW",
  },
  {
    id: "5",
    image:
      "https://www.sephora.com/contentimages/homepage/041624/2024-04-24-slotting-just-arrived-v4-standard-site-rwd-home-page-hero-banner-english-US-handoff_01-2000x2000.jpeg?imwidth=545",
    name: "This Just In ",
    paragraph: "The latest beauty from the hottest brands",
    shop: "SHOP NOW",
  },
  {
    id: "6",
    image:
      "https://www.sephora.com/contentimages/2024-05-24-slotting-bestsellers-v2-site-rwd-home-page-hero-banner-US_01.jpg?imwidth=545",
    name: "Best Selling beauty",
    paragraph: "These fan faves are worth the hype",
    shop: "SHOP NOW",
  },
];

export default Banner
