<script context="module">
    export async function load({ fetch })
    {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
        const meals = await res.json();
        //console.log(meals);

        if(res.ok)
        {
            return {
                props : {
                    meals : meals.meals
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
    export let meals;
</script>

<h4>BreakFast</h4>
<div class="random">
    {#each meals as meal}
    <div class="item">
        <a href={`/food/${meal.idMeal}`}><img src={meal.strMealThumb} alt={meal.strMeal}></a>
        <div class="name">{meal.strMeal}</div>
    </div>
    {:else}
     <p>Nothing To display</p>
    {/each}
</div>

<style>
    h4
    {
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
        font-weight: 800;
        color: blue;
        font-size: 25px;
    }
    .random
    {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-row-gap: 100px;
        grid-column-gap: 30px;
    }
    .item
    {
       cursor: pointer;
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