import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogs'

export default function BlogsContent() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main className="bg-[#282626] text-white pt-28 pb-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
          <p className="text-gray-200 opacity-80 mb-6">
            The blog you are looking for may have been moved or removed.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#dcbc7c] text-[#dcbc7c] hover:bg-[#dcbc7c] hover:text-black transition-colors"
          >
            ← Back to blogs
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#282626] text-white pt-28 pb-16 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#dcbc7c] font-semibold hover:text-white transition-colors"
          >
            ← Back to blogs
          </Link>
        </div>

        <header className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#dcbc7c] mb-3">Insights</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-3 text-sm text-gray-200 opacity-80 flex flex-wrap items-center gap-3">
            <span>
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="opacity-60">•</span>
            <span>{post.readTime}</span>
            {post.tags?.length ? (
              <>
                <span className="opacity-60">•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-[#3a3325] shadow-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        <p className="text-lg text-gray-100 opacity-90 mb-6">{post.description}</p>

        <div className="space-y-6 text-gray-100 opacity-90 leading-relaxed">
          {post.sections?.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-white mb-2">{section.heading}</h2>
              <p className="text-gray-200">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}


