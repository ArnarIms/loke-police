<template>
<v-card>
<v-card-text>

   <v-form>
    <v-container>
      <v-row>        
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="name"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="address"
            label="Address"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="1"
        >
          <v-text-field
            v-model="age"
            label="age"
            type="number"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
            v-model="phone"
            label="Phone"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="1"
        >
          <v-checkbox
            v-model="hasBeenToPrison"
            label="Prison"
            ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
                  <v-col
          cols="12"
          md="6"
        >
          <v-textarea
            v-model="note"
            label="Note"
            
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-btn
                class="mr-4"
                @click="submit"
                >
                submit
                </v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-card-text>
</v-card>
</template>

<script>
import api from '../../data/api'

export default {    
    data() {
        return {
            name: undefined,
            phone: undefined,
            address: undefined,
            age: undefined,
            hasBeenToPrison: false,
            note: undefined

        }
    },
    methods: {
        submit() {
            api.postCriminal({
                name: this.name, 
                phone: this.phone, 
                address: this.address, 
                age: this.age, 
                hasBeenToPrison: this.hasBeenToPrison, 
                note: this.note}).then(res => {
                    console.log('Action big success, mabey route or show some success msg ?', res);
                    
                })
        }
    }
}
</script>

<style>

</style>