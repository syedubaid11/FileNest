CREATE TABLE "files" (
	"id" serial PRIMARY KEY NOT NULL,
	"uploadedAt" timestamp NOT NULL,
	"isPublic" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "friends" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"friendId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL
);
