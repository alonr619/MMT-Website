<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    
    export let mainText; // The text you always see and click on
    
    let showContent = "none";
    let imageSrc = "right-arrow.png";
    const rotateImage = tweened(-90, {
        duration: 400,
        easing: cubicOut
    });
    function toggleContent(){
        if (showContent === "none"){
            showContent = "block";
            imageSrc = "down-arrow.png";
            rotateImage.set(0);
        } else {
            showContent = "none";
            imageSrc = "right-arrow.png";
            rotateImage.set(-90);
        }
    }
</script>

<div class="dropdown" on:click={toggleContent}>
    <svg class="dropdown-image" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="199.404px" height="199.404px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
	 xml:space="preserve">
        <g>
	        <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695" transform="rotate({$rotateImage} 99.702 99.702)"/>
        </g>
    </svg>
    {mainText}
</div>
<div style="display: {showContent};" class="hidden-content"><slot></slot></div>

<style>
    .dropdown{
        width: 80%;
        font-size: 2em;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        cursor: grab;
        background-color: white;
        border-radius: 25px;
        padding: 10px;
        padding-left: 20px;
        box-shadow: 5px 10px 10px rgb(0,0,0,0.1);
        opacity: 0.8;
        transition: 0.5s;
    }
    .dropdown:hover{
        box-shadow: 5px 10px 10px rgb(0,0,0,0.1);
        opacity: 1;
    }
    .hidden-content{
        width: 80%;
        font-size: 1em;
        transition: 1s;
        animation: fadeIn 1s;
        margin-left: 5vw;
        margin-right: 5vw;
        background-color: white;
        border-radius: 25px;
        padding: 10px;
        box-shadow: 4px 8px 10px rgb(0,0,0,0.1);
        opacity: 0.8;
    }
    .dropdown-image{
        width: 0.5em;
        height: 0.5em;
    }
</style>
