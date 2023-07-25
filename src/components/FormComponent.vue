<template>
    <div class=" flex justify-center flex-col items-center">
        <h2>Form</h2>
        <div class=" w-1/2">

            <form>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_name" id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required v-model="name" />
                    <label for="floating_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fullname</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required v-model="email" />
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                        address</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_number" id="floating_number"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required v-model="phone" />
                    <label for="floating_number"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                        Number</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_jobTitle" id="floating_jobTitle"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required v-model="job_title" />
                    <label for="floating_jobTitle"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job
                        Title</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">

                    <select name="floating_jobType" id="floating_jobType"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required v-model="job_type">
                        <option value="">Select Job Type</option>

                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Remote">Remote</option>
                        <option value="In Office">In Office</option>
                    </select>
                    <label for="floating_jobTitle"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job
                        Title</label>
                </div>



                <button type="submit" v-on:click="submitData"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>

    </div>
</template>
  
<script setup>
import { DataStore } from '@aws-amplify/datastore';
import { UserModel } from '../models/index.js';
import { ref } from 'vue';


const name = ref('');
const email = ref('');
const phone = ref('');
const job_title = ref('');
const job_type = ref('');

const submitData = async (e) => {
    e.preventDefault();
    try {
        await DataStore.save(
            new UserModel({
                "Fullname": name.value,
                "Email": email.value,
                "Phone": phone.value,
                "Jobtitle": job_title.value,
                "Jobtype": job_type.value.slice("_").toUpperCase().toString()
            })
        );
        window.alert("Data Created Successfully")

    } catch (error) {
        console.error(error);
    }
    name.value = ''
    email.value = ''
    phone.value = ''
    job_title.value = ''
    job_type.value = ''

}
</script>
  