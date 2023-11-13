<template>
    <div class="grid grid-cols-3 mt-10">
        <div class="col-span-1 col-start-2">
            <div class="flex flex-col gap-1 justify-center ml-10 w-full ">
                <h2 class="pt-0 text-lg font-medium">Opret ny EKK</h2>
                <form>
                    <label for="bom">
                        KFE-nr:
                        <input class="rounded bg-kfe-base" type="number" v-model=" kfeNr " id="bom" required>
                    </label>
                </form>
                <form>
                    <label for="bom">Udlevering:
                        <select class="rounded dropdown bg-kfe-base h-7" v-model=" Indikation " id="bom">
                            <option value="nyre">Genomisk MDT</option>
                            <option value="lunge">Internt medicinråd</option>
                            <option value="lunger">Internt medicinråd/Genomisk MDT</option>
                            <option value="lungerr">Kræver ikke særlig godkendelse</option>
                            <option value="lungerrr">Uoplyst</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label for="bom">
                        Title:
                        <input class="rounded bg-kfe-base" type="text" required>
                    </label>
                </form>
                <form>
                    <label for="bom">Diagnose:
                        <select class="rounded dropdown bg-kfe-base h-7" v-model=" diagnose " id="bom">
                            <option value="nyre">Nyrekræft</option>
                            <option value="lunge">Lungekræft</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label for="bom">Indtagelse:
                        <select class="rounded dropdown bg-kfe-base h-7" v-model=" Indtagelse " id="bom">
                            <option value="nyre">Nyrekræft</option>
                            <option value="lunge">Lungekræft</option>
                        </select>
                    </label>
                </form>
                <form>
                    <form>
                        <label for="bom">Modalitet:
                            <select class="rounded dropdown bg-kfe-base h-7" v-model=" Modalitet " id="bom">
                                <option value="nyre">Nyrekræft</option>
                                <option value="lunge">Lungekræft</option>
                            </select>
                        </label>
                    </form>
                </form>

                <form>
                    <label for="bom">
                        Startdato:
                        <input class="rounded bg-kfe-base" type="number" id="bom" required>
                    </label>
                </form>
                <form>
                    <label for="bom">
                        Slutdato:
                        <input class="rounded bg-kfe-base" type="number" id="bom" required>
                    </label>
                </form>
                <form>
                    <label for="bom">Status:
                        <select class="rounded dropdown bg-kfe-base h-7" v-model=" Status " id="bom">
                            <option value="nyre">Nyrekræft</option>
                            <option value="lunge">Lungekræft</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label for="bom">
                        Registerings sted:
                        <input class="rounded bg-kfe-base" type="text" required>
                    </label>
                </form>
                <form>
                    <label for="bom">
                        Bemærkninger:
                        <input class="rounded bg-kfe-base" type="text">
                    </label>
                </form>
                <form>
                    <label for="bom">Patientinfo:
                        <select class="rounded dropdown bg-kfe-base h-7" v-model=" Indikation " id="bom">
                            <option value="ja">Ja</option>
                            <option value="nej">Nej</option>
                        </select>
                    </label>
                </form>
                <!-- TODO make funtionality to add docter and nurses -->
                <div class="h-32 max-w-[415px] mt-3 rounded border border-black"> Tilføj Ansvarlig læge og
                    ProjektSygeplejske
                    *fix me*
                </div>
                <button @click=" submitment "
                    class="bg-kfe-primary max-w-[415px] text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md  py-2  my-2">
                    <i class="fa-solid fa-door-open"></i> Opret Protokol
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const ptNumber = ref('')
const cprNr = ref('')
const alderVedBehandling = ref('')
const kfeNr = ref('')
const navn = ref('')
const diagnose = ref('')
const behandlingsdato = ref('')
const inkluderetAf = ref('')
const registeret = ref('')
const bemærkninger = ref('')

function submitment() {
    const submitMe = {
        ptNumber: ptNumber.value,
        cprNr: cprNr.value,
        navn: navn.value,
        alderVedBehandling: alderVedBehandling.value,
        kfeNr: kfeNr.value,
        diagnose: 87874,
        behandlingsdato: behandlingsdato.value,
        inkluderetAf: inkluderetAf.value,
        registeret: registeret.value,
        bemærkninger: bemærkninger.value,
    };
    if (confirm("Vil du gennem patienten?") == true) {

        const path = 'http://localhost:5000/patient-opret';
        axios.post(path, submitMe);
    } else {
        console.log("ikke gemt")
    }

};


</script>
    
<!-- TODO: remove css -->
<style scoped> form {
     max-width: 420px;
     margin: 0px;
     background: kfe-base;
     text-align: left;
     padding: 2px;
     border-radius: 10 px;
 }

 input,
 select {
     display: inline-block;
     padding: 0px 0px;
     width: 100%;
     box-sizing: border-box;
     border: 1px solid #333;
 }
</style>
    