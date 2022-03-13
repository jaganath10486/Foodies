<script>
   let discovers = [

        {
            name : 'Filter by Category',
            route : '/food/catagery'
        },
        {
            name : 'Filter by Area',
            route : '/food/Area'
        },
        {
            name : 'Lookup a single random meal',
            route : '/food/randommeal'
        }
        ];
</script>


<div class="discover">
    <h1>Discover More</h1>
    <div class="line"></div>
    <div class="search">
        {#each discovers as i}
          <div class="lookup">
              <a href={i.route}>{i.name}</a>
          </div>
        {/each}
    </div>
</div>

<style>
    .discover
    {
        margin: 0px;
        width: 100%;
        height: fit-content;
        padding: 0px;
        background-color: var(--system-primary-color); 
        color: var(--system-text-color);
        margin-bottom: 100px;
    }
    .discover h1
    {
        text-align: center;
        padding : 20px;
        font-size: 30px;
        font-weight: 700;
        font-style: normal;
        color:darkblue;
       
    }
    .search
    {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 30px;
        grid-row-gap: 20px;
    }
    .lookup
    {
        width: 100%;
        height: 100px;
        padding: 10px;
        
        text-align: center;
        border: 1px solid lightslategrey;
        border-radius: 20px;
        background-color: lightsteelblue;
        user-select: none;
    }
    .lookup a
    {
        text-decoration: none;
        color: blue;
        font-size: 20px;
        display: block;
        position: relative;
        transform: translateY(18px);
    }
    .lookup a:hover
    {
        color: red;
    }
</style>