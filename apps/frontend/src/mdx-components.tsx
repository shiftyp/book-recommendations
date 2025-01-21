import type { MDXComponents } from 'mdx/types'
import CustomMDXComponents from  '@books/components/src/mdx-components/mdx-components'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...CustomMDXComponents,
  }
}