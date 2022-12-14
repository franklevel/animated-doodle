# DMI Assessment ๐ฌ

[![Animated Doodle - Pipeline](https://github.com/franklevel/animated-doodle/actions/workflows/pipeline.yml/badge.svg)](https://github.com/franklevel/animated-doodle/actions/workflows/pipeline.yml)

This assessment project consists of building a Single Page Application using React to enabling to search and list shows and tv series.

It is implemented using React Hooks, Context API and consuming a REST API from [TV Maze](https://api.tvmaze.com/shows)

## To Keep In Mind ๐ต๐ผ

In order to save time, some packages, such as Material UI, Axios, and Interweave were used because these provide a fast way to implement user graphic interfaces, safety or optimized methods and so on.

There are also a few of unit tests because there are many pending changes to do and also several things to improve in various components.

## Usage ๐

First you have to run the following commands in order to install all the required dependencies.

```
npm run install
```

Once finished, open your web browser accessing to the URL shown in the terminal. Take at look to the following example:

```
  VITE v3.2.3  ready in 528 ms

  โ  Local:   http://127.0.0.1:5173/
  โ  Network: use --host to expose
```

## Testing ๐งช

To run unit tests just execute:

```
npm test
```

## Deployment ๐

There is a demo deployed version on Vercel, you can get access here [DEMO](https://animated-doodle-franklevel.vercel.app/)
However, if you want to deploy by yourself just follow this mini HOW-TO:

1. Fork this project and clone int into your local environment.
2. Go to your [Vercel Token Section Page](https://vercel.com/account/tokens)
3. Create and copy a new token and name it `ANIMATED_DOODLE_TOKEN`.
4. Got to your forked project and navigate to the Github Actions Secrets sections. It should be a route like this `https://github.com/<YOUR_GITHUB_USERNAME>/animated-doodle/settings/secrets/actions`.
5. Create a new Action Secret Token with the same name `ANIMATED_DOODLE_TOKEN` and paste the value what you copied from Vercel.
6. Make a push from your local and track the Github Actions Pipeline in `https://github.com/<YOUR_GITHUB_USERNAME>/animated-doodle/actions`.

## What's included in this project โ

### Features

- Search shows
- List shows in a grid
- Navigate to show detail page
- Pipeline via Github Actions

### Packages

- Vite
- Vitest
- Jest
- Jest-DOM
- React Router DOM
- React Testing Library
- EsLint
- Typscript
- Inteweave (to rendering HTML safetly)
- Axios
- Material UI

## What's NOT included ๐ซ

- Web mobile support
- Result Pagination

## Next Steps โญ๏ธ

There are several things to include, delete or modify, such a the `Loading` system, the `SearchBar` component. Also the performance and Mobile-First approach, however in order to accomplish with the deadlines these kind of tasks would be part of future releases.

It will also need some refactoring when new features will be included.
