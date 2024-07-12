<div id="page">
    <slot/>
</div>

<style>
    @font-face {
        font-family: "MiSans Tibetan VF";
        src: url("/MiSansTibetanVF.ttf");
    }

    :global(.mi-ti) {
        font-family: "MiSans Tibetan VF", sans-serif;
    }

    :global(body) {
        margin: 1rem;
    }

    #page {
        width: 100%;
        max-width: 45rem;
        margin: 0 auto;
    }
</style>
