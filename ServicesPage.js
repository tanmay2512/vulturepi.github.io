import Head from "next/head";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const router = useRouter();

  const onLoginBtnButtonClick = useCallback(() => {
    router.push("/LoginPage");
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

  const onLoginBtnButton2Click = useCallback(() => {
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
    <section className={styles.servicesPageSection}>
      <div className={styles.frameDiv}>
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
          <button
            className={styles.loginBtnButton2}
            onClick={onLoginBtnButton2Click}
          >
            <div className={styles.loginBtnDiv2} />
            <Link href="/Home">
              <a className={styles.hOMEA}>HOME</a>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <b className={styles.fEATURESB}>FEATURES</b>
      <p className={styles.whenItComesToFeaturesThe} id="quote-text">
        When it comes to features, the Vulture Pi offers  robust processing,
        affordability, speedy maintenance, high security, and environmental
        friendliness. The Vulture Pi's introductory smart home pack includes
        features like room maintenance, garden care, kitchen safety, and
        security. The Vulture Pi's pre-installed Vulture OS has a very
        user-friendly interface. BeagleBone Black, which has powerful processing
        capabilities, is included with the Vulture Pi. Additionally, the Vulture
        OS is very customizable. You can download your preferred features and
        applications from the Vulture Store, which comes with the Vulture OS.
        Depending on the supplier, the features and applications available in
        the Vulture Store may be free or paid. Once the used components have
        been verified to be in perfect condition, they can be used for Vulture
        Pi's maintenance.
      </p>
      <img className={styles.email11} alt="" src="../email-1-1@2x.png" />
      <a
        className={styles.innovationinfinite8gmailcom}
        href="mailto:Innovationinfinite8@gmail.com"
      >
        Innovationinfinite8@gmail.com
      </a>
      <img className={styles.call1Icon} alt="" src="../call-1@2x.png" />
      <div className={styles.div}>+91 7060571712</div>
      <img className={styles.linkedin1Icon} alt="" src="../linkedin-1@2x.png" />
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
      <a
        className={styles.linkedinTanmayBijalwan}
        href="www.linkedin.com/in/tanmay-bijalwan-47736b255"
        target="_blank"
      >
        Linkedin Tanmay Bijalwan
      </a>
      <img
        className={styles.heroSectionPhoto}
        alt=""
        src="../illus-01@2x.png"
      />
      <p className={styles.forAnyIssueRelatedToTheS} id="quote-text">
        For any issue related to the services and features we provide feel free
        to contact us.
      </p>
      <img
        className={styles.heroSectionPhoto1}
        alt=""
        src="../illus-011@2x.png"
      />
      <b className={styles.cONTACTUSB}>CONTACT US</b>
    </section>
  );
};

export default ServicesPage;
