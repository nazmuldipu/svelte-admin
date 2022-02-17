<script>
    //Imports;
    import DashNavbar from "$lib/header/dash-navbar.svelte";

    //Globals
    let toogleNav = true;

    //Functions
    function handleToogle() {
        toogleNav = !toogleNav;
    }
</script>

<div
    class:-translate-x-full={toogleNav !== true}
    class="bg-slate-700 w-64 h-full fixed left-0 top-0 overflow-hidden shadow-sm flex flex-col transition-all z-50"
>
    Sidenav
</div>
<div
    class:md:ml-64={toogleNav === true}
    class="flex flex-col min-h-screen transition-all"
>
    <DashNavbar {toogleNav} on:toogleNav={handleToogle} />
    <slot />
</div>
<div
    class:hidden={toogleNav !== true}
    class="md:hidden fixed top-0 left-0 w-full h-full ease-in duration-300 z-40 bg-black opacity-60"
    on:click={handleToogle}
>
    transparent
</div>
<div>Footer</div>
