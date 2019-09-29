import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter: state => {
      return state.counter;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    }
  },
  // action 適用於有非同步作業時 否則mutation即可
  actions: {
    // increment: context => {
    //   context.commit('increment');
    // }
    // 可改寫ES6 destructure 抽取context裏面的commit方法 當作參數就好
    //padload第二參數為自定義
    increment: ({commit}, payload) => {
        commit('increment', payload);
    },
    decrement: ({commit}) => {
        commit('decrement');
    },

    //接收一object為參數
    asyncincrement: ({commit}, payloadObject) => {
        setTimeout(()=>{
            commit('increment', payloadObject.by); //實際還是用action去使用mutation 
        }, payloadObject.duration)
    },
    ayncdecrement: ({commit}) => {
        setTimeout(()=>{
            commit('decrement');
        }, 1000)
    }
  }
});
