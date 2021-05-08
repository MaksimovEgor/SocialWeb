
let initialState = {
    friends: [
        {
            id: 1,
            name: 'Masha',
            avatar: <img
                src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
        },
        {
            id: 2,
            name: 'Egor',
            avatar: <img
                src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
        },
        {
            id: 3,
            name: 'Artem',
            avatar: <img
                src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
};


export default sidebarReducer;