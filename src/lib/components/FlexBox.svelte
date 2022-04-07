<script>
    export let direction = "row";
    export let reverse = false;
    export let wrap = true;
    export let align = "center";
    export let justify = "center";

    let alignMap = {start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch'};
    let justifyMap = {start: 'flex-start', center: 'center', end: 'flex-end', around: 'space-around', between: 'space-between', evenly: 'space-evenly'};
    let finalDirection = reverse ? 'reverse-' + direction : direction;
    let finalWrap = wrap ? 'wrap' : 'nowrap';
</script>

<div style="display: flex; flex-direction: {finalDirection}; flex-wrap: {finalWrap}; align-items: {alignMap[align]}; justify-content: {justifyMap[justify]};">
    <slot></slot>
</div>
