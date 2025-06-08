---
title: Gallery
layout: layout_page.njk
navigation:
  title: Gallery
  position: 3
  link: /gallery
components:
  - type: major_title
    props:
      title: Photo gallery
  - type: image_full
    props:
      src: /images/pic01.jpg
      alt: main img
  - type: photo_gallery
    props:
      images:
        - src: /images/pic02.jpg
          alt: A photo in gallery
        - src: /images/pic03.jpg
          alt: A photo in gallery
        - src: /images/pic04.jpg
          alt: A photo in gallery
---