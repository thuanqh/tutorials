<script>
  import Renderer from "./components/Render.svelte";

  const content = `# Markdown here!
  Here's a **great** post.`;
</script>

<Renderer title="Hello" {content} />
