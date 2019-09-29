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
  // action �A�Ω󦳫D�P�B�@�~�� �_�hmutation�Y�i
  actions: {
    // increment: context => {
    //   context.commit('increment');
    // }
    // �i��gES6 destructure ���context�ح���commit��k ��@�ѼƴN�n
    //padload�ĤG�ѼƬ��۩w�q
    increment: ({commit}, payload) => {
        commit('increment', payload);
    },
    decrement: ({commit}) => {
        commit('decrement');
    },

    //�����@object���Ѽ�
    asyncincrement: ({commit}, payloadObject) => {
        setTimeout(()=>{
            commit('increment', payloadObject.by); //����٬O��action�h�ϥ�mutation 
        }, payloadObject.duration)
    },
    ayncdecrement: ({commit}) => {
        setTimeout(()=>{
            commit('decrement');
        }, 1000)
    }
  }
});
