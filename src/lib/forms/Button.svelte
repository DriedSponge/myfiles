<script lang="ts">
    export let name: string = "Button";
    export let type: string = "button"
    let clazz:string;
    export {clazz as class};
    export let style: "danger"|"warning"|"sucess"|"secondary"|"primary" = "secondary"
</script>
<button class="{style + " " + clazz} p-3" type="{type}">{name}</button>
<style lang="postcss">
    button{
        @apply w-full font-bold text-lg;
    }
    .danger{
        background-color: #F4644A;
        @apply text-white;
    }
</style>