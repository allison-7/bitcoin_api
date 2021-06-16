CREATE TABLE "coin" (
  "cashtag" varchar PRIMARY KEY,
  "color" varchar
);
CREATE TABLE "price" (
  "id" SERIAL PRIMARY KEY,
  "cashtag" varchar,
  "date_created" timestamp,
  "price" decimal
);
ALTER TABLE "price" ADD FOREIGN KEY ("cashtag") REFERENCES "coin" ("cashtag");