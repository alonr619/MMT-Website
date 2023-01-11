<script context="module">
    export async function load({ url }) {
        const link = url.searchParams.get('link');
        const get = url.searchParams.get('get').replace("%26", "&") + "&link=" + link;


        if (get) {
            await fetch(get, {
                method: 'GET'
            });
        }

        return {
            status: 302,
            redirect: link
        };
    }
</script>