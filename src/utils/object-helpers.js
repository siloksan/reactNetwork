//функция принимает:
// массив users
//id пользователей
//objPropName - свойство объекта, по этому свойству будем находить нужного пользователя и менять(добовлять) у него другое свойство
//newObjProp - добавляем новое свойство к нашему объекту
export const updateObjectInArray = (items, itemId, objPropName, newObjProp) => {
    return  items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProp}
        }
        return u;
    })
}