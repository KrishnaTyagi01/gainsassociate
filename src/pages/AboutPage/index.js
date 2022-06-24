import React, { useRef, useState } from 'react';
import Img from 'gatsby-image';
import Scrollspy from 'react-scrollspy';
import Modal from 'react-modal';
import cns from 'classnames';
import { useIntl } from 'gatsby-plugin-intl';

import Layout from 'components/Layout';
import Meta from 'components/Meta';
import FacebookIcon from 'components/icons/facebook.local.svg';
import TwitterIcon from 'components/icons/twitter.local.svg';
import LinkedinIcon from 'components/icons/linkedin.local.svg';
import DotIllustration from 'components/icons/dot-illustration.local.svg';
import OvalIllustration from 'components/icons/oval-illustration.local.svg';
import CloseIcon from 'components/icons/close.local.svg';
import ArrowLeftIcon from 'components/icons/arrow-left.local.svg';
import StoryIllustration from './story.local.svg';
import VisionIllustration from './vision.local.svg';
import SkillIcon from './skill.local.svg';
import LongVisionIcon from './longvision.local.svg';
import MarketIcon from './market.local.svg';
import cn from './styles.module.scss';

function scrollInto(el) {
  window.scrollTo({
    behavior: 'smooth',
    top: el.current.offsetTop - 46,
  });
}

export default function AboutPage(props) {
  const { data } = props;
  const intl = useIntl();
  const [activeSection, setActiveSection] = useState('');
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const storyRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const isTeamMemberModalOpen = !!activeTeamMember;

  function hideModal() {
    setActiveTeamMember(null);
  }

  return (
    <Layout {...props}>
      <Meta {...props} />
      <div className="py-4 page-heading-bg">
        <div className="container text-center text-primary">
          <h1 className={cn.bigTitle}>{intl.formatMessage({ id: "about.aboutUs" })}</h1>
        </div>
      </div>
      <Scrollspy
        items={['story', 'vision', 'values', 'team']}
        className={cns(cn.subNav, 'd-flex bg-white mb-2 d-lg-none')}
        componentTag="div"
        currentClassName={cn.activeSection}
        offset={-64}
      >
        <button
          className="btn btn-link py-2"
          onClick={() => scrollInto(storyRef)}
        >
          Our Story
        </button>
        <button
          className="btn btn-link py-2"
          onClick={() => scrollInto(visionRef)}
        >
          Vision
        </button>
        <button
          className="btn btn-link py-2"
          onClick={() => scrollInto(valuesRef)}
        >
          Values
        </button>
        <button
          className="btn btn-link py-2"
          onClick={() => scrollInto(teamRef)}
        >
          Team
        </button>
      </Scrollspy>
      <div className="bg-white">
        <div className="container py-lg-5">
          <div className="py-3" ref={storyRef} id="story">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h3
                  className={cns(
                    cn.sectionTitle,
                    'text-primary text-center text-lg-left'
                  )}
                >
                  {intl.formatMessage({ id: "about.story" })}
                </h3>
              </div>
            </div>
            <div className="row d-lg-flex flex-lg-row-reverse">
              <div className="col-12 col-lg-6 text-center mt-2 mt-lg-4">
                <StoryIllustration className={cn.aboutIllustration} />
              </div>
              <div className="col-lg-6 mt-4 mt-lg-2">
                <p>
                {intl.formatMessage({ id: "about.story1" })}
                </p>

                <p>
                {intl.formatMessage({ id: "about.story2" })}{' '}
                </p>

                <p>
                {intl.formatMessage({ id: "about.story3" })}
                </p>
              </div>
            </div>
          </div>
          <div className="py-3" ref={visionRef} id="vision">
            <div className="row">
              <div className="col-12 col-lg-6 offset-lg-6">
                <h3
                  className={cns(
                    cn.sectionTitle,
                    'text-primary text-center text-lg-left'
                  )}
                >
                  {intl.formatMessage({ id: "about.vision" })}
                </h3>
              </div>
            </div>
            <div className="row d-lg-flex flex-lg-row">
              <div className="col-12 col-lg-6 text-center mt-2 mt-lg-4">
                <VisionIllustration className={cn.aboutIllustration} />
              </div>
              <div className="col-12 col-lg-6 mt-4 mt-lg-2">
                <p>
                {intl.formatMessage({ id: "about.vision1" })}
                </p>

                <p>
                {intl.formatMessage({ id: "about.vision2" })}
                </p>

                <p>
                {intl.formatMessage({ id: "about.vision3" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn.valuesWrapper} ref={valuesRef} id="values">
        <div
          className={cns(
            'py-4 py-lg-5 px-lg-5 text-white position-relative overflow-hidden container',
            cn.valuesSection
          )}
        >
          <div>
            <DotIllustration
              className={cns(
                'position-absolute top-0 right-0 text-white',
                cn.dot
              )}
            />
            <OvalIllustration
              className={cns('position-absolute text-primary', cn.oval)}
            />
          </div>
          <div className="container my-lg-4">
            <h3 className={cns(cn.sectionTitle)}>{intl.formatMessage({ id: "about.values" })}</h3>
            <div className="mt-4 mt-lg-5 d-flex flex-column flex-lg-row">
              <div className="mr-lg-5">
                <SkillIcon className="mb-3" className={cn.valueIcon} />
              </div>
              <div className="mt-3 mt-lg-0">
                <span className={cns('font-weight-medium', cn.valueTitle)}>
                {intl.formatMessage({ id: "about.skinInTheGame" })}
                </span>
                <p className={cns(cn.valueDescription, 'mt-2')}>
                {intl.formatMessage({ id: "about.values1" })}
                </p>
              </div>
            </div>

            <div className="mt-4 mt-lg-5 d-flex flex-column flex-lg-row">
              <div className="mr-lg-5">
                <LongVisionIcon className="mb-3" className={cn.valueIcon} />
              </div>
              <div className="mt-3 mt-lg-0">
                <span className={cns('font-weight-medium', cn.valueTitle)}>
                {intl.formatMessage({ id: "about.longTermVision" })}
                </span>
                <p className={cns(cn.valueDescription, 'mt-2')}>
                {intl.formatMessage({ id: "about.values2-1" })}<br />
                {intl.formatMessage({ id: "about.values2-2" })}{' '}
                </p>
              </div>
            </div>

            <div className="mt-4 mt-lg-5 d-flex flex-column flex-lg-row">
              <div className="mr-lg-5">
                <MarketIcon className="mb-3" className={cn.valueIcon} />
              </div>
              <div className="mt-3 mt-lg-0">
                <span className={cns('font-weight-medium', cn.valueTitle)}>
                {intl.formatMessage({ id: "about.collaboration" })}
                </span>
                <p className={cns(cn.valueDescription, 'mt-2')}>
                {intl.formatMessage({ id: "about.values3-1" })}<br />
                {intl.formatMessage({ id: "about.values3-2" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cns('py-5 mt-lg-5')}>
        <div className="container pt-3 lg:pt-5" ref={teamRef} id="team">
          <h3 className={cns(cn.bigTitle, 'text-primary text-center')}>
          {intl.formatMessage({ id: "about.team" })}
          </h3>
          <div className="row justify-content-center">
            {data.allTeamJson.edges.filter(({ node }) => node.lang === intl.locale).map(({ node }) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex" key={node.id}>
                <div
                  className={cns(
                    'pt-5 pb-3 d-flex justify-content-center align-items-center flex-column w-100',
                    cn.teamCard
                  )}
                >
                  <div className={cn.teamAvatar}>
                    <Img fluid={node.avatar.childImageSharp.fluid} />
                  </div>
                  <div className="mt-4">
                    <span className={cn.teamMemberName}>{node.name}</span>
                    <span className={cn.teamMemberPosition}>
                      {node.designation}
                    </span>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    {node.facebookUrl ? (
                      <a
                        href={node.facebookUrl}
                        className={cn.socialIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </a>
                    ) : null}
                    {node.twitterUrl ? (
                      <a
                        href={node.twitterUrl}
                        className={cn.socialIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    ) : null}
                    {node.linkedinUrl ? (
                      <a
                        href={node.linkedinUrl}
                        className={cn.socialIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon />
                      </a>
                    ) : null}
                  </div>

                  <div
                    className={cns(
                      'mt-4 mx-4 pt-3 d-flex align-items-center justify-content-center',
                      cn.viewBioWrapper
                    )}
                  >
                    <button
                      className={cns('btn btn-outline-primary', cn.viewBio)}
                      onClick={() => {
                        setActiveTeamMember(node);
                      }}
                    >
                      {intl.formatMessage({ id: "about.viewBio" })}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={cns('py-lg-5 mb-5')}>
        <div className="container">
          <h3 className={cns(cn.bigTitle, 'text-primary text-center')}>
          {intl.formatMessage({ id: "about.advisory" })}
          </h3>
          <div className="row justify-content-center">
            {data.advisoryTeamJson.edges.filter(({ node }) => node.lang === intl.locale).map(({ node }) => (
              <div className="col-12 col-md-4" key={node.id}>
                <div
                  className={cns(
                    'pt-5 pb-3 d-flex justify-content-center align-items-center flex-column w-100',
                    cn.teamCard
                  )}
                >
                  <div className={cn.teamAvatar}>
                    <Img fluid={node.avatar.childImageSharp.fluid} />
                  </div>
                  <div className="mt-4">
                    <span className={cn.teamMemberName}>{node.name}</span>
                    <span className={cn.teamMemberPosition}>
                      {node.designation}
                    </span>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    {node.facebookUrl ? (
                      <a
                        href={node.facebookUrl}
                        className={cn.socialIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </a>
                    ) : null}
                    {node.twitterUrl ? (
                      <a
                        href={node.twitterUrl}
                        className={cn.socialIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    ) : null}
                    {node.linkedinUrl ? (
                      <a
                        href={node.linkedinUrl}
                        className={cn.socialIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon />
                      </a>
                    ) : null}
                  </div>
                  <div
                    className={cns(
                      'mt-4 mx-4 pt-3 d-flex align-items-center justify-content-center',
                      cn.viewBioWrapper
                    )}
                  >
                    <button
                      className={cns('btn btn-outline-primary', cn.viewBio)}
                      onClick={() => {
                        setActiveTeamMember(node);
                      }}
                    >
                      {intl.formatMessage({ id: "about.viewBio" })}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isTeamMemberModalOpen}
        contentLabel="Team Modal"
        onRequestClose={hideModal}
        overlayClassName={cns('modal', cn.modal, {
          'd-flex': isTeamMemberModalOpen,
        })}
        className="modal-dialog modal-dialog-scrollable modal-lg"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={hideModal}
              className={cns(
                'btn btn-link p-0 p-lg-2 px-lg-2 d-none d-lg-block',
                cn.closeBtn
              )}
            >
              <CloseIcon />
            </button>

            <button className="btn btn-link p-0">
              <ArrowLeftIcon
                onClick={hideModal}
                className="d-lg-none d-xlg-none"
              />
            </button>
          </div>
          <div className="modal-body">
            {activeTeamMember ? (
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h5>{activeTeamMember.name}</h5>
                  <span>{activeTeamMember.designation}</span>
                  <div
                    className={cns('my-4', cn.teamMemberFullDesc)}
                    dangerouslySetInnerHTML={{
                      __html: activeTeamMember.bio,
                    }}
                  />
                </div>
                <div className="col-12 col-lg-4 d-none d-lg-block d-xlg-block">
                  <Img fluid={activeTeamMember.avatar.childImageSharp.fluid} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
