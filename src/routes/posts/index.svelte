<script context="module">
  import { client } from '$lib/graphql-client'
  import { postsQuery, openGenusPostsQuery } from '$lib/graphql-queries'
  import { marked } from 'marked'

  export const load = async () => {
    const { posts } = await client.request(postsQuery)
    const { openGenusPosts } = await client.request(openGenusPostsQuery)


    return {
      props: {
        posts,
        openGenusPosts,
      },
    }
  }
</script>

<script>
  export let posts, openGenusPosts
</script>

<svelte:head>
  <title>Portfolio | Blog</title>
</svelte:head>

<h1 class="text-4xl mb-10 font-extrabold text-center">Blog posts</h1>

<div class="grid gap-10 md:grid-cols-1 md:px-10 lg:grid-cols-2 lg:-mx-52 ">
  {#each openGenusPosts as { title, link, description }}
    <div class="card text-center shadow-2xl mb-5 bg-primary text-primary-content" >
      <div class="card-body prose">
        <h2 class="title">{title}</h2>
        <p class="text-sm lg:text-xl">
          {description}
        </p>
        <div class="flex justify-center mt-5 space-x-2">
          
        </div>
        <div class="justify-center card-actions">
          <a href={`${link}`} class="btn btn-outline"
            >Read &rArr;</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>











{#each posts as { title, slug, content, coverImage, tags }}
  <div class="card text-center shadow-2xl mb-20">
    <figure class="">
      <img
        class=""
        src={coverImage.url}
        alt={`Cover image for ${title}`}
      />
    </figure>
    <div class="card-body prose">
      <h2 class="title">{title}</h2>
      {@html marked(content).slice(0, 150)}
      <div class="flex justify-center mt-5 space-x-2">
        {#each tags as tag}
          <span class="badge badge-primary">{tag}</span>
        {/each}
      </div>
      <div class="justify-center card-actions">
        <a href={`/posts/${slug}`} class="btn btn-outline btn-primary"
          >Read &rArr;</a
        >
      </div>
    </div>
  </div>
{/each}