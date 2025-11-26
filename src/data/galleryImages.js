const galleryImageNames = [
  'Siramambaa-Website-Images-01.jpg',
  'Siramambaa-Website-Images-02.jpg',
  'Siramambaa-Website-Images-03.jpg',
  'Siramambaa-Website-Images-04.jpg',
  'Siramambaa-Website-Images-05.jpg',
  'Siramambaa-Website-Images-06.jpg',
  'Siramambaa-Website-Images-07.jpg',
  'Siramambaa-Website-Images-08.jpg',
  'Siramambaa-Website-Images-09.jpg',
  'Siramambaa-Website-Images-10.jpg',
  'Siramambaa-Website-Images-11.jpg',
  'Siramambaa-Website-Images-12.jpg',
  'Siramambaa-Website-Images-13.jpg',
  'Siramambaa-Website-Images-14.jpg',
  'Siramambaa-Website-Images-15.jpg',
  'Siramambaa-Website-Images-16.jpg',
  'Siramambaa-Website-Images-17.jpg',
  'Siramambaa-Website-Images-18.jpg',
  'Siramambaa-Website-Images-19.jpg',
  'Siramambaa-Website-Images-20.jpg',
  'Siramambaa-Website-Images-21.jpg',
  'Siramambaa-Website-Images-22.jpg',
  'Siramambaa-Website-Images-23.jpg',
  'Siramambaa-Website-Images-24.jpg',
  'Siramambaa-Website-Images-25.jpg',
  'Siramambaa-Website-Images-26.jpg',
  'Siramambaa-Website-Images-27.jpg',
]

export const galleryImages = galleryImageNames.map((name, index) => ({
  id: index + 1,
  src: new URL(`../assets/gallery/${name}`, import.meta.url).href,
  alt: `SiraMamba Gallery Image ${index + 1}`,
  category: 'all',
}))


