import React from "react";
import "./Info.css";
import CheckBox from "./CheckBox";
import usePrivacySettings from "../hooks/usePrivacySettings";
import { Decision } from "../context/PrivacyContext";

const Info = () => {
  const {
    allowTracking,
    allowReporting,
    updateTrackingDecision,
    updateReportingDecision,
  } = usePrivacySettings();

  const handleTrackingChanged = () => {
    if (allowTracking === Decision.ACCEPTED) {
      updateTrackingDecision(Decision.DECLINED);
    } else {
      updateTrackingDecision(Decision.ACCEPTED);
    }
  };

  const handleReportingChanged = () => {
    if (allowReporting === Decision.ACCEPTED) {
      updateReportingDecision(Decision.DECLINED);
    } else {
      updateReportingDecision(Decision.ACCEPTED);
    }
  };

  return (
    <div id="info-wrapper">
      <div id="info" className="info-box">
        <div>Website built by</div>
        <div id="info-name">Christoph Kraemer</div>
        <div id="info-title">USA Team Handball</div>
        <div id="info-mail">Contact: hello@referee.app</div>
      </div>
      <div id="privacy-settings" className="info-box">
        <h2>Privacy Settings</h2>
        <div className="privacy-header">
          <CheckBox
            checked={allowTracking === Decision.ACCEPTED}
            onChange={handleTrackingChanged}
          />
          <h3>Analytics</h3>
        </div>
        <div>
          We use Google Analytics to analyze traffic and optimize this website based on the data.
          We also collect data on which rules test questions were answered and if the answer was
          correct or wrong. More information can be found in the privacy policy below.
        </div>
        <div className="privacy-header">
          <CheckBox
            checked={allowReporting === Decision.ACCEPTED}
            onChange={handleReportingChanged}
          />
          <h3>Error Reporting</h3>
        </div>
        <div>
          Not every website code is perfect. We use Sentry.io to collect errors which occur during
          the use of the website. No personal information is transmitted. By activating error
          reporting you help us to identify and fix potential errors quickly. More information can
          be found in the privacy policy below.
        </div>
      </div>
      <div className="info-box">
        <h2>Privacy Policy</h2>
        <p>
          We want you to understand how we collect, use and share information about you when you
          use this website. If you have any questions, please don’t hesitate to contact us at
          hello@referee.app.
        </p>
        <h3>Overview</h3>
        <p>
          This website can be used free of charge without registering. We use your personal
          information only for providing and improving this website. We only process usage data
          which can include your IP address, browser type and version, operating system, length of
          visit, page views and website navigation paths.
        </p>
        <h3>Purpose of data collection</h3>
        <p>
          We collect this information to analyze how users interact with our website and how many
          users access our website.
        </p>
        <h3>Cookies</h3>
        <p>
          Cookies are files with small amount of data, which may include an anonymous unique
          identifier. Cookies are sent to your browser from a web site and stored on your
          computer&apos;s hard drive.
        </p>
        <p>
          We use cookies to gather statistics on the use of our services and evaluate them in
          order to optimize your experience. These cookies allow us to automatically recognize that
          you have visited our site before. The cookies are automatically deleted after a
          pre-defined period. Most browsers accept cookies automatically. However, you can disable
          cookies on your browser or choose to be notified when a new cookie is created.
        </p>
        <p>
          You can use this site without cookies.
        </p>
        <h3>Sentry</h3>
        <p>
          We are constantly improving and developing our website to provide our users with the best
          possible user experience. However, not all malfunctions, such as those caused by
          programming errors, can be reliably ruled out from the start. Therefore, we use Sentry, an
          error tracking tool from Functional Software Inc., 132 Hawthorne St, San Francisco, CA
          94107, USA (hereinafter “Sentry”). To improve the accessibility and technical stability of
          our website by monitoring system stability and detecting code errors, we may automatically
          send the following information to Sentry in the event of a software failure:
        </p>
        <ul>
          <li>Device information (operating system, browser version, browser type)</li>
          <li>The IP address of the device</li>
          <li>Date and time of error</li>
        </ul>
        <p>
          There is no explicit analysis for advertising purposes in this process. The information is
          collected anonymously, is not used for personal reasons, and is subsequently deleted. This
          analysis helps us to continuously improve our website and fix hidden code errors. Such
          processing is in our legitimate interest because the data is used solely for identifying
          and analyzing errors. For more information on Sentry’s data processing and how it works,
          see Sentry’s privacy policy: https://sentry.io/privacy/
        </p>
        <p>
          You can object to the delivery of data to Sentry at any time by disabling the checkbox
          above.
        </p>
        <h3>Google Analytics</h3>
        <p>
          For the continuous improvement of our Services we use the web analytics service Google
          Analytics of Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
          (hereinafter “Google”). Using cookies, Google creates pseudonymized user profiles. The
          information generated by the cookies for users includes:
        </p>
        <ul>
          <li>Browser type/version</li>
          <li>Operating system</li>
          <li>Referrer URL (previously visited page)</li>
          <li>Host name of the accessing computer (IP address)</li>
          <li>Time of the server request</li>
        </ul>
        <p>
          This information is sent to a Google server in the U.S. and stored there. The
          information is used to evaluate the use of our services, to compile reports on the
          activities, and to provide other related services for purposes of market research and
          customized design. This information may also be sent to third parties if required by
          law or if third parties process this data on behalf of Google. Under no circumstances
          will your IP address be merged with any other Google data. The IP addresses are
          anonymized so that assignment is not possible (IP masking).
        </p>
        <p>
          We only send data to Google after you have explicitly agreed to it by clicking on
          “Accept” in the cookie banner or checking the checkbox above. You can find out more
          about Google&apos;s use of information by
          visiting https://www.google.com/policies/privacy/partners/
        </p>
        <h3>Recipients outside the EU</h3>
        <p>
          As indicated above, data may also be sent to recipients located outside the European
          Union or the European Economic Area. This applies in particular to the aforementioned
          processing of analysis technologies, which can result in data transmission to the
          servers of the service providers. These servers may be outside the EU, especially in
          the US. We only work with those service providers who are certified by the EU-US
          Privacy Shield.
        </p>
        <h3>Your Rights</h3>
        <p>
          In addition to the right at any time to withdraw any consent you have given us, you
          are also entitled to the following if the respective legal conditions are met:
        </p>
        <ul>
          <li>the right to access - you can ask for copies of your personal data</li>
          <li>
            the right to rectification - you can ask us to rectify inaccurate personal data
            and to complete incomplete personal data
          </li>
          <li>the right to erasure - you can ask us to erase your personal data;</li>
          <li>
            the right to restrict processing - you can ask use to restrict the processing
            of your personal data;
          </li>
          <li>
            the right to object to processing - you can object to the processing of your
            personal data;
          </li>
          <li>
            the right to data portability - you can ask that we transfer your personal
            data to another organisation or to you;
          </li>
          <li>
            the right to complain to a supervisory authority - you can complain about
            our processing of your personal data; and
          </li>
          <li>
            the right to withdraw consent - to the extent that the legal basis of our
            processing of your personal data is consent, you can withdraw that consent.
          </li>
        </ul>
        <h3>Data Security</h3>
        <p>
          We apply the highest standards to data security for our infrastructure and
          the processing of your data. For example, we use protection mechanisms for
          computers such as firewalls and data encryption.
        </p>
        <p>
          All personal data sent by you is also transmitted using the generally
          accepted and secure SSL (Secure Socket Layer) standard. SSL is a secure and
          proven standard, e.g. it is also used for online banking. You will recognize
          a secure SSL connection with the placement of an “s” at the end of http
          (i.e. https: // …) in the address bar of your browser, or with the lock
          icon at the bottom of the browser.
        </p>
      </div>
    </div>
  );
};

export default Info;
