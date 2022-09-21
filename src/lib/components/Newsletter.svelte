<script>
    export let show = false;
</script>

{#if show}
<div class="surround">
<div>
<!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
    <div id="mc_embed_signup">
        <div style="position: absolute; top: 15px; right: 15px;"><i class="fa-solid fa-x" style="color: gray;cursor:pointer;" on:click={() => {show = !show;}}></i></div>
        <form action="https://mustangmath.us14.list-manage.com/subscribe/post?u=c80101147f7690b2cd88056c7&amp;id=10f0771adf&amp;f_id=007a87e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
            <div>
                <h2><strong>Join Mustang Math Newsletter</strong></h2>
            </div>
    <div class="mc-field-group">
        <label for="mce-FNAME">First Name</label>
        <input type="text" value="" name="FNAME" class="" id="mce-FNAME" required>
        <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
    </div>
    <div class="mc-field-group">
        <label for="mce-LNAME">Last Name </label>
        <input type="text" value="" name="LNAME" class="" id="mce-LNAME" required>
        <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
    </div>
    <div class="mc-field-group">
        <label for="mce-EMAIL">Email Address
    </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
    </div>
    <div>
    <div id="mce-responses" class="clear foot" style="width: 0%;">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
    </div>
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c80101147f7690b2cd88056c7_10f0771adf" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
            </div>
        </div>
    </div>
    </div>
    </form>
    </div>
</div>
</div>
{/if}

<style>
    .surround {
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0px;
        width: 100%;
        height: 100vh;
        z-index: 100;
    }

    #mc_embed_signup{
        background:#fff; 
        clear:left; 
        width:400px;
        padding: 5px;
        padding-right: 0;
        border-radius: 15px;
        position: relative;
        grid-template-columns: 4fr;
    }

    #mc_embed_signup .foot {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button {
        width: 100% !important;
        margin: 0 !important;
        background-color: #2c9c39 !important;
    }

    #mc_embed_signup_scroll {
        margin: 0 !important;
        width: 100%;
        padding: 0 !important;
    }
</style>