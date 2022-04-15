# NextJs-Prisma Application

A simple contact application on how to integrate `Prisma" into a `NextJs` application.

## Languages

* HTML5 
* Tailwind CSS
* NextJs
* React
* Typescript
* Prisma
* Sqlite

## Getting Started

1. Run `npm install` to install the required dependencies.

2. I have used a custom port, so run your server with `npm run dev -- -p 3200`.
You can change to a port number of your choice by changing `"dev:" "next dev -p [your_port_number]"` the in the `package.json` file.

3. Open [http://localhost:3200](http://localhost:3200) with your browser to see the result.

4. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


# Prisma Setup

1. Run `npx prisma init` to create your prisma schema in the prisma directory.

2. Set the `DATABASE_URL` in the `.env` file to point to your existing database. If your database has no tables yet, read [Getting started](https://pris.ly/d/getting-started).

3. Set the `provider` of the `datasource` block in `schema.prisma` to match your database: `postgresql`, `mysql`, `sqlite`, `sqlserver` or `mongodb`.

4. Run `prisma db pull` to turn your database schema into a Prisma schema.

5. Run `prisma generate` to generate the Prisma Client. You can then start querying your database.


# Initial Setup Commands

Just in case you are curious about the original commands I ran for this setup...

```
    npx create-next-app@latest --ts`
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm i -D prisma  
    npm i @prisma/client
    npx prisma init
```

# Useful Prisma Commands

1. `npx prisma migrate dev` to run migrations.

2. `npx prisma studio` to open Prisma Studio in the browser.