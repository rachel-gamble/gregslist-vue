<template>
    <div class="container-fluid">

        <h1 class="text-center">Houses</h1>
        <div class="row justify-content-center">
            <div class="col-8 bg-white p-3 elevation-1 rounded">
                <!-- <HouseForm /> -->
            </div>
        </div>










        <div class="row">
            <div v-for="h in houses" class="col-md-4 p-4">
                <!--HOUSE CARD-->

                <div class="card text-center elevation-2 selectable">
                    <img class="img-fluid rounded square-bottom" :src="h.imgUrl">
                    <h5> MAKE | MODEL | YEAR </h5>
                    <div class="p-2 text-start">house description</div>
                    
                </div>
                
                <!-- <HouseCard :house="h" /> -->
            </div>
        </div>





    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState';
import { housesService } from '../services/HousesService.js'
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }
        }
        onMounted(() => {
            getHouses()
        })
        return {
            houses: computed(() => AppState.houses)
        };

    }
}
</script>

<style lang="scss" scoped>

</style>