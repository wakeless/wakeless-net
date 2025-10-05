---
layout: post
title: "Building an Up Banking MCP Server"
date: 2025-10-05
description: "Creating an unofficial Model Context Protocol server for Up Banking API"
categories: mcp ai banking typescript
image: /assets/images/posts/up-api-logo.png
---

I've spent the majority of the last month since I finished up full-time at Constantinople learning more and more about
agents, agentic coding and LLMs in general. The main fruit of my labours has been a [Gitlab & Slack integration](https://pipie.io)
but I thought I'd take a moment to build something fun that might help me and others.

So I've built an [Up Banking MCP Server](https://github.com/wakeless/up-mcp), an unofficial Model Context Protocol server that lets AI assistants interact with Up Banking's API. This means you can now ask Claude (or other MCP-compatible AI assistants) questions about your bank accounts, transactions, and spending patterns.

![Up Banking MCP Server](/assets/images/posts/up-api-logo.png)

## See it in action

Here's the server in action. First, checking account balances:

<video width="100%" controls>
  <source src="/assets/videos/up-balances.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

And here's transaction tagging and category management:

<video width="100%" controls>
  <source src="/assets/videos/up-transaction-tagging-and-category.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is Anthropic's open protocol that standardizes how AI applications connect to external data sources and tools. Think of it as a universal adapter that lets AI assistants securely access your data without each assistant needing custom integrations.

It isn't **always** needed, especially when building stuff with LLMs, but when you want to make it a bit more consumer
friendly, this is the way.

## Try It Out

Currently you have to run it locally, so the setup is a bit more technical – it utilises node js rather than just being able to call a server. This is so that I
don't have to ask users for their access tokens. Which means that it maintain's Up's security model of never sharing an access token.

The server is open source and available on [GitHub](https://github.com/wakeless/up-mcp). If you're an Up Banking customer and want to experiment with AI-powered banking interactions, give it a try.

**Disclaimer**: This is an unofficial, community-built MCP server and is not affiliated with, endorsed by, or supported by Up Banking.
