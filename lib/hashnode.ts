export type HashnodePost = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  readTimeInMinutes: number;
  url: string;
};

export async function fetchHashnodePosts(
  username: string,
  limit = 6
): Promise<HashnodePost[]> {
  if (!username) return [];

  const query = `
    query GetUserPosts($username: String!, $page: Int!, $pageSize: Int!) {
      user(username: $username) {
        posts(page: $page, pageSize: $pageSize) {
          nodes {
            id
            title
            brief
            slug
            readTimeInMinutes
            url
          }
        }
      }
    }
  `;

  const variables = { username, page: 1, pageSize: Math.max(1, limit) };

  const res = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    // ISR-friendly on Next.js
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const json = await res.json();
  const nodes = json?.data?.user?.posts?.nodes ?? [];

  return nodes.slice(0, limit).map((p: any) => ({
    id: p.id,
    title: p.title,
    brief: p.brief,
    slug: p.slug,
    readTimeInMinutes: p.readTimeInMinutes,
    url: p.url || `https://${username}.hashnode.dev/${p.slug}`,
  }));
}
