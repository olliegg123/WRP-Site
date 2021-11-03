import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
          phone
          email
        }
      }
    }
  `);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-inner">
              <h3 className="footer-title">{data.site.siteMetadata.title}</h3>
              <ul>
                <li>
                  <strong>Phone number:</strong> {data.site.siteMetadata.phone}
                </li>
                <li>    </li>
                <li>
                  <strong>Email Address:</strong> <Link to="mailto:sales@wrp-ltd.co.uk">{data.site.siteMetadata.email}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
