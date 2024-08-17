---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download resume
        url: uploads/briansdenny-resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: 'More About Me'
      subtitle: ''
      text: |-
        I'm a writer and editor with an extensive background in research methodologies (quantitative and qualitative) and adult teaching/coaching. I get most excited when I'm making measurable impacts through words, research, or personal connections! I'm naturally inquisitive, so I enjoy learning and am always eager to take on new challenges. My extensive experience and formal training in research, education, and teaching has refined my ability to ask the right questions, systematically analyze problems, identify creative solutions, report on my findings, and teach others how to do the same.
        
    design:
      columns: '1'
  - block: collection
    id: portfolio
    content:
      title: Selected Projects
      filters:
        folders:
          - project
        featured_only: false
    design:
      view: article-grid
      columns: 3
 
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  
---
