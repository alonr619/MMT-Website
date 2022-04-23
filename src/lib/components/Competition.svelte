<script>
    export let competition;
    export let imgSource;
    export let description;
</script>

<div class="competition-box">
    <div class="competition-img">
        <img alt={competition} src={imgSource} />
    </div>
    <p class="title-p">{competition}</p>
    <p class="desc-p">{description}</p>
</div>

<style>
    .competition-box{
        background-color: white;
        width: 15em;
        padding: 10px;
        border-radius: 15px;
        margin: 10px;
        box-shadow: 5px 10px 10px rgb(0,0,0,0.1);
        transition: 0.5s;
        opacity: 0.8;
        height: 20em;
    }
    .competition-box:hover{
        box-shadow: 10px 20px 10px rgb(0,0,0,0.1);
        opacity: 1;
    }
    .competition-img{
        margin: 10%;
    }
    .title-p{
        font-size: 1.5rem;
        text-align: center;
    }
    .desc-p{
        font-size: 1rem;
        text-align: center;
    }
    img{
        max-width: 5em;
        margin: auto;
        display: block;
        width: 50%;
    }
</style>