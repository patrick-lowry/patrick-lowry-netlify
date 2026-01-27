---
type: PageLayout
title: Home
colors: colors-a
# Removed background image to match info page black background
# backgroundImage:
#   type: BackgroundImage
#   url: /images/bg1.jpg
#   backgroundSize: cover
#   backgroundPosition: center
#   backgroundRepeat: no-repeat
#   opacity: 75
sections:
  - elementId: ""
    colors: colors-f
    backgroundSize: full
    title: Welcome
    subtitle: ""
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-6
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions: []
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all education articles
        url: /education
    showDate: false
    showSubtitle: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/education/machine-learning-fundamentals-1.md
      - content/education/machine-learning-fundamentals-2.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: "Education"
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showSubtitle: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      #- content/projects/cycling-data-analytics.md
      - content/projects/pixel-classification-bayes.md
      - content/projects/non-linear-classification-kernels.md
      - content/projects/language-embeddings-protein-analysis.md
      #- content/projects/image-stitching-homography.md
      #- content/projects/hugging-face-agents.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: "Projects"
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
  - colors: colors-f
    type: FeaturedPostsSection
    elementId: ''
    actions:
      - type: Link
        label: See all blog posts
        url: /blog-msc
    showDate: true
    showExcerpt: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    posts:
      - content/blog-msc/first-day-at-school.md
      - content/blog-msc/why-are-you-doing-this.md
      - content/blog-msc/bayesian-confusion.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: "Blog - Returning to University after 27 years...."
---
