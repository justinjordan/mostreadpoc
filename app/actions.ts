"use server";

export async function listPosts() {
  const posts = await fetch("https://jsonplaceholder.org/posts");
  return posts.json();
}

export async function getPost(id: number) {
  const post = await fetch(`https://jsonplaceholder.org/posts/${id}`);
  return post.json();
}

export async function trackRead() {
  //
}

export async function listMostReadPosts() {
  const ids = [1];

  return Promise.all(ids.map((id) => getPost(id)));
}
