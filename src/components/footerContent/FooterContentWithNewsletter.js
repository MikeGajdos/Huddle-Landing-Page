import React from "react";
import { Facebook, Twitter, Phone, Instagram, Email, Logo } from "../icons";
import { StyledFooterContentWrapper } from "./StyledFooterContentWrapper";
import { StyledButton } from "../button/StyledButton";

const FooterContentWithNewsletter = () => {
  return (
    <>
      <StyledFooterContentWrapper className="footer__content">
        <div className="footer__info">
          <div className="footer__info__logo mg-bottom-md">
            <Logo />
          </div>
          <p className="mg-bottom-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="phoneNumber">
            <Phone />
            <span>Phone: +1-543-123-4567</span>
          </div>
          <div className="emailAddress">
            <Email />
            <span>example@huddle.com</span>
          </div>
        </div>
        <div className="footer__newsletter">
          <h5 className="mg-bottom-sm">Newsletter</h5>
          <p className="mg-bottom-md">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address.
          </p>
          <div className="footer__newsletter__form">
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" />
            <StyledButton subscribe>Subscribe</StyledButton>
          </div>
        </div>
        <div className="footer__social-icons">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </div>
      </StyledFooterContentWrapper>
      <p className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/MikeGajdos" target="_blank">
          Justasemicolon
        </a>
        .
      </p>
    </>
  );
};

export default FooterContentWithNewsletter;
