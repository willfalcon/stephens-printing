import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import useSiteContext from './SiteContext';
import PhoneIcon from '../images/phone-red.svg';
import MailIcon from '../images/mail-red.svg';

const Contact = () => {
  const {
    contactInfo: { email, phone },
  } = useSiteContext();

  return (
    <StyledContact>
      {phone && (
        <a href={`tel:${phone}`}>
          <img src={PhoneIcon} alt="Call us" />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`}>
          <img src={MailIcon} alt="Email Us" />
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
  a {
    margin: 0 1rem;
  }
  img {
    height: 25px;
  }
`;

export default Contact;
