import MyComponent from './../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Esse nulla ea quis laboris in aliqua aute veniam consectetur ea do esse irure. Elit sit commodo fugiat veniam pariatur enim. Eiusmod ipsum consequat sint laborum non labore consequat reprehenderit consequat exercitation consequat est aliqua.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Lorem deserunt irure ut. Aute ut adipisicing aliqua do commodo irure id cillum pariatur mollit cillum. Officia et nulla incididunt tempor excepteur qui anim ex ea aute commodo.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
