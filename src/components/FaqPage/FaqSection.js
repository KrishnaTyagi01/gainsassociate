import React, { useRef, useState } from 'react';
// import { useIntl } from 'gatsby-plugin-intl';
import Scrollspy from 'react-scrollspy';
import cns from 'classnames';
import { enGB, fr } from 'date-fns/locale';

import ArrowDown from '../../assets/svgs/arrow-down-faq.svg';
import cn from './styles.module.scss';
import apidata from './data.json'

// console.log('JSON ',apidata)

const data = apidata.data;
function FaqItem ( { title, content } ) {
  const [isVisible, setIsVisible] = useState( false );

  return (
    <div className={cns( cn.faqCard, { [cn.active]: isVisible } )}>
      <div
        className={cns(
          cn.faqCardName,
          ' py-3 d-flex justify-content-between align-items-start'
        )}
        onClick={() => setIsVisible( !isVisible )}
      >
        <p className={cns(
          cn.faqCardTitle,
          { [cn.active]: isVisible },
          'm-0 font-weight-medium'
        )}>{title}</p>{' '}
        <div>
          {/* <ArrowDown  /> */}

          <img src={ArrowDown} height="12px" className={cns( { [cn.arrowUp]: isVisible } )} style={{ background: 'transparent' }} />
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={cns( 'px-3 py-4', cn.faqContent, {
          'd-none': !isVisible,
        } )}
      />
    </div>
  );
}

export default function FaqPage ( props ) {
  const sections = data.allFaqJson.edges.filter( ( { node } ) => node.lang === "en" ).map( ( node, index ) => ( {
    name: `faq-section-${index}`,
    // ref: useRef(null),
  } ) );
  sections[0].ref = useRef( null );
  sections[1].ref = useRef( null );
  sections[2].ref = useRef( null );
  sections[3].ref = useRef( null );

  return (
    <>
      {/* <div className="py-4 page-heading-bg">
            <div className="container text-center text-primary">
            <h1 className={cn.bigTitle}>{intl.formatMessage({ id: "faq.title" })}</h1>
            </div>
        </div> */}

      <div className="container mt-lg-4 pb-md-5">
        <div className="row justify-content-around">
          <div className={cns( 'col-12 col-lg-3 px-0', cn.sticky )}>
            <Scrollspy
              items={sections.map( item => item.name )}
              currentClassName={cn.activeSection}
              className={cns(
                cn.subNav,
                'd-flex mb-2 d-lg-flex flex-lg-column flex-lg-align-start'
              )}
              componentTag="div"
              offset={-100}
            >
              {data.allFaqJson.edges.filter( ( { node } ) => node.lang === "en" ).map( ( { node }, index ) => (
                <button
                  key={index}
                  className={cns(
                    'text-lg-left pt-lg-3 pb-lg-0 py-2',
                    cn.subNavBtn
                  )}
                  onClick={() => {
                    window.scrollTo( {
                      behavior: 'smooth',
                      top: sections[index].ref.current.offsetTop - 90,
                    } );
                  }}
                >
                  {node.name}
                </button>
              ) )}
            </Scrollspy>
          </div>

          <div className="col-12 col-lg-9 ml-lg-5 ps-md-5">
            {data.allFaqJson.edges.filter( ( { node } ) => node.lang === "en" ).map( ( { node }, index ) => (
              <div
                className="pb-3 mt-3 mt-lg-5 pt-md-3"
                id={`faq-section-${index}`}
                key={index}
                ref={sections[index].ref}
              >
                <h2 className={cn.faqName}>{node.name}</h2>
                <div>
                  {node.faq.map( ( node, index ) => (
                    <FaqItem key={index} {...node} />
                  ) )}
                </div>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </>
  );
}
