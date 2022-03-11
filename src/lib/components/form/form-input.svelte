<script>
    export let rest = {type: "text"};
    export let name = "";
    export let disabled = false;
    // export let showLabel = true;
    export let label = "";
    export let error = "";
    // let placeholderStyle = "";
    // if (!showLabel) {
    //     placeholderStyle = "0px auto";
    // } else {
    //     placeholderStyle = "15px auto";
    // }
</script>

<div class="mt-1">
    <label class="block text-xs md:text-sm font-medium text-gray-600" for={name}>{label}</label>
    <input {...rest} name={name} id={name} placeholder={label} data-testid={name} disabled={disabled}
        class="block w-full px-2 md:px-4 py-0 md:py-1 text-xs md:text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
    {#if error }
        <div class="text-xs text-red-500"> {error} </div>
    {/if}
</div>
<!-- <div>
    {#if showLabel}
        <label for="email" class="block text-sm font-medium text-gray-700">
            {label}
        </label>
    {/if}
    <div class="mt-1">
        <input
            type="{type}"
            name="email"
            id="email"
            class="px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="{placeholder}"
            {disabled}
        />
        <div class="text-xs font-thin">
            We'll never share your email with anyone else.
        </div>
    </div>
</div> -->

<!-- <div class="mb-3 grid">
    {#if showLabel}
        <span class="">{placeholder}</span>
    {/if}
    <input class="field__input a-field__input" {disabled} bind:value />
    <div>info</div>
</div> -->
