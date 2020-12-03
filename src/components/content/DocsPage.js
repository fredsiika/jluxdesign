import React, { lazy, Component, Suspense } from 'react'
// import { link } from 'react-dom'
import { importMDX } from 'mdx.macro'
// import QuotePage from '../../views/examples/QuotePage';
import MDXFormSpecs from './QuoteSpecs.mdx'
const QuoteFormSpecs = importMDX('./QuoteSpecs.mdx')

const DocsPage = () => {
	return <div></div>
}

export default DocsPage
