import Item1 from '../images/pngfuel.com.png'
import Item2 from '../images/Group 2269.png'
import Item3 from '../images/Group 2270.png'
import Item4 from '../images/Group 2271.png'
import Item5 from '../images/Group 2272.png'
import Item6 from '../images/Group 2273.png'
import Item7 from '../images/1.png'
import Item8 from '../images/2.png'
import Item9 from '../images/3.png'
import Item10 from '../images/4.png'
import Item11 from '../images/5.png'
import Item12 from '../images/Group 2273.png'
// import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const posts = {
    items: [
        {id:1,title:'Orignal Art',  price:110,img:Item1},
        {id:2,title:'Object',  price:80,img: Item2},
        {id:3,title:'Textile', price:120,img: Item3},
        {id:4,title:'Jersey',  price:260,img:Item4},
        {id:5,title:'Photo',  price:160,img: Item5},
        {id:6,title:'Cartoon', price:90,img: Item6}
    ],
    items2: [
        {id:7,title:'Marquette',  price:110,img:Item7},
        {id:8,title:'Wren',  price:80,img: Item8},
        {id:9,title:'Mercer', price:120,img: Item9},
        {id:10,title:'Everett',  price:260,img:Item10},
        {id:11,title:'Mandalay',  price:160,img: Item11}        
    ],
    addedItems:[],
    total: 0

}
export default posts;