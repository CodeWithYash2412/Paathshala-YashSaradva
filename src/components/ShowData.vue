<template>
    <div class=" flex justify-center flex-col items-center">
        <h2 class="my-5">Data Display</h2>
        <div class="mt-5">
            <div class="grid grid-cols-3 gap-3" v-if="data.length > 0">

                <div v-for="(users, index) in data" :key="index"
                    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ users.Fullname
                        }}
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ users.Email }} </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ users.Phone }} </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ users.Jobtitle }} </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ users.Jobtype }} </p>
                    <button v-on:click="handleDelete(users.id)"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Delete Data

                    </button>

                </div>



            </div>
            <div v-else class="flex justify-center items-center">
                <div
                    class="max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">No Data
                        </h5>
                    </a>


                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup>

import { DataStore } from '@aws-amplify/datastore';
import { UserModel } from '../models';
import { onMounted } from 'vue';
import { ref } from 'vue';
const data = ref([])

onMounted(() => {
    handleGetData()
})

const handleGetData = async () => {
    try {
        // List all items
        const models = await DataStore.query(UserModel);
        console.log(JSON.stringify(models));
        data.value = models
        console.log(data.value);

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

const handleDelete = async (id) => {
    const modelToDelete = await DataStore.query(UserModel, id);
    DataStore.delete(modelToDelete);
    handleGetData()
}

</script>

