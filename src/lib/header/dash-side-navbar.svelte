<script>
import Icon from "$lib/components/icon.svelte";
    import data from '$lib/data/side-nav.json';
    export let toogleNav;
</script>

<nav
    class:-translate-x-full={toogleNav !== true}
    class="bg-slate-700 w-64 h-full fixed left-0 top-0 overflow-hidden shadow-sm flex flex-col transition-all z-50 text-white px-4"
>
    <div class="p-3 text-4xl text-center font-thin border-b">LOGO</div>
    {#each data as item }
        <div class="py-3 border-b">
            <div class="text-gray-400">{item.title}</div>
            <ul class="pt-2">
                {#each item.list as nav}
                    <li>
                        <a class="flex items-center text-sm py-2" href="{nav.link}">
                            <div class="w-4 h-4 mr-2"><Icon name={nav.icon} /></div>
                            {nav.title}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    {/each}

</nav>
