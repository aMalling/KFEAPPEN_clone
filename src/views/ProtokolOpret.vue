<template>
  <h2 class="pt-10 text-2xl font-bold text-center text-kfe-primary">Opret Ny Protokol</h2>
  <div class="grid grid-cols-5 ">
    <div class="col-span-3 col-start-2">
      <div class="grid grid-cols-2 gap-1 justify-center ml-10 w-full ">

        <form>
          <label for="protocolType">
            Protokoltype
            <input autofocus class="rounded bg-kfe-base" type="number" required id="protocolType">
          </label>
        </form>
        <form>
          <label for="kfeNr">
            KFE-nr:
            <input class="rounded bg-kfe-base " type="number" v-model=" kfeNr " id="kfeNr" required>
          </label>
        </form>
        <form>
          <label for="nickname">
            Sponsor-nr
            <input class="rounded bg-kfe-base" type="text" id="Sponsor-nr">
          </label>
        </form>
        <form>
          <label for="nickname">
            Kaldenavn
            <input class="rounded bg-kfe-base" type="text" required id="nickname">
          </label>
        </form>
        <form>
          <label for="title">
            Title
            <input class="rounded bg-kfe-base" type="text" required>
          </label>
        </form>
        <form>
          <label for="diagnose">Diagnose:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" diagnose " id="diagnose">
              <option value="nyre">Nyrekræft</option>
              <option value="lunge">Lungekræft</option>
            </select>
          </label>
        </form>
        <form>
          <label for="Fase">Fase:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" Fase " id="Fase">
              <option value="Fase I ">Fase I</option>
              <option value="Fase II">Fase II</option>
              <option value="Fase II">Fase III</option>
              <option value="Fase II">Fase I+II</option>
              <option value="Fase II">Fase II+III</option>
              <option value="Fase II">Fase I+II+III</option>
              <option value="Fase II">Fase III+IV</option>
              <option value="Fase II">Andet</option>
              <option value="Fase II">Uoplyst</option>
            </select>
          </label>
        </form>
        <form>
          <label for="Geografi">Geografi:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" Geografi " id="Geografi">
              <option value="Internationalt">Internationalt</option>
              <option value="Lokalt">Lokalt</option>
              <option value="Nationalt">Nationalt</option>
              <option value="Fase II">Uoplyst</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">Modalitet:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" Modalitet " id="Modalitet">
              <option value="nyre">Nyrekræft</option>
              <option value="lunge">Lungekræft</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">EKO:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" EKO " id="EKO">
              <option value="Ja">Ja</option>
              <option value="Nej">Nej</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">CT-klinik:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" CTklinik " id="CT-klinik">
              <option value="Ja">Ja</option>
              <option value="Nej">Nej</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">Tox i REDCap:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" ToxIRercap " id="Tox i REDCap">
              <option value="Ja">Ja</option>
              <option value="Jalukket">Ja-lukket</option>
              <option value="Nej">Nej</option>
            </select>
          </label>
        </form>
        <form>
          <label for="title">
            EudraCT
            <input class="rounded bg-kfe-base" type="text">
          </label>
        </form>
        <form>
          <label for="title">
            BB-nr.
            <input class="rounded bg-kfe-base" type="text">
          </label>
        </form>
        <form>
          <label for="bom">Backup:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" backup " id="backup">
              <option value="Ja">Ja</option>
              <option value="Nej">Nej</option>
            </select>
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
            Startdato:
            <input class="rounded bg-kfe-base" type="date" id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">
            Slutdato:
            <input class="rounded bg-kfe-base" type="date" id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">Initieret af:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" Initieret " id="Initieret">
              <option value="Ja">Firma</option>
              <option value="Nej">Inv</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">Investigator-rolle:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" Initieret " id="Initieret">
              <option value="Nej">Inv</option>
              <option value="Nej">Nat. PI</option>
              <option value="Ja">PI</option>
              <option value="Nej">IPI</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">
            Betinget godkendt
            <input class="rounded bg-kfe-base" type="text" id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">
            Godkendt
            <input class="rounded bg-kfe-base" type="date" id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">
            F. sekr økonomi
            <input class="rounded bg-kfe-base" type="text" id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">Erstatter behandlings:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" backup " id="backup">
              <option value="Ja">Ja</option>
              <option value="Nej">Nej</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">Medicin Betalt:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" backup " id="backup">
              <option value="Ja">Ja</option>
              <option value="Nej">Nej</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">
            Forventet antal ppt. årligt:
            <input class="rounded bg-kfe-base" type="number" id="bom" placeholder="0" required>
          </label>
        </form>
        <form>
          <label for="bom">
            Forventet antal ppt. i alt:
            <input class="rounded bg-kfe-base" type="number" id="bom" placeholder="0" required>
          </label>
        </form>
        <form>
          <label for="bom">
            Forventet Slutdato
            <input class="rounded bg-kfe-base" type="date" id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">
            Bemærkninger
            <input class="rounded bg-kfe-base" type="text" id="bom" required>
          </label>
        </form>

      </div>
    </div>

  </div>
  <div class="flex justify-center mt-2"> <button @click=" submitment "
      class="bg-kfe-primary text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md py-2 px-3 my-2">
      <i class="fa-solid fa-door-open"></i> Opret Protokol
    </button></div>
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
  
<style scoped>
form {
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

  