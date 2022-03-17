<script>
    export let type = '';
    export let flat = true;

</script>

<button class={type} class:flat={flat} on:click>
    <slot></slot>
</button>

<style>
    button
    {
        
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
    border: 0;
    border-radius: 6;
    outline: 0;
    margin: 0;
    padding: 10px 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    user-select: none;
    appearance: none;
    cursor: pointer;
    border-radius: 6px;

    background-color: lightblue;
    -webkit-tap-highlight-color: transparent;
    }
    .primary
    {
        background-color: green;
        color: red;
    }
    .secondary
    {
        background-color: red;
        color: green;
    }
</style>