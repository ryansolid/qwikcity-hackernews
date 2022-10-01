import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { getStories } from "../api";
import Story from "../components/story/story";
import type { IStory } from "../types";

// temp duplicate index because top level * routes mess up serverless deploys
export default component$(() => {
  const location = useLocation();
  let url = new URL(location.href);
  let page = +(url.searchParams.get("page") || 1);
  const type = "top";
  const resource = useResource$<IStory[]>(() => getStories(type as any, page));
  return (
    <Resource
      value={resource}
      //onPending={() => <div class="news-list-nav">Loading...</div>}
      onResolved={(stories) => {
        return (
          <div class="news-view">
            <div class="news-list-nav">
              {page > 1 ? (
                <a
                  class="page-link"
                  href={`/${type}?page=${page - 1}`}
                  aria-label="Previous Page"
                >
                  {"<"} prev
                </a>
              ) : (
                <span class="page-link disabled" aria-disabled="true">
                  {"<"} prev
                </span>
              )}
              <span>page {page}</span>
              {stories && stories.length >= 29 ? (
                <a
                  class="page-link"
                  href={`/${type}?page=${page + 1}`}
                  aria-label="Next Page"
                >
                  more {">"}
                </a>
              ) : (
                <span class="page-link disabled" aria-disabled="true">
                  more {">"}
                </span>
              )}
            </div>
            <main class="news-list">
              {stories && (
                <ul>
                  {stories.map((story: IStory) => (
                    <Story story={story} />
                  ))}
                </ul>
              )}
            </main>
          </div>
        );
      }}
    />
  );
});
