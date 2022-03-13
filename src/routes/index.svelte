
<script>
 
  import Button from '$lib/shared/Button.svelte';
 
  import Reviews from '$lib/components/reviews.svelte'; 
  import Discover from '$lib/components/discover.svelte';
 
</script>


<div class="home">
    <section class="front">
        <div class="heading">
            <h2>Eat Healthy Food</h2>
            <h2>Live Well</h2>
        </div>

        <div class="info">
            <p>Taking Healthy Food is very important in now a days, Expacilly to avoid Diseases
               There is nothing feels better than watching Tv/Cricket along side eating the Food
               Just Sit in Place and Order Food 
               Stay Safe and Eat Healthy Food                 
            </p>
            <div class="btn">
                <Button>
                    Explore More
                </Button>
            </div>
        </div>
    </section>
</div>

<div>
  <Discover/>
</div>

<div class="review">
   <Reviews/>
</div>

<style>
    .home
    {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        border: 1px solid black;
        background-image: url('/image2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: rgba(0,0,0,.74);
        background-blend-mode: hue;
        flex-grow: 1;
        cursor:grab;
    }
    .front
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: whitesmoke;
        font-size: 20px;
        padding-top: 170px;
        padding-left: 100px;
        padding-right: 100px;
    }
    .heading
    {
        width: 40%;
        word-break:keep-all;
        font-weight: 700;
        align-self: center;
        font-size: 35px;
    }

    .info
    {
        width: 40%;
        padding: 10px;
        word-break: break-all;
        align-self: center;
        font-size: 20px;
    }
</style>