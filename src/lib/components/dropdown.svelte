<script>
    import Icon from "./icon.svelte";

    // Components
    export let obj = {
        title: "Dropdown",
        list: [
            { title: "item1", value: "item1" },
            { title: "item2", value: "item2" },
            { title: "item3", value: "item3" },
        ],
    };

    //Globals
    let toogleMenu = false;

    //Functions
    function handleToogleMenu() {
        toogleMenu = !toogleMenu;
    }
</script>

<span class="relative">
    <button
        on:click={handleToogleMenu}
        class="h-10 p-2 hover:bg-slate-300 rounded cursor-pointer flex"
    >
        {#if obj.icon}
            <Icon name={obj.icon} />
        {/if}
        <div class="px-2 hover:bg-slate-300 h-full flex items-center">
            {obj.title}
        </div>
    </button>
    <ul class="{toogleMenu === true ? 'block' : 'hidden'} dropdown ">
        {#each obj.list as item}
            <li>
                <a class="dropdown-item hover:bg-slate-300" href={item.link}>
                    <div class="w-4 h-4">
                        {#if item.icon}
                            <Icon name={item.icon} />
                        {/if}
                    </div>
                    <span class="ml-2">{item.title}</span></a
                >
            </li>
        {/each}
    </ul>
</span>

<style>
    .dropdown {
        position: absolute;
        background: #ffffff;
        list-style: none;
        margin: 0;
        padding: 1rem;
        top: 2.6rem;
        left: 0;
        z-index: 999;
        min-width: 220px;
        border: 0 none;
        box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
            0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.05, 0.74, 0.2, 0.99);
        border-radius: 4px;
        transform-origin: center top;
    }

    .dropdown .dropdown-item {
        color: #495057;
        padding: 0.5rem;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        transition: background-color 0.2s;
        cursor: pointer;
    }
</style>
