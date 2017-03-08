# jekyll_portfolio
This is the fifth iteration of my portfolio site and third Jekyll project overall. 

I want to use this file as a means to list my customizations, workarounds, and strategies. From enhancing syntax highlighting to handy TWIG statements and control flow, there's a lot going on here. Plus, it's been months since I build this and I've forgotten quite a lot already. It wasn't until I started helping a buddy with his Jekyll site that I realized I needed to do this. Here goes.

## Table Of Contents

- [Collections](#collections)
- [Layout](#layout)
- [Syntax Highlighting](#syntax-highlighting)
- [Navigation](#navigation)
- [Config.yml](#config)

## Collections

An unique aspect to this project is the use of [collections](https://jekyllrb.com/docs/collections/). Out-of-the-box Jekyll has two types of content, posts and pages. If you're looking for another way to organize related content that doesn't exactly fall under these two types, collections is your answer. Collections tell Jekyll we've got a new content type.

The first thing you need to do is inform Jekyll of the new collection. This tells Jekyll to look in the `projects` folder for documents, and to read them into the appropriate collection, including YAML front matter, just as it would posts. We do this by adding a block of code inside `config.yml`. 

```
# New document type
collections:
  projects:
    output: true
    permalink: /projects/:title/

```

We add the key `output: true` so Jekyll renders a page per each item file our project folder. More on collections [here](http://ben.balter.com/2015/02/20/jekyll-collections/).
