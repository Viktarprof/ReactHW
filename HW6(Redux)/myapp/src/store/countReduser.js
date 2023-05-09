const defaultState = [
    {id: 1, title: 'Велосипед', count: 22},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
]

    const DERC_COUNT = 'DERC_COUNT';
    const INCR_COUNT = 'INCR_COUNT';
    const DELL_PRODUCT = 'DELL_PRODUCT';
    const ADD_PRODUCT = 'ADD_PRODUCT';
    const RESET_CART = 'RESET_CART';

    export const countReduser = (state = defaultState, action) => {
        switch (action.type) {
            case DERC_COUNT:
                const dectTargetProduct = state.find((el) => el.id === action.payload);
                dectTargetProduct.count = dectTargetProduct.count - 1 ;
                return state.filter((el) => el.count !== 0);

            case INCR_COUNT:
                const incrTargetProduct = state.find((el) => el.id === action.payload);
                const newCount = incrTargetProduct.count < 25 ? incrTargetProduct.count +1 : 25;
                if (newCount === 25) {
                    alert('Превышено максимальное значение, 25.');
                }
                return state.map((el) => el.id === action.payload ? {...el, count: newCount} : el);
                
            case DELL_PRODUCT:
                return state.filter((el) => el.id !== action.payload);

            case ADD_PRODUCT:
                const [title] = action.payload.split(' ');
                const findElem = state.findIndex((el) => el.title === title)
                if(findElem !== -1){
                    alert(`Продукт ${title} уже добавлен в корзину`)
                    const newState = [...state]
                    newState[findElem].count = newState[findElem].count + 1
                    return newState
                }else{
                    const new_product = {
                        id:Date.now(),
                        title,
                        count: 1
                }
                    return [...state, new_product];
                }

            case RESET_CART:
                return state.map((el) => ({...el, count: 0}))

            default:
                return state;
        }
    };
  
    export const decrByPayloadAction = (payload) => ({type: DERC_COUNT, payload});
    export const incrByPayloadAction = (payload) =>({type: INCR_COUNT, payload });
    export const dellProductAction = (payload) => ({type:DELL_PRODUCT, payload});
    export const addProductAction = (payload) => ({type:ADD_PRODUCT, payload});
    export const resetCartAction = () => ({type:RESET_CART})
