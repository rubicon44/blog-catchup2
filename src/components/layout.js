import React from "react"
import { Link } from "gatsby"

import Search from "./search"
import Header from "./header"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // ルートパス（index.js）だった場合
  if (isRootPath) {
    header = (
      // <h1 className="main-heading">
        <Link to="/">{title}</Link>
      // </h1>
    )
    // ルートパス以外の場合（個別ぺーじなど）
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper custom-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header custom-header">
        {header}
        <Search indices={searchIndices} />
        <Header />
      </header>
      <div className="main-body">
        <main className="custom-main">{children}</main>
      </div>
      <footer className="custom-footer">
        © {new Date().getFullYear()}, All rights reserved.
        {/* {` `}
        <a href="https://www.gatsbyjs.com">株式会社モバイルクラブ</a> */}
      </footer>
    </div>
  )
}

export default Layout
