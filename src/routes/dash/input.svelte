<script>
    import SvInput from "$lib/components/form/form-input.svelte";

    let inputText = "hello";
    
</script>

<div class="grid grid-cols-2 gap-5">
    <div class="shadow-md bg-white p-4 rounded">
        <SvInput
            bind:value={inputText}
            showLabel={true}
            label="InputText"
            placeholder="Custom placeholder"
            disabled={false}
        />
    </div>
</div>
