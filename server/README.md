# Getting Started

This server uses postgresql, ensure you have postgresql installed and a database named `projectmanagement`

Copy properties from .env.template to .env

Run `npx prisma generate`

Run `npm run dev:migrate`

Run `npm run seed`

Run `npm run dev`


If needed run the following sql command to update autoincrement for id in each table

`SELECT setval(pg_get_serial_sequence("[DATA_MODEL_NAME_HERE], 'id'), coalesce(max(id)+1, 1), false) FROM "[DATA_MODEL_NAME_HERE]"`
