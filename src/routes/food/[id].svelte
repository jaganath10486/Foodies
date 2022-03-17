<script context="module">
    export async function load({fetch, params})
    {
        let id =  params.id
        //console.log(id);
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const meals = await res.json();
        //console.log(meals.data.meal);
        console.log(meals.meals[0]);
        if(res.ok)
        {
            return {
                props : {
                    meal: meals.meals[0]
                }
            }
        }

        return {
            status : res.status
        }
    }
</script>

<script>
   export let meal = {};
   let times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   console.log(meal);

   let video = "https://www.youtube.com/embed/" +
                meal.strYoutube.split("=")[1];
   import Button from "$lib/shared/Button.svelte";
   import cart_items from '$lib/stores/Cart.js';
   const add = (item) => {
        cart_items.update((old_items) => 
        {
            old_items.push(item);
            let new_items = old_items.filter((it, index) => {
                return old_items.indexOf(it) === index;
            });
            return new_items;
        });
   }
</script>

<div class="food-item">
    <div class="img">
        <img src={meal.strMealThumb} alt={meal.strMeal}>
        <div class="btn">
            <Button type = 'primary' on:click = {() => add(meal)}>
                Add to Cart
            </Button>
        </div>
    </div>
    <div class="Ingredents">
      <h2>{meal.strMeal}</h2>
      <div class="In">
        <ul>
            <li class="active"><p class="item">Ingredents</p> <span class="quantity">Amount</span></li>
            {#each times as i}
               {#if meal[`strIngredient${i}`]}
               <li><p class="item">{meal[`strIngredient${i}`]}</p> <span class="quantity"> {meal[`strMeasure${i}`]} </span></li>
               {/if}
            {/each}
            </ul>
      </div>
    </div>
</div>
<div class="info">
    <h4>How to Cook this Delious Food 👩‍🍳</h4>
    {#if meal.strInstructions}
    <p>{meal.strInstructions}</p>
    {/if}
    {#if meal.strYoutube}
     <div class="video">
       
        <iframe
           title={meal.strMeal}
           src = {video}
           width="600"
           height="400"
        >
      </iframe>
    </div>
    {/if}
</div>

<style>
    .food-item
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 80px;
        margin-left: 80px;
        margin-right: 80px;
    }
    .img
    {
        width: 40%;
        height: 50vh;
        padding: 5px;
        animation: fade 1s;
    }
    img
    {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: transform 0.7s;
        cursor: pointer;
    }

    img:hover
    {
        transform: translateY(-10px);
    }

    .img .btn
    {
        text-align: center;
        padding: 10px;
    }

    .Ingredents
    {
        width: 40%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 80px;
    }

    .Ingredents h2
    {
        text-align: center;
        color: blueviolet;
        font-weight: 800;
        font-size: 25px;
        text-transform:capitalize;
    }
    .In
    {
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
    .In ul
    {
        list-style-type: none;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 0px;
    }
    .Ingredents ul li
    {
        cursor: pointer;
        background-color: white;
        border: 1px solid lightgray;
        display: inline-block;
        width: 100%;
        padding: 10px;
        border: 1px dotted lightgray;
        list-style-type: none;
        transition: transform .25s;
    }
    .active
    {
        font-weight: 900;
        font-size: 18px;
    }

    .Ingredents ul li:hover
    {
        transform: scale(1.03);
    }

    .Ingredents ul li p
    {
        display: inline;
        word-break: keep-all;
    }

    .Ingredents ul li span
    {
       float: right;
       width: 40%;
    }
    
    .info
    {   
        text-align: center;
        word-break:keep-all;
        padding: 50px;
    }
    .info h4
    {
        font-size: 25px;
        color: darkblue;
        padding-bottom: 20px;
        font-weight: 700;
    }
    .info p
    {
        text-align: justify;
        display: block;
        word-spacing: 5px;
        font-size: 20px;
    }
    .video
    {
        padding-top: 60px;
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

    @media screen and (max-width : 720px)
    {
        .food-item
        {
            display: flex;
            flex-direction: column;
            margin-left: 0px;
            margin-right: 10px;
        }
        .img
        {
            width: 100%;
            height: 30vh;
            margin-left: 20px;
        }
        .Ingredents
        {
            width: 100%;
            margin-left: 0px;
            padding-left: 0px;
        }
        .video
        {
            margin: 0px;
        }
        iframe
        {
            width: 230px;
            height: 200px;
        }
        .info
        {
            padding: 0px;
        }
        
    }
</style>