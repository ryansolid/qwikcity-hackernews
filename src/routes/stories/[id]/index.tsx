import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Comment } from '../../../components/comment/comment';
import { getStory } from '../../../api';
import type { IStory } from "../../../types";

export default component$(
  () => {
    const location = useLocation();
    const resource = useResource$<IStory>(({ track }) => {
      track(location, "params")
      const id = +location.params.id;
      return getStory(id)
    });
    return (
      <Resource
        value={resource}
        //onPending={() => <div class="news-list-nav">Loading...</div>}
        onResolved={(story) => {
          return <div class="item-view">
            <div class="item-view-header">
              <a href={story.url} target="_blank">
                <h1>{story.title}</h1>
              </a>
              {story.domain && (
                <span class="host">({story.domain})</span>
              )}
              <p class="meta">
                {story.points} points | by{" "}
                <a href={`/users/${story.user}`}>{story.user}</a>{" "}
                {story.time_ago} ago
              </p>
            </div>
            <div class="item-view-comments">
              <p class="item-view-comments-header">
                {story.comments_count
                  ? story.comments_count + " comments"
                  : "No comments yet."}
              </p>
              <ul class="comment-children">
                {story.comments.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </ul>
            </div>
          </div>
        }}
      />
    );
  }
);


