# Instructions for Setting up Local Environment
1. Clone repo. I recommend to use GitHub Desktop for this, since it's easier, but you can also do it with terminal
2. Open in VSCode (any text editor works, but I recommend this), and install the Svelte plugin for code coloring
3. Open up a terminal in VSCode, and enter `npm install` and `npm run dev -- --open`
4. Start coding! :)

# Links
https://svelte.dev - You can find all the tutorials and examples for Svelte here  
https://kit.svelte.dev - Will be relevant once we start making the actual website. I recommend to read the pages section, as we won't be having a backend  
https://docs.google.com/document/d/1Gt61MZgAF_WwUiybIuf0nMSMYmLgYby1-loBxoR5eVI/edit#heading=h.c9v07snpdcl8 - internal documentation, update after every component is made  
https://linguinecode.com/post/how-to-pass-children-elements-in-svelte - children with Svelte components

# Process for Making Components
1. Take one of the open issues
2. Make a branch if you don't have one already. If you do have a branch, delete and make a new one with the same name to refresh changes
3. Code the component locally
    a. Required attributes do not need to have a default value
    b. Optional attributes *still need to be in your component*. They simply need to have a default value
    c. All components will go into `/src/lib/components`. This has the added advantage that, when we import the component, we can simply refer to it as `$lib/components/[component name].svelte`, so we don't need to worry about relative paths
    d. Name your component file name with a capital starting letter, so we can differentiate between user-made components and default HTML tags.
4. Test it out in `/src/routes/index.svelte`
5. Push your commits to your branch, then make a pull request
    a. If there are any errors, my automatic comment below will tell you
6. I will merge it to main if it is good