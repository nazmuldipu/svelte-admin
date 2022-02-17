<script>
import Dropdown from '$lib/components/dropdown.svelte';

import Icon from '$lib/components/icon.svelte';

	import { createEventDispatcher } from 'svelte';

    export let toogleNav;

	const dispatch = createEventDispatcher();

	function handleToogle() {
		dispatch('toogleNav', {});
	}

    let obj = {
        title: "Username",
        icon: "FaUser",
        list: [
            { title: "Profile", link: "/item3", icon: "FaUserAlt" },
            { title: "Settings", link: "/item1", icon: "FaCog" },
            { title: "Calendar", link: "/item2", icon: "FaRegCalendarAlt" },
            { title: "Inbox", link: "/item2", icon: "FaMailBulk" },
            { title: "Logout", link: "/item2", icon: "FaSignOutAlt" },
        ],
    };
</script>

<nav class="bg-white h-16 px-8 border flex justify-between text-slate-600 items-center">
    <div class="flex items-center">
        <button
            on:click={handleToogle}
            class="p-2 shadow-sm border rounded-md bg-slate-200 w-9 h-9"
        >
            {#if toogleNav}
                <Icon name={"FaChevronLeft"} />
            {:else}
                <Icon name={"FaChevronRight"} />
            {/if}
        </button>
        <div class="mx-4 border-r h-8" />
        <div class="uppercase text-xl">Dashboard</div>
    </div>

    <div class="flex items-center">
        <div class="h-10 p-2 hover:bg-slate-300 rounded cursor-pointer">
            <Icon name={"GoSearch"} />
        </div>
        <div class="h-10 p-2 hover:bg-slate-300 rounded cursor-pointer">
            <Icon name={"FaRegBell"} />
        </div>
        <div class="mx-4 border-r h-8" />
        <Dropdown {obj} />
        <div class="mx-4 border-r h-8" />
        <button
            on:click={handleToogle}
            class="p-2 shadow-sm border rounded-md bg-slate-200 w-9 h-9"
        >
            <Icon name={"FaAlignRight"} />
        </button>
    </div>
</nav>