<script context="module">
    export async function load({ fetch })
    {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const meals = await res.json();

        if(res.ok)
        {
            return {
                props : {
                    meal : meals.meals[0]
                }
            }
        }
        return 
        {
            status : res.status
        }
    }
</script>

<script>
    export let meal;
    import {fade} from 'svelte/transition';
    </script>

<div class="random">
    <div class="item" transition:fade>
        <a href={`/food/${meal.idMeal}`}><img src={meal.strMealThumb} alt={meal.strMeal}></a>
        <div class="name">{meal.strMeal}</div>
    </div>
</div>

<style>
    .random
    {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 120px;
    }
    .item
    {
       cursor: pointer;
       width: 350px;
       height: 60vh;
       animation: fade 1s ease-in;
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
    img
    {
       width: 100%;
       height: 90%;
       border-radius: 10px;
    }
    .name
    {
        text-align: center;
        font-size: 25px;
        color: red;
        font-weight: 700;
    }
</style>