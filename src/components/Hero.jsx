import styles from "../style";
import { discount, robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mt-8 mb-16`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-1">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">10%</span> Discount For New Realtors.{" "}
            
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mr-15">
            Marketing <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Made Simple</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Realtors.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        We help realtors craft winning marketing campaigns
        that attract the right clients. <br/> Our strategies never fail to satisfy. <br className="sm:block hidden" />

        <div className={`mt-6`} >  <Button /> </div>
       
        
        </p> 
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="mascot" className="w-[403px] h-[527px] z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[1] w-[80%] h-[80%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
