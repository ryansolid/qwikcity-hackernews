import { component$, useStore, Slot } from '@builder.io/qwik';

export default component$(() => {
  const state = useStore({ open: true });
  return (
    <>
      <div class={state.open ? "toggle open" : "toggle"}>
        <a onClick$={() => (state.open = !state.open)}>
          {state.open ? "[-]" : "[+] collapsed"}
        </a>
      </div>
      {state.open && (
        <ul class="comment-children">
          <Slot />
        </ul>
      )}
    </>
  );
});