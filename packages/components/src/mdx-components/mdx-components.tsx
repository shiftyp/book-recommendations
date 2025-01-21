import React from 'react'
import { MDXComponents } from 'mdx/types'

export default {
    h1: ({ className, ...props }) => (
        <h1 className={`text-2xl font-bold ${className}`} {...props} />
    ),
    h2: ({ className, ...props }) => (
        <h2 className={`text-xl font-bold ${className}`} {...props} />
    ),
    h3: ({ className, ...props }) => (
        <h3 className={`text-lg font-bold ${className}`} {...props} />
    ),
    p: ({ className, ...props }) => (
        <p className={`text-base ${className}`} {...props} />
    ),
    a: ({ className, ...props }) => (
        <a className={`text-blue-500 hover:underline ${className}`} {...props} />
    ),
    ul: ({ className, ...props }) => (
        <ul className={`list-disc list-inside ${className}`} {...props} />
    ),
    ol: ({ className, ...props }) => (
        <ol className={`list-decimal list-inside ${className}`} {...props} />
    )
} as MDXComponents