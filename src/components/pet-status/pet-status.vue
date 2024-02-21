<template>
    <section class="status-box">
        <!-- table -->
        <table>
            <tr>
                <th>Voeding</th>
                <td>
                    <span v-for="stars in pet.saturation">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Hydratatie</th>
                <td>
                    <span v-for="stars in pet.hydration">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Gezondheid</th>
                <td>
                    <span v-for="stars in pet.health">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Training</th>
                <td>
                    <span v-for="stars in pet.training">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Geluk</th>
                <td>
                    <span v-for="stars in pet.happiness">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Energie</th>
                <td>
                    <span v-for="stars in pet.energy">⭐</span>
                </td>
            </tr>
        </table>
    </section>
</template>

<script setup>
import { pet } from '../../resources/petData'
</script>

<style lang="scss" scoped>
@use 'pet-status';
</style>
