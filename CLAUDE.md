# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site using the `awesome-jekyll-theme` theme. The site uses Jekyll 4.4.1 with Ruby's bundle gem manager for dependency management.

## Development Commands

### Primary Development
```bash
# Install dependencies
bundle install

# Start development server with live reload
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build
```

### Alternative Commands
```bash
# Direct Jekyll commands (if Jekyll is installed globally)
jekyll serve
jekyll build
```

## Project Structure

- `_config.yml` - Jekyll configuration file with site settings and theme configuration
- `_posts/` - Blog posts in Markdown format following Jekyll's naming convention: `YEAR-MONTH-DAY-title.MARKUP`
- `index.markdown` - Homepage layout using the `home` layout
- `about.markdown` - About page using the `page` layout
- `404.html` - Custom 404 error page
- `Gemfile` - Ruby dependencies including Jekyll and theme gems

## Theme and Plugins

- Theme: `awesome-jekyll-theme`
- Fallback theme: `minima` (v2.5)
- Plugin: `jekyll-feed` for RSS/Atom feed generation

## Content Creation

Blog posts should be created in the `_posts/` directory following Jekyll's naming convention and include proper front matter with layout, title, date, and categories.