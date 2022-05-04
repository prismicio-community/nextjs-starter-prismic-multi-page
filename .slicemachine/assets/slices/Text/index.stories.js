import MyComponent from '../../../../slices/Text';

export default {
  title: 'slices/Text'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Velit exercitation commodo deserunt incididunt duis enim dolor magna. Laborum laborum id pariatur nisi adipisicing eu occaecat.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _TwoColumns = () => <MyComponent slice={{"variation":"twoColumns","name":"Two Columns","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Duis esse tempor excepteur adipisicing labore Lorem fugiat adipisicing commodo est laborum exercitation minim dolore laboris. Magna Lorem elit Lorem ut commodo dolor elit labore qui labore officia ut dolore.","spans":[]}]},"id":"_TwoColumns"}} />
_TwoColumns.storyName = 'Two Columns'
