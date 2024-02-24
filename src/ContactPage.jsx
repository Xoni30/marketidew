import styles from "./style";
import { Footer, Navbar, Contact } from "./components";

const ContactPg = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Contact />
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Footer />

      </div>
    </div>
    </div>
);

export default ContactPg;
