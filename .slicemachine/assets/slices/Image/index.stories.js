import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Banner = () => <MyComponent slice={{"variation":"banner","name":"Banner","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":3000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=3000&h=1000&fit=crop"}},"id":"_Banner"}} />
_Banner.storyName = 'Banner'
