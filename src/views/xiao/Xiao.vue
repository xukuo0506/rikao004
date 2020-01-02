<template>
    
  <div class="inner">
      <div class="bock" @click="gai">搜索</div>
      <div class="item" v-for="(item,index) in list">
          <img :src="item.img" alt="">
          <div class="text">
              <h2>{{item.name}}</h2>
              <p>{{item.text}}</p>
          </div>
      </div>
      <div class="flag" v-if="kg">
          <input type="text" class="bock" v-model="value1" @input="inputs">
          <div class="flag-inner">
              <div class="item hah" v-for="(item,index) in mohuarr">
                    <img :src="item.img" alt="">
                    <div class="text">
                        <h2>{{item.name}}</h2>
                        <p>{{item.text}}</p>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[],
            value1:'',
            mohuarr:[],
            kg:false
        }
    },
    created(){
        this.getList()
        
    },
    methods:{
        getList(){
            axios.get('/list').then(res=>{
                console.log(res.data.list);
                this.list=res.data.list
            })
        },
        inputs(){
            if(this.value1!==''){
                let arr=this.list.filter(v=>v.name.indexOf(this.value1)!==-1)
            console.log(arr);
            this.mohuarr=arr
            }
            
            
        },
        gai(){
            this.kg=true
        }
    }
}
</script>

<style lang="scss">
.inner{
    width: 100%;
    height: 100%;
    .flag{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .4)
    }
    .bock{
        width: 100%;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 30px;
        color: #ccc;
        margin: 15px 0;
    }
    .item{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .text{
            flex: 1;
            height: 100%;
        }
    }
    .flag-inner{
        .hah{
            background: #fff;
        }
    }
}

</style>