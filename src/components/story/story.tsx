import { component$ } from '@builder.io/qwik';
import type { IStory } from "../../types";

export default component$(
  (props: { story: IStory }) => (
    <li class="news-item">
      <span class="score">{props.story.points}</span>
      <span class="title">
        {props.story.url && !props.story.url.startsWith("item?id=") ? (
          <>
            <a href={props.story.url} target="_blank" rel="noreferrer">
              {props.story.title}
            </a>
            <span class="host"> ({props.story.domain})</span>
          </>
        ) : (
          <a href={`/item/${props.story.id}`}>{props.story.title}</a>
        )}
      </span>
      <br />
      <span class="meta">
        {props.story.type !== "job" ? (
          <>
            by <a href={`/users/${props.story.user}`}>{props.story.user}</a>{" "}
            {props.story.time_ago} |{" "}
            <a href={`/stories/${props.story.id}`}>
              {props.story.comments_count
                ? `${props.story.comments_count} comments`
                : "discuss"}
            </a>
          </>
        ) : (
          <a href={`/stories/${props.story.id}`}>{props.story.time_ago}</a>
        )}
      </span>
      {props.story.type !== "link" && (
        <>
          {" "}
          <span class="label">{props.story.type}</span>
        </>
      )}
    </li>
  ))