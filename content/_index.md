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
        url: uploads/BrianDenny-Resume-May2025.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: abstract-envelope.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: 'A Little More About Me'
      subtitle: ''
      text: |-
       My writing, editing, research, and teaching have opened many interesting doors for me, and I'm excited for the future! As disparate as my skillset may seem, it has refined my ability to analyze tough problems, ask the right questions, identify creative solutions, report on my findings, and teach others how to do the same.
        
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'What Others Are Saying About Me'
      subtitle: ''
      text: |-
        Product Manager
        > ...you are awesome =D
        
        Colleague
        > I think this is excellent feedback and the suggestions are good - relevant and actionable!
        
        Colleague
        > At some point, I would also like to speak to you about possibly joining the DEI Council. I think you would make a good candidate and I know you are outspoken and reflective enough to share good ideas.

        {{< spoiler text="Click for excerpts from 2024 review" >}}
        Put bluntly, Brian rocked my expectations for this first half of 2024. Under his guidance we were able to:

        - Successfully integrate the DOC brands into Whatfix (WF).
        - Perform our first meaningful A/B test on the eFax portal WF content.
        - Integrate direct CS and Product feedback loops into the portal, giving customers direct access to these teams as a means to solve issues or problems with their eFax accounts.
        - Collect meaningful data regarding customer portal use using WF Analytics.
        - Begin helping internal CCSI teams understand how we can use WF to meet their messaging and customer communication needs based on rate plans.
        <br/>

        Brian continues to be a truly valuable asset to my team, to Product, and to CCSI overall. He is a self-starter, who pushes the Whatfix agenda diligently and with the needed insight to make it productive for all of the products that have integrated WF into their UI/UX.
        <br/>
        
        Brian maintains an even level of professionalism with whomever he deals with, whether that be CCSI personnel, WF employees, or our CCSI customers. He is open, direct, and comfortable with sudden change (a CCSI fact of life). He thrives in our small team environment, but is not afraid to reach out to CCSI resources he is not familiar with in order to get work done (and to customers as well, when and if needed).
        <br/>

        Brian is very results oriented, and is very transparent about any perceived difficulties that may be encountered in a particular project. He is also very astute about best practices and implementing procedures. I like working with Brian; he is easy going and easy to get along with.

        {{< /spoiler >}}

        {{< spoiler text="Click for excerpts from 2023 review" >}}
        'Exceeding Expectations' (We were quite busy at this time, so my 2023 review includes no free response feedback. But every response was the highest, 'Exceeding Expectations')
        {{< /spoiler >}}

        {{< spoiler text="Click for excerpts from 2022 review" >}}
        Before Brian joined CCSI, we were not a team that had much use for
        user data, and in fact had no good way of obtaining it to even analyze. Brian has shown us the inner workings and benefits of using a tool like Whatfix, and has made our approach to providing jSign help truly data driven. We now know how our jSign customers are interacting with the app, and with the help, and we can target specific assistance to specific pain points, resulting in a better user experience. This is all very exciting and new for us. Brian has opened a whole new world for the team and we are finding new ways to contribute to the overall success of jSign, product, and CCSI. 

        {{< /spoiler >}}

    design:
      columns: '1'
  - block: collection
    id: portfolio
    content:
      title: Selected Portfolio Projects
      filters:
        folders:
          - project
        featured_only: false
    design:
      view: article-grid
      columns: 3
 
  # unhash this when I'm ready to bring the news back
  # - block: collection
  #  id: news
  #  content:
  #    title: Recent News
  #    subtitle: ''
  #    text: ''
      # Page type to display. E.g. post, talk, publication...
  #    page_type: post
      # Choose how many pages you would like to display (0 = all pages)
   #   count: 5
      # Filter on criteria
    #  filters:
     #   author: ""
      #  category: ""
       # tag: ""
   #     exclude_featured: false
   #     exclude_future: false
   #     exclude_past: false
   #     publication_type: ""
      # Choose how many pages you would like to offset by
   #   offset: 0
      # Page order: descending (desc) or ascending (asc) date.
   #   order: desc
   # design:
      # Choose a layout view
   #   view: date-title-summary
      # Reduce spacing
   #   spacing:
    #    padding: [0, 0, 0, 0]
  
---
