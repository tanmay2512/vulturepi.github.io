import Head from "next/head";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const AboutPage = () => {
  const router = useRouter();

  const onLoginBtnButtonClick = useCallback(() => {
    router.push("/LoginPage");
  }, [router]);

  const onHOMEButtonClick = useCallback(() => {
    router.push("/Home");
  }, [router]);

  const onABOUTButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSIGNUPButtonClick = useCallback(() => {
    router.push("/SignUpPage");
  }, [router]);

  const onLoginBtnButton1Click = useCallback(() => {
    router.push("/LoginPage");
  }, [router]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.aboutPageDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.footerDiv}>
        <div className={styles.allTheContentsUsedInThis}>
          <p className={styles.eMailTanmay25bijalwangmai}>
            All the contents used in this site excluding some icons and image
            are a original idea of the inventors of vulture store. The idea of
            the product and the website is © of innovation vultures. In case of
            any copyright issues you can contact the official staff of
            innovation vultures. If the idea of this site is copied somewhere
            else in the internet please reach out to us and let us know. For any
            complain regarding the website or copyright issues please contact
            the below E-mails-
          </p>
          <p className={styles.eMailTanmay25bijalwangmai}>
            {`E-mail - `}
            <a
              className={styles.tanmay25bijalwangmailcom}
              href="mailto:tanmay25bijalwan@gmail.com"
              target="_blank"
            >
              <span className={styles.tanmay25bijalwangmailcomSpan}>
                tanmay25bijalwan@gmail.com
              </span>
            </a>
          </p>
          <p className={styles.eMailTanmay25bijalwangmai}>
            {`E-mail - `}
            <a
              className={styles.tanmay25bijalwangmailcom}
              href="mailto:innovationinfinite8@gmail.com"
              target="_blank"
            >
              <span className={styles.tanmay25bijalwangmailcomSpan}>
                innovationinfinite8@gmail.com
              </span>
            </a>
          </p>
          <p className={styles.eMailTanmay25bijalwangmai}>​</p>
          <p className={styles.eMailTanmay25bijalwangmai}>
            For product related details contact the following numbers -
          </p>
          <p className={styles.eMailTanmay25bijalwangmai}>+91 9910xxxxxx</p>
          <p className={styles.eMailTanmay25bijalwangmai}>+91 7900xxxxxx</p>
          <p className={styles.blankLineP}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.ourAimSection}>
        <b className={styles.oURAIMB}>OUR AIM</b>
        <p className={styles.inIndiaEveryoneShouldHave} id="quote-text">
          <p className={styles.eMailTanmay25bijalwangmai}>
            In India, everyone should have access to technology. As of 2021,
            India is ranked 46th on the Global Innovation Index (GII). To make
            India the top country in the global innovation index, We are working
            day and night to develop a smart home for every sort of user
            worldwide. With helpful functions like kitchen care, garden care,
            security, and many more at a reasonable price, we aim to make smart
            homes accessible to everyone.
          </p>
        </p>
        <img
          className={styles.aimImgIcon}
          alt=""
          src="../illustration-man@2x.png"
        />
      </div>
      <div className={styles.ourVisionSection}>
        <b className={styles.oURVISIONB}>OUR VISION</b>
        <img
          className={styles.visionImgIcon}
          alt=""
          src="../illustration-man1@2x.png"
        />
        <p className={styles.motherNatureIsAlwaysOnOur} id="quote-text">
          <p className={styles.eMailTanmay25bijalwangmai}>
            <span>
              Mother Nature is always on our minds. Every technical advancement,
              in our opinion, shouldn't have an adverse environmental impact.
              Prior to beginning the creation of any project, we always consider
              our mother nature.Because we care about the environment, we made
              the Vulture Pi eco-friendly by taking a working component from a
              broken device and only using it in the production of the Vulture
              Pi after making sure it works.
            </span>
          </p>
          <p className={styles.blankLineP1}>
            <span>&nbsp;</span>
          </p>
        </p>
      </div>
      <div className={styles.aboutUsHeading}>
        <b className={styles.aBOUTUS}>ABOUT US</b>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.vULTUREPIDiv} data-animate-on-scroll>
          VULTURE PI
        </div>
        <button
          className={styles.loginBtnButton}
          onClick={onLoginBtnButtonClick}
        >
          <div className={styles.loginBtnDiv} />
          <b className={styles.lOGINB}>LOGIN</b>
        </button>
        <button className={styles.hOMEButton} onClick={onHOMEButtonClick}>
          HOME
        </button>
        <button className={styles.aBOUTButton} onClick={onABOUTButtonClick}>
          ABOUT
        </button>
        <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
        <button
          className={styles.loginBtnButton1}
          onClick={onLoginBtnButton1Click}
        >
          <div className={styles.loginBtnDiv} />
          <button className={styles.sIGNUPButton} onClick={onSIGNUPButtonClick}>
            SIGN UP
          </button>
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
