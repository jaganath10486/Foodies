<script>
    import cart_items from '$lib/stores/Cart';
    import {onMount, onDestroy} from 'svelte';
    import Button from '$lib/shared/Button.svelte';

    let cart_it = [];

    onMount(() => 
    {
        const unsub = cart_items.subscribe((data) => {
        cart_it = data;
    });

    });

</script>

<div class="orders">
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th style="width: 40%;">Item</th>
                <th>Item Name</th>
                <th>Extra Info</th>
                <th>Clear</th>
            </tr>
        </thead>
        <tbody>
          {#each cart_it as item}
             <tr>
                 <td>{item.idMeal}</td>
                 <td class="img" style="width: 40%;"><img src={item.strMealThumb} alt={item.strMeal}></td>
                 <td>{item.strMeal}</td>
                 <td><a href={`/food/${item.idMeal}`}>Know More</a></td>
                 <td>
                     <Button>
                         Clear
                     </Button>
                 </td>
             </tr>
           {/each}
        </tbody>

    </table>
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
        width: 300px;
        height: 300px;
        animation: fade 1s;
    }
    a
    {
        text-decoration: none;
        color: blue;
    }
    a:hover
    {
        color: red;
    }
    @keyframes -gloabl-fade
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
</style>