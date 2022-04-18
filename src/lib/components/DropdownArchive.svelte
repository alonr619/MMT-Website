<script>
    export let year;
    export let tests; // Should be a list in the form of [["Test 1", "path/to/test1.pdf"], ["Test 2", "path/to/test2.pdf"]], etc.
    export let answers;
    export let results;

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import Dropdown from '$lib/components/Dropdown.svelte';

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

<Dropdown mainText="{year}">
    <table>
        {#each tests as test}
        <tr>
            <td><strong>{test[0]}</strong></td>
            <td><a target="_blank" sveltekit:prefetch href={test[1]}>Problems</a></td>
        </tr>
        {/each}
        <tr>
            <td><a target="_blank" sveltekit:prefetch href={answers}>Answers</a></td>
            <td><a target="_blank" sveltekit:prefetch href={results}>Results</a></td>
        </tr>
    </table>
</Dropdown>

<style>
    table{
        border-spacing: 1em;
    }
</style>
