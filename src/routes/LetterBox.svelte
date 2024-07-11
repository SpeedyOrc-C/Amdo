<script lang="ts">
    export let amdo: string = "a"
    export let wylie: string = "ཨ"
    export let tibetan: string = "a"
    export let mask: string | null = null
</script>

<div class="letter">
    <div class="pronunciation">
        <div class="amdo">
            [{amdo}]
        </div>
        <div class="wylie">
            /{wylie}/
        </div>
    </div>

    <div class="tibetan misans-tibetan">
        <div class="with-vowel">
            {tibetan}
        </div>
        {#if mask}
            <div class="zero-consonant-mask">
                {mask}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .letter {
        display: flex;
        flex-direction: column;
    }

    .pronunciation {
        display: flex;
        padding: 0.2rem;

        text-align: center;
        letter-spacing: 1px;
    }

    .amdo {
        flex: 1;
        color: #555;
    }

    .wylie {
        flex-grow: 0.5;
        color: #555;
    }

    .tibetan {
        position: relative;

        text-align: center;
        font-size: 2rem;
        font-weight: 300;

        & .zero-consonant-mask {
            position: absolute;
            width: 100%; height: 100%;
            top: 0; left: 0;
            color: #aaa;
        }
    }
</style>
