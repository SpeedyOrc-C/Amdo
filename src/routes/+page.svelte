<script lang="ts">
    import LetterBox from "./LetterBox.svelte";

    class Letter
    {
        tibetan: string
        amdo: string
        wylie: string

        constructor(tibetan: string, amdo: string, wylie: string)
        {
            this.tibetan = tibetan
            this.amdo = amdo
            this.wylie = wylie
        }
    }

    const alphabet = [[
        new Letter("ཀ", "k", "k"),
        new Letter("ཁ", "kʰ", "kh"),
        new Letter("ག", "k", "g"),
        new Letter("ང", "ŋ", "ng"),
    ], [
        new Letter("ཅ", "tɕ", "c"),
        new Letter("ཆ", "tɕʰ", "ch"),
        new Letter("ཇ", "tɕ", "j"),
        new Letter("ཉ", "ɲ", "ny"),
    ], [
        new Letter("ཏ", "t", "t"),
        new Letter("ཐ", "tʰ", "th"),
        new Letter("ད", "d", "d"),
        new Letter("ན", "n", "n"),
    ], [
        new Letter("པ", "p", "p"),
        new Letter("ཕ", "pʰ", "ph"),
        new Letter("བ", "w", "b"),
        new Letter("མ", "m", "m"),
    ], [
        new Letter("ཙ", "ts", "ts"),
        new Letter("ཚ", "tsʰ", "tsh"),
        new Letter("ཛ", "ts", "dz"),
        new Letter("ཝ", "ʁʷ", "w"),
    ], [
        new Letter("ཞ", "ɕ", "zh"),
        new Letter("ཟ", "xs", "z"),
        new Letter("འ", "", "’"),
        new Letter("ཡ", "j", "y"),
    ], [
        new Letter("ར", "ɻ", "r"),
        new Letter("ལ", "l", "l"),
        new Letter("ཤ", "x", "sh"),
        new Letter("ས", "s", "s"),
    ], [
        new Letter("ཧ", "h", "h"),
        new Letter("ཨ", "", ""),
    ]]

    const vowels = [
        new Letter("ཨི", "ə", "i"),
        new Letter("ཨུ", "ə", "u"),
        new Letter("ཨེ", "e", "e"),
        new Letter("ཨོ", "o", "o"),
    ]

    const subjoinedYa = [[
        new Letter("ཀྱ", "tɕ", "ky"),
        new Letter("ཁྱ", "tɕʰ", "khy"),
        new Letter("གྱ", "tɕ", "gy"),
    ], [
        new Letter("པྱ", "ɕ", "py"),
        new Letter("ཕྱ", "ɕ", "phy"),
        new Letter("བྱ", "ɕ", "by"),
    ], [
        new Letter("མྱ", "ɲ", "my"),
    ]]

    const subjoinedRa = [[
        new Letter("ཀྲ གྲ ཏྲ དྲ པྲ བྲ", "ʈɻ", "kr gr tr dr pr br"),
        new Letter("ཁྲ ཐྲ ཕྲ", "ʈɻʰ", "khr thr phr"),
    ], [
        new Letter("མྲ", "m", "mr"),
        new Letter("སྲ ཧྲ", "ʂ", "sr hr"),
    ]]
</script>

<svelte:head>
    <title>藏文字母表（安多话）</title>
</svelte:head>

<table id="consonants" style:--rows="4">
    <caption>辅音字母</caption>

    <tbody>
    {#each alphabet as row}
        <tr>
            {#each row as letter}
                <td>
                    <LetterBox amdo={letter.amdo} wylie={letter.wylie} tibetan={letter.tibetan}/>
                </td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>

<table id="vowels" style:--rows="5">
    <caption>元音字母</caption>

    <tbody>
    <tr>
        <td>
            <LetterBox amdo="a" wylie="a" tibetan="ཨ" />
        </td>
        {#each vowels as vowel}
            <td>
                <LetterBox amdo={vowel.amdo} wylie={vowel.wylie} tibetan={vowel.tibetan} mask="ཨ" />
            </td>
        {/each}
    </tr>
    </tbody>
</table>

<table id="subjoined-ya" style:--rows="3">
    <caption>
        下加字
        <span class="misans-tibetan">ཡ</span>
        ( <span class="misans-tibetan">ྱ</span> )
    </caption>

    <tbody>
    {#each subjoinedYa as row}
        <tr>
            {#each row as letter}
                <td >
                    <LetterBox amdo={letter.amdo} wylie={letter.wylie} tibetan={letter.tibetan} />
                </td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>

<table id="vowels" style:--rows="2">
    <caption>
        下加字
        <span class="misans-tibetan">ར</span>
        ( <span class="misans-tibetan">ྲ</span> )
    </caption>

    <tbody>
    {#each subjoinedRa as row}
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

<br><br><br>

<style lang="scss">
    div {
        color: #333;
    }

    table {
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;

        border-collapse: collapse;
        font-family: -apple-system, sans-serif;

        & td {
            width: calc(100% / var(--rows))
        }
    }

    caption {
        padding: 0.5rem 0;
        font-size: 1.5rem;
    }

    td {
        border: 1px solid lightgray;
    }

    #vowels {
        page-break-after: auto;
    }
</style>
