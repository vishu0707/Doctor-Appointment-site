import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className="md:mx-10">
        <hr />
        <div className={`${styles.footerContainer}`}>
          <div>
            <p className={`${styles.logo}`}>.logo</p>
            <p
              className={`${styles.lorem} w-full md:w-2/3 text-gray-600 leading-6`}
            >
             Welcome to our doctor appointment platform, where convenience meets care.
              Our mission is to streamline healthcare access by connecting patients 
             with trusted healthcare professionals effortlessly. With user-friendly 
             booking features and a commitment to patient-centric care.
            </p>
          </div>

          <div>
            <p className={`${styles.comapany}`}>Company</p>
            <ul className="gap-4">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.comapany}`}>GET IN TOUCH</h4>
            <p>+91 7507205500</p>
            <p>servicemedico@gmail.com</p>
          </div>
        </div>
        <div>   
          <hr />
          <p className="py-10 text-center">
            Copyright © 2025 - All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
