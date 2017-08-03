import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import apexLogo from 'images/partnerLogos/apex_systems_logo.png';
import githubLogo from 'images/partnerLogos/github_logo.png';
import dockerLogo from 'images/partnerLogos/docker_logo.png';
import oracleLogo from 'images/partnerLogos/oracle_logo.png';
import oreillyLogo from 'images/partnerLogos/oreilly_logo.png';
import hackerrankLogo from 'images/partnerLogos/hackerrank_logo.png';
import styles from './partners.css';


class Partners extends Component {
  render() {
    return (
      <Section
        title="Partners"
        theme="white"
      >
        <div className={styles.partners}>
          <p>
            Operation Code and our all-volunteer team offers our
            programs and services through the generous support
            of our partners. Their support, made via either
            financial contributions or in-kind donations,
            demonstrate their commitment to veterans,
            servicemembers, and military spouses.
            We are deeply grateful to the leadership of the
            organizations that are supporting our mission.
          </p>
        </div>

        <div className={styles.partnerLogos}>
          <div>
            <a href="https://apexsystems.com/">
              <img src={apexLogo} alt="Apex Systems" />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <img src={githubLogo} alt="GitHub" />
            </a>
          </div>
          <div>
            <a href="https://docker.com/">
              <img src={dockerLogo} alt="Docker" />
            </a>
          </div>
          <div>
            <a href="https://oreilly.com/">
              <img src={oreillyLogo} alt="O&apos;Reilly Media" />
            </a>
          </div>
          <div>
            <a href="https://hackerrank.com/">
              <img src={hackerrankLogo} alt="HackerRank" />
            </a>
          </div>
          <div>
            <a href="https://oracle.com/">
              <img src={oracleLogo} alt="Oracle" />
            </a>
          </div>
          <div>
            <a href="https://oracle.com/">
              <img src={oracleLogo} alt="Oracle" width="200" />
            </a>
          </div>
        </div>

        <div className={styles.partners}>
          <p className={styles.contactUs}>
            We are always looking for organizations who are interested in working with us!
          </p>
          <LinkButton text="Contact Us" link="mailto:partnerships@operationcode.org" />
        </div>

      </Section>
    );
  }
}

export default Partners;
