---
sidebar_position: 1
---

# Integration Introduction

Crewcharge is a customer retention tool for SaaS companies to unlock revenue with in-depth analytics, segmented marketing and feedback widgets.

## Create a project

To integrate your project, first create a new project using

````shell
https://crewcharge.com/onboarding/project-and-teams
````

## Getting a project's analytics tag

Not to be confused with [API Key](/integration/API%20Key), an [analytics tag](/integration/Analytics%20Tag) is used in both front-end applications and backend applications.
It identifies your project separately and can update logs on what user actions have been done.

:::caution
 
While protecting an analytics key in the backend is nice, it's still inevitable since .env files aren't really safe from front-end applications.
We recommend users perform backend analytics to prevent click jacking, **and at NO COST keep the [API Key](/integration/API%20Key) on the front-end.**

:::

## Integrating Crewcharge with front-end applications

You can create a tracker for front-end applications that support 

1. React JS. 
2. Next JS.
3. Plain HTML site.
4. Angular sites.
5. Vue site.
6. Svelte site.
7. Ember JS site.

The tracker code is simply a `<script>` tag that you need to embed inside `<head></head>`. 

On the backend, we currently support 

1. Node js 
2. Next JS API Routes