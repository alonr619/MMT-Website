<script>
    import { page } from '$app/stores';
    import token from '$lib/storage';
    import { onMount } from 'svelte';
    import keys from "$lib/key.json";
    import { JWT } from "google-auth-library";
    import { google } from "googleapis";
    import { variables } from '$lib/variables';

    let fieldToken = "";
    let message = "";

    const client = new JWT({
        email: keys.client_email,
        key: keys.private_key,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    
    const contestDojoID = $page.url.searchParams.has('id');
    console.log(variables.token);

    onMount(async () => {
		if (token == variables.token) {
            message = "";
            message = "Success... checking person in";
            /*const service = await google.sheets({ version: "v4", auth: client });
            const getData = await service.spreadsheets.values.get({
                spreadsheetId: "1ARaswzVuq4Tltbc08BQnCj5s-wr0tQAvrJ1538tCKmc",
                range: "Registration!A2:D",
            });
            var result = getData.filter(function(v,i) {
                return v[0] === contestDojoID;
            });
            console.log(result);*/
        }
	});

    async function checkToken() {
        if (fieldToken == variables.token) {
            token.set(fieldToken);
            message = "Success... checking person in";
            //update spreadsheet
        } else {
            message = "Error: type correct token";
        }
    }
</script>

{#if token != variables.token}
    <input bind:value={fieldToken} placeholder="token" />
    <button on:click={checkToken}>Submit</button>
    <p>{message}</p>
{:else}
    <p>{message}</p>
{/if}