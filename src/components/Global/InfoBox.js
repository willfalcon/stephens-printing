import React from 'react';
import styled from 'styled-components';

import useSiteContext from '../SiteContext';
import { media, contentWidth } from '../theme';

const InfoBox = () => {
  const {
    infoBox: { services, servicesListHeading, headingText },
    home,
    mobile,
  } = useSiteContext();

  return mobile && !home ? null : (
    <StyledInfoBox className="info-box">
      {headingText && <p className="info-box__heading-text">{headingText}</p>}
      {servicesListHeading && (
        <h2 className="info-box__list-heading">{servicesListHeading}</h2>
      )}
      {services && (
        <ServicesList className="services-list">
          {services.map(item => (
            <li key={item} className="services-list__item">
              {item}
            </li>
          ))}
        </ServicesList>
      )}
    </StyledInfoBox>
  );
};

const StyledInfoBox = styled.div`
  background: white;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  ${contentWidth}
  p {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.5;
  }
  h2 {
    color: ${({ theme }) => theme.red};
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  li {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    &:last-child {
      font-weight: 700;
    }
  }
`;

export default InfoBox;
