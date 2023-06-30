# ALEX-CLIENT

## Dev Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)
with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`.
The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)
to automatically optimize and load Inter, a custom Google Font.

## Docker Image Build

First, configure `buildx`

```bash
docker buildx create --name builder
docker buildx use builder
docker buildx inspect --bootstrap
```

Or, if you already have an existing `buildx` image,
just start _Docker_ and the container associated with the image. Then:

```bash
docker buildx ls
```

Then build, tag and push image (must be logged in and have container
registry setup) with the following:

```bash
docker buildx build \
    --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v6 \
    -t alex-client:latest . --push
```
