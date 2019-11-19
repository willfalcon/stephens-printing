import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import classNames from 'classnames';

import useSiteContext from './SiteContext';
import PhoneIcon from '../images/phone-red.svg';
import MailIcon from '../images/mail-red.svg';
import { media } from './theme';
import { formatPhone } from './utils';

const Contact = ({ className }) => {
  const {
    contactInfo: { email, phone },
    mobile,
  } = useSiteContext();

  const formattedPhone = phone ? formatPhone(phone) : null;

  return (
    <StyledContact className={classNames('contact', className)}>
      {phone && (
        <a
          className="contact__link"
          href={`tel:${formattedPhone.href}`}
          aria-label={`Call us at ${formattedPhone.display}`}
        >
          <img className="contact__icon" src={PhoneIcon} alt="Call us" />
          {!mobile && (
            <span className="contact__text phone-number">
              {formattedPhone.display}
            </span>
          )}
        </a>
      )}
      {email && (
        <a
          className="contact__link"
          href={`mailto:${email}`}
          aria-label={`Email us at ${email}`}
        >
          <img className="contact__icon" src={MailIcon} alt="Email Us" />
          {!mobile && (
            <span className="contact__text email-address">{email}</span>
          )}
        </a>
      )}
    </StyledContact>
  );
};

const StyledContact = styled.div`
  background: ${({ theme }) => rgba(theme.light, 0.5)};
  display: flex;
  justify-content: center;
  padding: 1rem;
  ${media.break`
    background: transparent;
  `}
  a {
    margin: 0 1rem;
    color: inherit;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.font.bold};
    ${media.break`
      display: flex;
      align-items: center;
    `}
  }
  img {
    height: 25px;
    ${media.break`
      display: inline;
      margin: 0 1rem;
    `}
  }
`;

export default Contact;
