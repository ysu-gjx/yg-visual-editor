import {defineComponent} from 'vue'

export default defineComponent({
  name: 'test',
  props: {
    count: Number
  },
  emits: ['countClick'],
  setup(props, {emit}){
    console.log(props)
    return () => {
      const clickItem = () => {
        emit('countClick')
      }
      return <>
        <div style="cursor:pointer" className='' onClick={() => emit('countClick')}>test----{props.count}</div>
      </>
    }
  }
})