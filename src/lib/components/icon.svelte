<script>
    //Imports
    import { onMount } from "svelte";

    export let name = "FaCog";
    let Thing;

    const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

    onMount(async () => {
        await sleep(300); // simulate network delay
        switch (name) {
            case "FaCog":
                Thing = (await import("svelte-icons/fa/FaCog.svelte")).default;
                break;
            case "FaRegBell":
                Thing = (await import("svelte-icons/fa/FaRegBell.svelte"))
                    .default;
                break;
            case "FaChevronLeft":
                Thing = (await import("svelte-icons/fa/FaChevronLeft.svelte"))
                    .default;
                break;
            case "FaChevronRight":
                Thing = (await import("svelte-icons/fa/FaChevronRight.svelte"))
                    .default;
                break;
            case "FaAlignRight":
                Thing = (await import("svelte-icons/fa/FaAlignRight.svelte"))
                    .default;
                break;
            case "FaUser":
                Thing = (await import("svelte-icons/fa/FaUser.svelte")).default;
                break;
            case "FaRegBell":
                Thing = (await import("svelte-icons/fa/FaRegBell.svelte")).default;
                break;
            case "GoSearch":
                Thing = (await import("svelte-icons/go/GoSearch.svelte"))
                    .default;
                break;
            case "FaUserAlt":
                Thing = (await import("svelte-icons/fa/FaUserAlt.svelte"))
                    .default;
                break;
            case "FaRegCalendarAlt":
                Thing = (
                    await import("svelte-icons/fa/FaRegCalendarAlt.svelte")
                ).default;
                break;
            case "FaMailBulk":
                Thing = (await import("svelte-icons/fa/FaMailBulk.svelte"))
                    .default;
                break;
            case "FaSignOutAlt":
                Thing = (await import("svelte-icons/fa/FaSignOutAlt.svelte"))
                    .default;
                break;
            default:
                Thing = (await import("svelte-icons/fa/FaCog.svelte")).default;
                break;
        }
    });
</script>

<svelte:component this={Thing} />
