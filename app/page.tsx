import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { listMostReadPosts, listPosts } from "./actions";
import Link from "next/link";

export default async function Home() {
  const sections = [
    {
      title: "Most Read Articles",
      posts: await listMostReadPosts(),
    },
    {
      title: "All Articles",
      posts: await listPosts(),
    },
  ];

  return (
    <div>
      {sections.map((section) => (
        <section className="p-4" key={section.title}>
          <h2 className="text-large mb-4">{section.title}</h2>
          <article className="grid gap-4 grid-cols-3">
            {section.posts.map((post) => (
              <Card key={post.id} title={post.title}>
                <CardHeader>
                  <h3>{post.title}</h3>
                </CardHeader>
                <CardBody>{post.content.substring(0, 280)}...</CardBody>
                <CardFooter>
                  <Link href={`/post/${post.id}`}>Read More</Link>
                </CardFooter>
              </Card>
            ))}
          </article>
        </section>
      ))}
    </div>
  );
}
