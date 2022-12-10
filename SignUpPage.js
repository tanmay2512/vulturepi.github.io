import Head from "next/head";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as BsButton } from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const router = useRouter();

  const onLoginSignUpClick = useCallback(() => {
    window.open("/LoginPage");
  }, []);

  const onSignUpBTNClick = useCallback(() => {
    router.push("/Home");
  }, [router]);

  return (
    <div className={styles.signUpPage} id="main-div">
      <div className={styles.signUpTextWithImages}>
        <img
          className={styles.signUpPageImg}
          alt=""
          src="../illustration-man3@2x.png"
        />
        <p className={styles.helloThereNewAroundHereD} id="quote-text">
          <p className={styles.helloThereNew}>
            hello there new around here? Do not fret. Describe yourself. A short
            sign-up could assist us in creating a customised experience.
          </p>
        </p>
        <h1 className={styles.sIGNUPH1} id="login-heading">
          SIGN UP
        </h1>
      </div>
      <Input
        className={styles.phoneNumberInput}
        variant="outline"
        width="532px"
        type="number"
        placeholder="Phone Number"
        w="532px"
      />
      <Input
        className={styles.homeAddressTextbox}
        variant="outline"
        width="532px"
        placeholder="Home Address"
        w="532px"
      />
      <Input
        className={styles.passwordTextareaInput}
        variant="outline"
        width="532px"
        type="password"
        placeholder="Password"
        w="532px"
      />
      <Input
        className={styles.emailTextboxInput}
        variant="outline"
        width="532px"
        type="email"
        placeholder="Email"
        w="532px"
      />
      <Input
        className={styles.nameTextboxInput}
        variant="outline"
        width="532px"
        placeholder="Name"
        w="532px"
      />
      <BsButton
        className={styles.loginSignUp}
        variant="primary"
        href="/login-page"
        size="lg"
        onClick={onLoginSignUpClick}
      >
        LOGIN
      </BsButton>
      <p className={styles.oRP} id="or-text">
        OR
      </p>
      <button className={styles.signUpBTN} onClick={onSignUpBTNClick}>
        <div className={styles.rectangleDiv} />
        <div className={styles.sIGNUPDiv}>SIGN UP</div>
      </button>
    </div>
  );
};

export default SignUpPage;
