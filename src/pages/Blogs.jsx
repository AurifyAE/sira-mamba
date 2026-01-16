import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogs'

export default function Blogs() {
  return (
    <main className="bg-[#282626] text-white pt-28 pb-16 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#dcbc7c]">Insights</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold">Blogs & Updates</h1>
          <p className="mt-4 text-gray-200 opacity-80 max-w-3xl mx-auto">
            News, guidance, and best practices on precious metal refining, bullion products, and
            responsible sourcing in the UAE.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}


