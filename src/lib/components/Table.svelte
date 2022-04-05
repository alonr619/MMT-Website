<script>
    export let data;
    export let headerColor = '#177012';
    export let rowColors = ['#B2913D', '#E8D90E'];
    export let width = "100%";
    export let headerSize = 2;
    export let textSize = 1.5;
</script>

<table style="width: {width}">
    <thead style="background-color: {headerColor}; font-size: {headerSize}em;">
        <tr>
            {#each Object.keys(data[0]) as heading}
            <th>{heading}</th>
            {/each}
        </tr>
    </thead>
    <tbody style="font-size: {textSize}em;">
        {#each Object.values(data) as row, i}
        <tr style="background-color: {rowColors[i%rowColors.length]}">
            {#each Object.values(row) as cell}
            <td>{cell}</td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>