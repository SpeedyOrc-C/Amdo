<script lang="ts">
    import LetterBox from "./LetterBox.svelte";
    import type {Letter} from "./Letter";

    export let rows: Letter[][] = []
</script>

<table>
    <caption>
        <slot></slot>
    </caption>

    <tbody>
    {#each rows as row}
        <tr>
            {#each row as letter}
                <td>
                    <LetterBox amdo={letter.amdo} wylie={letter.wylie} tibetan={letter.tibetan} />
                </td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>

<style lang="scss">
    table {
        table-layout: fixed;
        border-collapse: collapse;

        max-width: 30rem;
        width: 100%;
        margin: 0 auto;

        font-family: -apple-system, sans-serif;

        & caption {
            color: #333;
        }
    }

    caption {
        padding: 0.5rem 0;
        font-size: 1.5rem;
    }

    td {
        border: 1px solid lightgray;
    }
</style>