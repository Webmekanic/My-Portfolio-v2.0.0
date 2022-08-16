import React from "react"
import styled from "styled-components"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const FooterSection = styled.footer`
  // background-color: ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  border: 1px solid transparent;
  padding-bottom: 1.875rem;
  position: relative;
  white-space: nowrap;
  padding: 0 clamp(0.6rem, 3vw, 2.8rem);

  .horizontalLine {
    border-top: 2px solid ${({ theme }) => theme.colors.lineColor};
    margin: 1.875rem auto;
    margin-top: 3rem;
  }

  .contactAddresses {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .copyRight {
    display: flex;
    color: ${({ theme }) => theme.colors.textColor};
    font-style: Medium;
    font-size: 14px;
  }

  .myInfo:first-child {
    padding-right: 0.2rem;
    border-right: 1.2px solid ${({ theme }) => theme.colors.textColor};
  }
  .myRole {
    padding: 0 0.2rem 0 0.2rem;
    border-right: 1.2px solid ${({ theme }) => theme.colors.textColor};
    margin-right: 0.2rem;
  }
  .myEmail {
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
    cursor: pointer;
  }
  .socialIcons {
    display: flex;
    grid-gap: 1rem;
    font-size: 1.3rem;
  }
  .socialLink {
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .socialLink:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  // Media Query
  @media ${({ theme }) => theme.mediaQueries.below768} {
    position: relative;
    .socialIcons {
      // border: 2px solid red;
      position: absolute;
      top: 0;
    }
    .myRole {
      border: none;
    }

    .myEmail {
      display: none;
    }
  }
`

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <FooterSection>
      <div className="horizontalLine"></div>
      <div className="contactAddresses">
        <section className="copyRight">
          <p className="myInfo">&copy; David Aniebo {footerYear} </p>
          <p className="myInfo myRole">Software Engineer</p>
          <a className="myEmail" href="mailto:aniebovictor001@gmail.com">
            davidaniebo@gmail.com
          </a>
        </section>

        {/* social icons */}
        <div className="socialIcons">
          <a
            className="socialLink"
            href="https://github.com/Webmekanic"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://github.com/Webmekanic"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiLinkedin className="" />
          </a>
          <a
            href="https://github.com/Webmekanic"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiTwitter className="" />
          </a>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
