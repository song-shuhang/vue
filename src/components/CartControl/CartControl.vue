<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="iconfont icon-iconjian"  @click="updateFoodCount(false)" v-show="food.count"></div>
        </transition>    
        <div class="cart-count" v-show="food.count">{{food.count}}</div>
        <div class="iconfont icon-hao"  @click="updateFoodCount(true)"></div>
    </div>
  
</template>

<script type="text/ecmascript-6">
 import {ADD_FOOD_COUNT, DEL_FOOD_COUNT} from '../../store/mutations-type'
  export default {
      props:{
          food:{
              type:Object,
              required:true
          }
      },
      methods:{
        updateFoodCount(isAdd){
            
            console.log('dianjia l ')
            if (isAdd) {
                // zze增加
                this.$store.commit(ADD_FOOD_COUNT, {food: this.food})
            }else{
                //减少
                 this.$store.commit(DEL_FOOD_COUNT, {food: this.food})
            }
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@import "../../common/stylus/mixins.styl"
.cartcontrol
  font-size: 0
  .icon-iconjian
    padding 3px
    color $green
    transform translateX(0px)
    &.move-enter-active, &.move-leave-active
        transition all 0.5s
    &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)
  .cart-count
    display: inline-block
    width: 14px
    text-align: center
    font-size: 18px
    color: rgb(147, 153, 159)
    margin 0 8px
  .icon-hao
    padding: 3px
    color $green
  .iconfont
    display: inline-block
    border 1px solid  $green
    border-radius 50%
    font-size 12px

</style>
 

