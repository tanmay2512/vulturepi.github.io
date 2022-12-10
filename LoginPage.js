import Head from "next/head";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const router = useRouter();

  const onLoginBTNButtonClick = useCallback(() => {
    router.push("/Home");
  }, [router]);

  const onCreateNewAccountClick = useCallback(() => {
    router.push("/SignUpPage");
  }, [router]);

  return (
    <div className={styles.loginPageDiv} id="login">
      <img
        className={styles.loginPageImage}
        alt=""
        src="../illustration-man2@2x.png"
      />
      <div className={styles.optionsForLogin}>
        <button
          className={styles.loginBTNButton}
          onClick={onLoginBTNButtonClick}
        >
          <div className={styles.rectangleDiv} />
          <div className={styles.lOGINDiv}>LOGIN</div>
        </button>
        <Button
          className={styles.createNewAccount}
          variant="primary"
          href="/sign-up-page"
          size="lg"
          onClick={onCreateNewAccountClick}
        >
          CREATE NEW ACCOUNT
        </Button>
        <p className={styles.oRP} id="or-text">
          OR
        </p>
      </div>
      <button className={styles.forgotPasswordButton}>Forgot Password</button>
      <div className={styles.credentialsEnteringArea}>
        <Input
          className={styles.emailTextboxInput}
          variant="outline"
          width="532px"
          type="email"
          placeholder="Email"
          w="532px"
        />
        <Input
          className={styles.passwordTextboxInput}
          variant="outline"
          width="532px"
          type="password"
          placeholder="Password"
          w="532px"
        />
      </div>
      <div className={styles.loginTextsDiv}>
        <h1 className={styles.loginH1} id="login-heading">
          Login
        </h1>
        <p className={styles.heyThereWeAreThrilledTo} id="quote-text">
          <p className={styles.heyThereWe}>
            Hey there! We are thrilled to be back. Before we start , Login
            first.
          </p>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
