"use server";

const { Pool } = require("pg");
import { Post } from "@/types/Post";
import { QueryResult } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  host: process.env.POSTGRES_HOST,
  ssl: true,
});

export async function listPosts(): Promise<Post[]> {
  const posts = await fetch("https://jsonplaceholder.org/posts");
  return posts.json();
}

export async function getPost(id: number): Promise<Post> {
  const post = await fetch(`https://jsonplaceholder.org/posts/${id}`);
  return post.json();
}

export async function trackRead(section: string, contentId: number) {
  return pool.query(
    "INSERT INTO content_read (section, content_id, date_added) VALUES ($1, $2, NOW())",
    [section, contentId]
  );
}

export async function listMostReadPosts(): Promise<Post[]> {
  const reads: QueryResult<{ content_id: number; section: string }> =
    await pool.query(
      "SELECT content_id, section FROM content_read GROUP BY content_id, section ORDER BY COUNT(*) DESC LIMIT 10"
    );

  const ids = reads.rows.map((post) => post.content_id);

  return Promise.all(ids.map((id) => getPost(id)));
}
