/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {/* {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )} */}
      {author?.name && (
        <div>
          <p>「モバクラ」とはホステスさんを応援するために誕生したメディアです。</p>
          <p>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</p>

          <p>
            {/* この記事は<strong>{author.name}</strong> {author?.summary || null} */}
            {` `}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              ぜひツイッター・インスタグラムもフォローしてください!
            </a>
          </p>
          
          <h4>〜About〜</h4>
          <table border="1" className="bio-about-table">
            <tbody>
              <tr>
                <td>運営会社</td>
                <td>株式会社モバイルクラブ</td>
              </tr>
              <tr>
                <td>代表者</td>
                <td>代表取締役社長 村上奈々</td>
              </tr>
              <tr>
                <td>所在地</td>
                <td></td>
              </tr>
              <tr>
                <td>設立</td>
                <td></td>
              </tr>
              <tr>
                <td>資本金</td>
                <td></td>
              </tr>
              <tr>
                <td>事業内容</td>
                <td></td>
              </tr>
              <tr>
                <td>お問い合わせ</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
       )}
    </div>
  )
}

export default Bio
