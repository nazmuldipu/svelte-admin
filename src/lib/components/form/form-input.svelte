<script>
    export let placeholder = "";
    export let value = "";
    export let disabled = false;
    export let showLabel = true;
    export let label = ""
    let placeholderStyle = "";
    if (!showLabel) {
        placeholderStyle = "0px auto";
    } else {
        placeholderStyle = "15px auto";
    }
</script>

<div>
    {#if showLabel}
        <label for="email" class="block text-sm font-medium text-gray-700">
            {label}
        </label>
    {/if}
    <div class="mt-1">
        <input
            type="email"
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
</div>

<div class="mb-3 grid">
    {#if showLabel}
        <span class="">{placeholder}</span>
    {/if}
    <input class="field__input a-field__input" {disabled} bind:value />
    <div>info</div>
</div>
