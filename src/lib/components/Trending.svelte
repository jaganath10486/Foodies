<script>
   export let meal = {};
   console.log(meal);   
</script>

<div class="trend">
   <div class="item">
      <a sveltekit:prefetch href = {`/food/${meal.idMeal}`}>Hello</a>
   </div>
</div>

<style>

</style>