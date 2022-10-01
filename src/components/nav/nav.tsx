import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="header">
      <nav class="inner">
        <a href="/">
          <strong>HN</strong>
        </a>
        <a href="/new">
          <strong>New</strong>
        </a>
        <a href="/show">
          <strong>Show</strong>
        </a>
        <a href="/ask">
          <strong>Ask</strong>
        </a>
        <a href="/job">
          <strong>Jobs</strong>
        </a>
        <a
          class="github"
          href="http://github.com/builderio/qwik"
          target="_blank"
          rel="noreferrer"
        >
          Built with Qwik
        </a>
      </nav>
    </header>
  );
});
