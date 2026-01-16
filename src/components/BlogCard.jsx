import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  if (!post) return null

  const { slug, title, excerpt, date, readTime, tags = [], coverImage } = post

  return (
    <article className="bg-[#1f1d1d] border border-[#3a3325] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-[#dcbc7c33] transition-all duration-200">
      {coverImage ? (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-gradient-to-br from-[#362f22] via-[#2a2520] to-[#201c19]" />
      )}

      <div className="p-6 flex flex-col gap-3">
        <div className="text-xs text-[#dcbc7c] uppercase tracking-wide flex items-center gap-2">
          <span>{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className="opacity-70">•</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-white leading-tight">{title}</h3>
        <p className="text-sm text-gray-200 opacity-80">{excerpt}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-2">
          <Link
            to={`/blogs/${slug}`}
            className="inline-flex items-center gap-2 text-[#dcbc7c] font-semibold hover:text-white transition-colors"
            aria-label={`Read more: ${title}`}
          >
            Read more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}


