import { graphql, useStaticQuery } from 'gatsby';

const useBannerImage = (imageName: string) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "banners" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 90, maxWidth: 1160) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);
  return data.allFile.edges
    .map(x => x.node)
    .find(node => node.name === imageName).childImageSharp.fluid;
};

export default useBannerImage;
