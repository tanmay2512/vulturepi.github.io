import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/Frame2";
import PortalPopup from "../components/PortalPopup";
import styles from "./Home.module.css";

const Home = () => {
  const router = useRouter();
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);

  const onJoinUsButtonClick = useCallback(() => {
    router.push("/SignUpPage");
  }, [router]);

  const onLearnMoreBoxClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMoreInfoBoxClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMoreInfoButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onGetStartedBtnClick = useCallback(() => {
    router.push("/LoginPage");
  }, [router]);

  const onLoginBtnButtonClick = useCallback(() => {
    router.push("/LoginPage");
  }, [router]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

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
    <>
      <main className={styles.homeMain}>
        <div className={styles.rectangleDiv} />
        <div className={styles.footerDiv}>
          <div className={styles.allTheContentsUsedInThis}>
            <p className={styles.eMailTanmay25bijalwangmai}>
              All the contents used in this site excluding some icons and image
              are a original idea of the inventors of vulture store. The idea of
              the product and the website is © of innovation vultures. In case
              of any copyright issues you can contact the official staff of
              innovation vultures. If the idea of this site is copied somewhere
              else in the internet please reach out to us and let us know. For
              any complain regarding the website or copyright issues please
              contact the below E-mails-
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
        <div className={styles.joinUsGroup}>
          <b className={styles.wHYTOWAITJOINUSNOW}>WHY TO WAIT JOIN US NOW</b>
          <button className={styles.joinUsButton} onClick={onJoinUsButtonClick}>
            <div className={styles.joinUsBox} />
            <button className={styles.jOINUSButton}>JOIN US</button>
          </button>
          <b className={styles.stillHaveDoubtsFeelFreeT}>
            Still have doubts, feel free to contact us
          </b>
        </div>
        <div className={styles.servicesSectionDiv}>
          <button className={styles.learnMoreButton}>
            <button
              className={styles.learnMoreBox}
              onClick={onLearnMoreBoxClick}
            />
            <button className={styles.jOINUSButton}>LEARN MORE</button>
          </button>
          <b className={styles.fEATURESB}>FEATURES</b>
          <b className={styles.mOSTUNIQUESMARTHOMECONTROL}>
            MOST UNIQUE SMART HOME CONTROL PANEL
          </b>
          <b className={styles.aFFORDABLEYETPOWERFULLCOMPO}>
            AFFORDABLE YET POWERFULL COMPONENTS
          </b>
          <img
            className={styles.servicesImgIcon}
            alt=""
            src="../illus-012@2x.png"
          />
          <img
            className={styles.controlPanelBox}
            alt=""
            src="../rectangle-2@2x.png"
          />
          <img
            className={styles.componentsImgBox}
            alt=""
            src="../rectangle-3@2x.png"
          />
          <b
            className={styles.qUICKEASYMAINTAINANCERE}
          >{`QUICK & EASY MAINTAINANCE & REPAIR`}</b>
          <img
            className={styles.maintananceImgBox}
            alt=""
            src="../rectangle-4@2x.png"
          />
        </div>
        <div className={styles.aboutUsSection}>
          <button
            className={styles.moreInfoButton}
            onClick={onMoreInfoButtonClick}
          >
            <button
              className={styles.moreInfoBox}
              onClick={onMoreInfoBoxClick}
            />
            <button className={styles.getStartedButton}>More Info</button>
          </button>
          <img
            className={styles.aboutUsImage}
            alt=""
            src="../illus-013@2x.png"
          />
          <b className={styles.aBOUTUS}>ABOUT US</b>
          <div className={styles.weAreVulturesOfInnovation}>
            We are vultures of innovation. Raghav Kumar and Tanmay Bijalwan are
            the Innovation Vultures . For those seeking a smart house, our
            Vulture Pi can be the ideal choice.
          </div>
        </div>
        <div className={styles.heroSectionDiv}>
          <img
            className={styles.heroSectionPhoto}
            alt=""
            src="../illus-014@2x.png"
          />
          <div className={styles.experienceTheSmartHomesOf}>
            Experience the smart homes of 2030 with
          </div>
          <b className={styles.vULTUREPiB}>VULTURE Pi</b>
          <button
            className={styles.getStartedBtn}
            onClick={onGetStartedBtnClick}
          >
            <div className={styles.rectangleDiv1} />
            <button className={styles.getStartedButton}>Get Started</button>
          </button>
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
          <button className={styles.hOMEButton} onClick={openFramePopup}>
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
            <button
              className={styles.sIGNUPButton}
              onClick={onSIGNUPButtonClick}
            >
              SIGN UP
            </button>
          </button>
        </div>
      </main>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
