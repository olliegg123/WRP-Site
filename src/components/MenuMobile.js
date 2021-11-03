import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const MobileMenu = props => {
  const data = useStaticQuery(graphql`
    query MainMobileMenuQuery {
      allMainMenuJson(filter: {weight: {in: [2, 5]}}) {
        edges {
          node {
            url
            weight
            name
          }
        }
      }
      allFooterMenuJson(filter: {weight: {ne: 2}}) {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
    }
  `);
  return (
    <div id="main-menu-mobile" className={`main-menu-mobile ${props.active ? 'open' : ''}`}>
      <ul>
        {data.allFooterMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link to={node.url} activeClassName="active">{node.name}</Link>
          </li>
        ))}
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link to={node.url} activeClassName="active">{node.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
