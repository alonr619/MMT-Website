<script>
    let message = "";
    let email;

    function addEmail() {
        message = "";
        try {
            fetch('https://formspree.io/f/mvoyzonk', { 
                method: "POST",
                body: JSON.stringify({
                    email:email
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(() => {
                try {
                    message = "Email added! Thanks for joining our newsletter";
                } catch(e) {
                    message = "Error! Please input valid email";
                }
            });
        } catch(e) {
            message = "Error! Please input valid email";
        }
    }
</script>

<div class="flex">
    <div class="newsletter">
        <h2>Newsletter Sign-Up</h2>
        <p>Enter your email to recieve the latest information about Mustang Math</p>
        <hr />
        <input type="email" placeholder="Email" bind:value={email} /><br />
        <button on:click={addEmail}>Submit</button>
        {#if message != ""}
            <br /><br />
            <p>{message}</p>
        {/if}
    </div>
</div>

<style>
    .newsletter {
        text-align: center;
        width: max-content;
        padding: 15px;
        border-radius: 10px;
        background-color: #65c083;
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-weight: 800;
        color: white;
        margin-bottom: 5px;
    }

    hr {
        color: white;
        background-color: white;
        width: 100px;
    }

    p {
        font-style: italic;
        margin: 0;
        padding: 0;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        color: white;
    }

    input {
        margin: 5px;
        margin-bottom: 10px;
        padding: 5px;
        color: white;
        border: 2px solid #1c6825;
        background-color: transparent;
        outline: none;
        width: 80%;
    }

    input::placeholder {
        color: rgb(234, 234, 234);
    }

    button {
        border: none;
        outline: none;
        padding: 5px 30px;
        border-radius: 50px;
        color: white;
        background-color: #1c6825;
    }

    button:hover {
        background-color: #469e51;
        cursor: pointer;
    }
</style>