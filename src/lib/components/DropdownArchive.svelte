<script>
    export let year;
    export let tests; // Should be a list in the form of [["Test 1", "path/to/test1.pdf"], ["Test 2", "path/to/test2.pdf"]], etc.
    export let answers;
    export let results;

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    let showContent = "none";
    const rotateImage = tweened(-90, {
        duration: 400,
        easing: cubicOut
    });
    function toggleContent(){
        if (showContent === "none"){
            showContent = "block";
            rotateImage.set(0);
        } else {
            showContent = "none";
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
    {year}
</div>
<div class="hidden-content" style="display: {showContent}">
    <table>
        {#each tests as test}
        <tr>
            <td><strong>{test[0]}</strong></td>
            <td><a sveltekit:prefetch href={test[1]}>Problems</a></td>
        </tr>
        {/each}
        <tr>
            <td><a sveltekit:prefetch href={answers}>Answers</a></td>
            <td><a sveltekit:prefetch href={results}>Results</a></td>
        </tr>
    </table>
</div>

<style>
    .dropdown{
        width: 80%;
        margin: 10px;
        font-size: 2em;
        margin-left: 5em;
    }
    .hidden-content{
        font-size: 1.5em;
        transition: 0.5s;
        animation: fadeIn 0.5s;
        margin-left: 7em;
    }
    .dropdown-image{
        width: 0.5em;
        height: 0.5em;
    }
    table{
        border-spacing: 1em;
    }
</style>