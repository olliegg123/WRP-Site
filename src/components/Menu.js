import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Menu = props => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
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
    <div id="main-menu" className="main-menu">
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

export default Menu;
