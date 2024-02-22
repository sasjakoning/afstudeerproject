<template>
    <section class="status-box">
        <!-- table -->
        <table>
            <tr>
                <th>Voeding</th>
                <td>
                    <span v-for="stars in pet.stats.saturation">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Hydratatie</th>
                <td>
                    <span v-for="stars in pet.stats.hydration">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Gezondheid</th>
                <td>
                    <span v-for="stars in pet.stats.health">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Training</th>
                <td>
                    <span v-for="stars in pet.stats.training">⭐</span>
                </td>
            </tr>
            <tr>
                <th>Geluk</th>
                <td>
                    <span v-for="stars in pet.stats.happiness">⭐</span>
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
