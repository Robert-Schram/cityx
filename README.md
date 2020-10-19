Global site status: [![Netlify Status](https://api.netlify.com/api/v1/badges/05e4a477-68a7-42bf-b14b-4810c41f2bbe/deploy-status)](https://app.netlify.com/sites/eloquent-williams-97965a/deploys)


Instructions to create your own synergy hub:
1. fork this repository
2. rename it to your hub name eg mySynergyHub
3. modify your /src/admin/config.yml file with the repo name eg youraccount_or_yourorganisation/mySynergyHub
4. Go to Netlify and create an account, then link it to your sites github account. [instructions here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
5. to use the CMS feature (events and pages) you will need to do an oauth intergration by going to the developer section and copying the oauth keys to netlify 
6. You can now change content either via the cms eg https://yoursite/admin or directly in github (see content directory) with automatic deploy

Developer options for local hacking
1. Install Gridsome CLI tool if you don't have it: `npm install --global @gridsome/cli`
2. Clone the repo: `git@github.com:youraccount_or_yourorganisation/mySynergyHub.git`
3. `cd mySynergyHub`
4. `npm install`
5. run `gridsome develop` or `npm run dev` to start a local dev server at `http://localhost:8080`
6. Happy coding 🎉🙌

# Events

There are two ways you can change or add events to the hub repo.
First one is by adding makdown (`.md`) files to [Content / Events directory](https://github.com/youraccount_or_yourorganisation/mySynergyHub/blob/master/content/events/) or by goint to [Netlify CMS admin pannel](https://yoursite/admin).

### Adding Events via Github

To add an event create a .md file in the [content/events directory](https://github.com/youraccount_or_yourorganisation/mySynergyHub/blob/master/content/events/).

Use this **front matter** syntax to add any aditonal info before your main content. All of this is optional, but title is strongly recomended. NOTE: this is the human friendly syntax, files generated by NetlifyCMS can be different. If you would like to upload an image, please put it in the uploads/events directory.

    ---
    title: Opening Even Info
    excerpt: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi natus itaque qui odit. Et, dolorem tempore labore ex expedita laboriosam, ipsam repellat ad quas natus minus sunt magni obcaecati.
    date: 2020-09-22 #year-month-day
    start_time: 1500 #please don't use semicolon in the time format
    end_time: 1530
    thumbnail: /uploads/events/moon.png
    tags: ["community", "self-organization"]
    ---

### Adding Events via NetlifyCMS

Just go to [Netlify CMS admin pannel](https://yoursite/admin) and authorize the github/netlify connection.
From there on you can access the CMS and add or edit your own events. The markdown generated will look slightly different.

    ---
    title: Example Events
    excerpt: Donec eu magna bibendum, placerat nibh vel, facilisis eros. Nullam
    suscipit finibus placerat. Nunc pellentesque augue eu dolor aliquet iaculis.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. In mi nisi, laoreet in nisi at, facilisis sodales ante.
    date: 2020-09-22T00:00:00.000Z
    start_time: 1900
    end_time: 2000
    thumbnail: /uploads/events/moon.png
    tags:
        - patterns
        - community
        - new economy
    ---

### Adding Vue components to markdown content

Events _(content/events/event.md)_ & Pages _(content/pages/page.md)_ are set-up using [Vue-Remakr](https://gridsome.org/plugins/@gridsome/vue-remark) plug-in.

This plug-in not only translates markdown into html, it also allows you to **use Vue components directly in the markdown file**.

Have fun!
