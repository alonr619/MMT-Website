<script>
    export let show = false;
</script>

{#if show}
<div class="surround">
<div>
<!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
    <div id="mc_embed_signup">
        <form action="https://mustangmath.us14.list-manage.com/subscribe/post?u=c80101147f7690b2cd88056c7&amp;id=10f0771adf&amp;f_id=007a87e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
                <br />
            <div style="display: flex;align-items: center;justify-content: space-between">
                <h2><strong>Join Mustang Math Newsletter</strong></h2>
                <i class="fa-solid fa-x" style="color: gray;" on:click={() => {show = !show;}}></i>
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
    <div style="display: flex; align-items: center; justify-content: center">
    <div id="mce-responses" class="clear foot">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
    </div>
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c80101147f7690b2cd88056c7_10f0771adf" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
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
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    #mc_embed_signup{
        background:#fff; 
        clear:left; 
        width:400px;
    }

    .button {
        width: 100% !important;
        background-color: #1c6825 !important;
    }
</style>