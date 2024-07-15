<script lang="ts">
    import LetterTable from "./LetterTable.svelte";
    import {letter} from "./Letter";

    const Consonants = [
        [letter("ཀ", "k", "k"), letter("ཁ", "kʰ", "kh"), letter("ག", "k", "g"), letter("ང", "ŋ", "ng")],
        [letter("ཅ", "tɕ", "c"), letter("ཆ", "tɕʰ", "ch"), letter("ཇ", "tɕ", "j"), letter("ཉ", "ɲ", "ny")],
        [letter("ཏ", "t", "t"), letter("ཐ", "tʰ", "th"), letter("ད", "d", "d"), letter("ན", "n", "n")],
        [letter("པ", "p", "p"), letter("ཕ", "pʰ", "ph"), letter("བ", "w", "b"), letter("མ", "m", "m")],
        [letter("ཙ", "ts", "ts"), letter("ཚ", "tsʰ", "tsh"), letter("ཛ", "ts", "dz"), letter("ཝ", "ʁʷ", "w")],
        [letter("ཞ", "ɕ", "zh"), letter("ཟ", "xs", "z"), letter("འ", "", "’"), letter("ཡ", "j", "y")],
        [letter("ར", "ɻ", "r"), letter("ལ", "l", "l"), letter("ཤ", "x", "sh"), letter("ས", "s", "s")],
        [letter("ཧ", "h", "h"), letter("ཨ", "", "")],
    ]

    const Vowels = [[
        letter("ཨ", "a", "a"),
        letter("ཨི", "ə", "i"), letter("ཨུ", "ə", "u"), letter("ཨེ", "e", "e"), letter("ཨོ", "o", "o"),
    ]]

    const SubjoinedYa = [
        [letter("ཀྱ", "tɕ", "ky"), letter("ཁྱ", "tɕʰ", "khy"), letter("གྱ", "tɕ", "gy")],
        [letter("པྱ", "ɕ", "py"), letter("ཕྱ", "ɕ", "phy"), letter("བྱ", "ɕ", "by")],
        [letter("མྱ", "ɲ", "my")],
    ]

    const SubjoinedRa = [
        [letter("ཀྲ གྲ ཏྲ དྲ པྲ བྲ", "ʈɻ", "kr gr tr dr pr br"), letter("ཁྲ ཐྲ ཕྲ", "ʈɻʰ", "khr thr phr")],
        [letter("མྲ", "m", "mr"), letter("སྲ ཧྲ", "ʂ", "sr hr")]
    ]

    const SubjoinedLa = [
        [letter("ཀླ གླ བླ སླ", "l", "kl gl bl sl"), letter("ཟླ", "d", "zl"), letter("སླ", "ɬ", "sl")]
    ]

    const SubjoinedWa = [
        [letter("ཀྭ ཁྭ གྭ ཉྭ དྭ ཚྭ", "略", "kw khw gw nyw dw tshw")],
        [letter("ཞྭ ཟྭ སྭ ལྭ ཤྭ སྭ ཧྭ", "略", "zhw zw rw lw shw sw hw")],
    ]
</script>

<svelte:head>
    <title>安多藏语拼读</title>
</svelte:head>

<h1>安多藏语拼读</h1>

<p>藏文 <ruby>བོད་<rt>bod</rt>ཡིག་<rt>yig</rt></ruby> 是用来书写藏语 <ruby>བོད་<rt>bod</rt>སྐད་<rt>skad</rt></ruby> 的文字。</p>

<p>藏语有三大方言，分别是:</p>

<ul>
    <li>卫藏话 <ruby>དབུས་<rt>dbus</rt>སྐད་<rt> skad</rt></ruby></li>
    <li>康巴话 <ruby>ཁམས་<rt>khams</rt>སྐད་<rt>skad</rt></ruby></li>
    <li>安多话 <ruby>ཨ་<rt>a</rt>མདོ་<rt>mdo</rt>སྐད་<rt>skad</rt></ruby></li>
</ul>

<p>这三个方言中只有安多话是没有声调的，而卫藏话和康巴话都有声调。安多话保留了古藏语的更多辅音，而另外两个方言缺失的这些辅音演变成了声调。</p>

<p>本网站所使用的记号如下：国际音标写在方括号 [] 里头，威利转写写在尖括号 &lt;&gt; 里头。为什么不用汉语拼音呢？那是因为，安多话里面的一些音在普通话里没有。</p>

<p>当辅音字母单独出现的时候，默认附带一个元音 [a]。所以下表中的第一个字母读作 [ka]，第二个字母读作 [kʰa]。</p>

<LetterTable rows={Consonants}>
    辅音字母
</LetterTable>

<p>藏文的元音比较特别，/i/ /e/ /o/ 写在辅音字母的上面，/u/ 写在下面，而 /a/ 则如之前所说，不写出来。</p>

<p>另外还得特别注意 /i/ 和 /u/ 的发音，在只有单一一个辅音时都读作 [ə]。</p>

<LetterTable rows={Vowels}>
    元音字母
</LetterTable>

<LetterTable rows={SubjoinedYa}>
    下加字 <ruby>ཡ</ruby> ( <ruby>ྱ</ruby> )
</LetterTable>

<LetterTable rows={SubjoinedRa}>
    下加字 <ruby>ར</ruby> ( <ruby>ྲ</ruby> )
</LetterTable>

<LetterTable rows={SubjoinedLa}>
    下加字 <ruby>ལ</ruby>
</LetterTable>

<LetterTable rows={SubjoinedWa}>
    下加字 <ruby>ཝ</ruby> ( <ruby>ྭ</ruby> )
</LetterTable>

<br><br><br>

<style lang="scss">
    h1, p, li {
        font-family: -apple-system, sans-serif;
        color: #333;
    }

    ruby {
        font-family: "MiSans Tibetan VF", sans-serif;
    }

    rt {
        font-family: -apple-system, sans-serif;
        color: #555;
    }

    h1, h2, h3 {
        text-align: center;
    }
</style>
