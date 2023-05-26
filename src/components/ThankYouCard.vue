<script setup>
const props = defineProps({
    rating: {
        type: Object,
        required: true,
    },
});

const getSelectedRating = () => {
    return props.rating.find((star) => star.isSelected).value;
};

const getMaximumRating = () => {
    return props.rating.length;
};
</script>

<template>
    <div class="bg-neutral-dark-blue w-96 h-96 rounded-3xl m-3">
        <div class="flex justify-center mt-12">
            <img src="../assets/images/illustration-thank-you.svg" alt="thank you">
        </div>

        <p class="flex justify-center text-primary mt-7">
            <span class="py-1 px-6 bg-neutral-dark-grey rounded-3xl">
                You selected {{ getSelectedRating() }} out of {{ getMaximumRating() }}
            </span>
        </p>

        <h1 class="text-neutral-white text-2xl text-center font-semibold mt-5">Thank you!</h1>

        <p class="text-neutral-light-grey text-sm text-center mx-8 mb-6 mt-3">
            We appreciate you taking the time to give a rating.
            If you ever need more support, don’t hesitate to get in touch!
        </p>
    </div>
</template>

<style scoped></style>