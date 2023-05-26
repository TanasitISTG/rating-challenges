<script setup>
const props = defineProps({
    rating: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="bg-neutral-dark-blue w-96 h-96 rounded-3xl">
        <div class="w-12 h-12 grid place-items-center rounded-full bg-neutral-dark-grey m-8 mb-5">
            <img src="../assets/images/icon-star.svg" alt="star">
        </div>

        <h1 class="text-neutral-white text-2xl ml-8 mb-2">How did we do?</h1>
        <p class="text-neutral-light-grey text-sm mx-8 mb-6">
            Please let us know how we did with your support request. All feedback is
            appreciated to help us improve our offering!
        </p>

        <div class="flex justify-between gap-1 items-center mx-8">
            <div class="w-12 h-12 rounded-full grid place-items-center font-semibold cursor-pointer hover:bg-primary hover:text-neutral-white transition-colors duration-200"
                :class="star.isSelected ? 'bg-neutral-light-grey text-neutral-white' : 'bg-neutral-dark-grey text-neutral-medium-grey'"
                v-for="(star, index) in props.rating" :key="index" @click="$emit('set-rating', star.value)">
                {{ star.value }}
            </div>
        </div>

        <button
            class="w-80 h-10 rounded-3xl text-neutral-white text-base font-medium mx-8 my-7 bg-primary tracking-widest hover:bg-neutral-white hover:text-primary transition-colors duration-300"
            @click="$emit('submit-rating')">
            SUBMIT
        </button>
    </div>
</template>

<style scoped></style>  