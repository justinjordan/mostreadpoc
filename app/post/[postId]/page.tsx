import { getPost, trackRead } from "@/app/actions";

export default async function PostPage({
  params,
}: {
  params: { postId: number };
}) {
  const post = await getPost(params.postId);
  await trackRead(post.category, post.id);

  return (
    <div className="p-4">
      <h1 className="text-large mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
