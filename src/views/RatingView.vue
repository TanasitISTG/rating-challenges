<script setup>
import { ref } from 'vue';
import RatingCard from '../components/RatingCard.vue';
import ThankYouCard from '../components/ThankYouCard.vue';

const isSubmitted = ref(false);
const stars = ref([
    {
        value: 1,
        isSelected: false,
    }, {
        value: 2,
        isSelected: false,
    }, {
        value: 3,
        isSelected: false,
    }, {
        value: 4,
        isSelected: false,
    }, {
        value: 5,
        isSelected: false,
    }
]);

const setRating = (value) => {
    stars.value.forEach((star) => {
        if (star.value === value) {
            star.isSelected = true;
        } else {
            star.isSelected = false;
        }
    });
};

const submitRating = () => {
    if (stars.value.find((star) => star.isSelected === true) === undefined) {
        return;
    }

    isSubmitted.value = true;
};
</script>

<template>
    <div class="h-full flex justify-center items-center bg-neutral-very-dark-blue">
        <RatingCard @set-rating="setRating" @submit-rating="submitRating" :rating="stars" v-if="!isSubmitted" />
        <ThankYouCard :rating="stars" v-else />
    </div>
</template>

<style scoped></style>