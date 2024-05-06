import { data } from "../db3.js";
const Featured = ({ title, para }) => {
  return (
    <>
      <div id="featuredContainer" className="mt-10 mb-10 px-32 ">
        <div id="featuredContainerChild" className="flex justify-between  ">
          <div id="feaGud_Heading">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-sm">{para}</p>
          </div>

          <div id="featuredContain" className="flex gap-2  ">
            {data.map((ele) => (
              <div
                id="fea"
                key={ele.id}
                className=" rounded-md border shadow-md justify-evenly flex-col px-4   "
              >
                <p>{ele.task1.title}</p>
                <div className="w-[50px] mt-16">
                  <img className="border" src={ele.task1.images} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr id="hr0" className="border mt-10" />
      </div>
    </>
  );
};

export default Featured;
