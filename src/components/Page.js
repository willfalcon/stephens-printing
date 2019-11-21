import React from 'react';
import styled from 'styled-components';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { useTransition, animated } from 'react-spring';

import Gallery from './Gallery';
import Content from './Content';
import QuoteForm from './QuoteForm/QuoteForm';
import { media } from './theme';

const Page = ({ images = [], title, _rawContent, formBuilder }) => {
  return (
    <>
      <TransitionState>
        {stateProps => (
          <Transitioner {...stateProps}>
            <PageContainer>
              {images.length > 0 && <Gallery images={images} />}
              {(title || _rawContent || formBuilder) && (
                <PageContent>
                  {title && <h1>{title}</h1>}
                  {_rawContent && <Content>{_rawContent}</Content>}
                  {formBuilder && formBuilder.length && (
                    <QuoteForm fields={formBuilder} />
                  )}
                </PageContent>
              )}
            </PageContainer>
          </Transitioner>
        )}
      </TransitionState>
    </>
  );
};

const Transitioner = ({ transitionStatus, children }) => {
  const transition = useTransition(
    ['entering', 'entered'].includes(transitionStatus),
    null,
    {
      from: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
      leave: {
        opacity: 1,
      },
    }
  );

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          {children}
        </animated.div>
      )
  );
};

const PageContent = styled.div`
  padding: 0 2.5rem;
  font-weight: 500;
  line-height: 1.35;
  ${media.break`
    background: white;
    padding: .5rem 2.5rem 2.5rem;
    max-height: 100%;
    box-shadow: ${({ theme }) => theme.shadow};

    h1 {
      margin-top: 1rem;
    }
  `}
`;
const PageContainer = styled.main``;

export default Page;
