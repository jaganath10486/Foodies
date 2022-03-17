<script>
    import cart_items from '$lib/stores/Cart';
    import {onMount, onDestroy} from 'svelte';
    import Button from '$lib/shared/Button.svelte';
    import {fade, slide,fly, blur} from 'svelte/transition';

    let cart_it = [];

    onMount(() => 
    {
        const unsub = cart_items.subscribe((data) => {
        cart_it = data;
    });
    
    });

    const clear = (item) => {
        cart_items.update( (old_item) =>{
            let new_items = old_item.filter(it => it.idMeal != item.idMeal);
            //console.log(new_items);
            return new_items;
        });
    };

    const clearall = () => {
        const new_item = [];
        cart_items.set(new_item);
    };

</script>

<div class="orders">
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th style="width: 40%;">Item</th>
                <th>Clear</th>
            </tr>
        </thead>
        <tbody>
          {#each cart_it as item}
             <tr out:slide|local>
                 <td>{item.idMeal}</td>
                 <td class="img" style="width: 40%;"> <a href={`/food/${item.idMeal}`}> <img src={item.strMealThumb} alt={item.strMeal}> </a>
                 <span>{item.strMeal}</span></td>
                 <td>
                     <Button on:click = {() => clear(item)}>
                         Clear
                     </Button>
                 </td>
             </tr>
           {/each}
        </tbody>
    </table>
</div>

<div class="btn">
    <Button type="secondary" on:click={clearall}>
        Clear ALL
    </Button>
</div>

<style>
    .orders
    {
        width: 100%;
        padding: 20px;
    }
    table
    {
        width: 100%;
        border-collapse: collapse;
    }
    td, th
    {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
        vertical-align: middle;
    }
    th
    {
        font-weight: 800; 
    }
    img
    {
        width: 250px;
        height: 250px;
        animation: fade 1s;
    }
    a
    {
        text-decoration: none;
        color: blue;
    }
    span
    {
       display: block;
    }
    a:hover
    {
        color: red;
    }
    .btn
    {
        text-align: center;
    }
    @keyframes fade
    {
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }
        100%
        {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @media screen and (max-width : 480px)
    {
        img
        {
            width: 100%;
            height: 100%;
        }
    }
</style>