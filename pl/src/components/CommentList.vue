<template>
    <div>
        <v-card flat tile>
          <v-form @submit.prevent="send">
             <v-text-field
             label="说点啥吧"
             required
             append-icon="mdi-send"
             :style='`width:${this.width}`'
             @click:append="send"
             v-model="content">
             </v-text-field>
          </v-form>
          <v-list Nav>
            <v-list-item
            v-for="(item, i) in comments"
            :key="i"
          >
            <v-list-item-avatar color="purple">
              <span class="white--text">S</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.content }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-list>
      </v-card>
      </div>    
</template>

<script>
export default {
    props:{
        width:{
            type:String,
            required:true
        },
        jkdz:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            content:'',
            comments:[]
        }
    },
    methods:{
        async send(){
            console.log(this.content)
            await this.$http.post(`${this.jkdz}` , {
                content:this.content
            })
            await this.fetch()
            this.content = ''
        },
        async fetch(){
            const res = await this.$http.get(`${this.jkdz}`)
            this.comments = res.data.data
        }
    },
    created(){
        this.fetch()
    }
}
</script>

<style>
    
</style>