<script>
    let reviews = [
        {
            img : '/modi.png',
            name : 'Narendra Modi',
            stars : [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star"

            ],
            text : 'This Website is so awsome for cooking food and to be healthy this foodies even provide some youtubes to cook the food Basically i love this website and service is also great.'
            
        },
        {
            img : '/allu.jpeg',
            name : 'Allu Arjun',
            stars : [
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star",
                "fa-solid fa-star-half-stroke"
            ],
            text : 'Take Good food and Be healthy After Completion of shooting or when i feel bore I always try to do something innovtive like cooking my own food This Foodies help me in this Things Thank you Foodies.'
        },
        {
            img : '/emila.png',
            name : 'Emila Clark',
            stars : [
                "fa-solid fa-star","fa-solid fa-star","fa-solid fa-star","fa-solid fa-star","fa-solid fa-star",
            ],
            text : 'I am very greatful this Foodie Thank u I always try these food Items on weekend, By seeing these we can easily make food items Thank You Foodies for a great delicious Food'
        },
    ];
    

</script>


<div class="reviews">
    <div class="inner">
        <h1>Our Customer Reviews</h1>
        <div class="line"></div>

        <div class="row">
            {#each reviews as review}
              <div class="col">
                  <div class="col-inner">
                      <img src={review.img} alt={review.name}>
                      <div class="name">{review.name}</div>
                      <div class="stars">
                          {#each review.stars as star}
                            <i class="{star}"></i>
                          {/each}
                      </div>
                      <p>{review.text}</p>
                  </div>
              </div>
            {/each}
        </div>
    </div>
</div>


<style>
    .reviews
    {
        padding: 40px 0;
        background-color: #f1f1ff;
        color: #434343;
        text-align: center;
    }
    .inner
    {
        max-width: 1200px;
        margin: auto;
        overflow: hidden;
        padding: 0px 20px;
    }
    .line
    {
        width: 160px;
        height: 5px;
        background-color: green;
        margin: 26px auto;
    }
    .row
    {
        display:grid;
        grid-template-columns: 33% 33% 33%;
        grid-column-gap: 20px;
    }
    .col
    {
        box-sizing: border-box;
        padding: 10px;
        cursor: pointer;
        
    }
    .animate
    {
        animation: fade 1s;
    }
    .col-inner
    {
        background-color: #fff;
        padding: 30px;
    }
    img
    {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .name
    {
        font-size: 20px;
        text-transform: uppercase;
        margin: 20px 0px;
    }
    .stars
    {
        color: lightgreen;
        margin-bottom: 25px;
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

    @media screen and (max-width : 960px)
    {
        .row
        {
            grid-template-columns: 50% 50%;
        }
    }
    @media screen and (max-width : 620px)
    {
        .row
        {
            grid-template-columns: 100%;
        }
    }
</style>