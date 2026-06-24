import React from "react";
import styled, { css } from "styled-components";

const ButtonText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: skew(-62deg) translateX(-130%);
  transition: 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.lightColor};
`;

const Btn = styled.p`
  position: relative;
  z-index: 99;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const PageButton = styled.button`
  display: inline-block;
  padding: 0.77rem 1.875rem;
  font-size: 14px;
  letter-spacing: 0.0938rem;
  text-transform: capitalize;
  min-width: 150px;
  cursor: pointer;
  font-family: Work Sans;
  font-style: regular;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  z-index: 99;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.lightColor};

  // Secondary (default): transparent bg, fills on hover
  background: transparent;
  color: ${({ theme }) => theme.colors.lightColor};

  &:hover ${ButtonText} {
    transform: translateX(0%);
  }

  &:hover ${Btn} {
    color: ${({ theme }) => theme.colors.barColor};
  }

  // Primary: starts filled (ButtonText pre-slid in), un-fills on hover
  ${({ variant, theme }) =>
    variant === "primary" &&
    css`
      color: ${theme.colors.barColor};

      ${ButtonText} {
        transform: translateX(0%);
      }

      &:hover ${ButtonText} {
        transform: skew(-62deg) translateX(-130%);
      }

      &:hover ${Btn} {
        color: ${theme.colors.lightColor};
      }
    `}
`;

function Button({
  text,
  classname,
  handleClick,
  variant = "secondary",
  icon: Icon,
}) {
  return (
    <PageButton
      className={classname}
      variant={variant}
      onClick={(e) => handleClick(e)}
    >
      <Btn>
        {Icon && <Icon size={16} />}
        {text}
      </Btn>
      <ButtonText></ButtonText>
    </PageButton>
  );
}

export default Button;
