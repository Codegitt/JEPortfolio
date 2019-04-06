

const initState = {
    posts: [
        {id: 'App1', title: 'Event Date Calculator App', body: 'This app will allow you to calculate how many days are remaining until your upcoming event which will be a future date that you pick.', src:'https://images.unsplash.com/photo-1521020773588-3b28297b1e70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'  },
        {id: 'App2', title: 'Reminder List App', body: 'This app will allow you to type any reminders that you do not want to forget and that you do want to complete.  It is accompanied with a checkbox so that you can check off any reminders that you have completed. You can also delete an item by clicking on the " - " icon to the right of it.', src:'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        {id: 'App3', title: 'Random Number Generator App', body: 'This app allows you to generate random number from two numbers that you enter. One of the numbers has to be a minimum number and the other number has to be the maximum number.', src:'https://images.unsplash.com/photo-1502570149819-b2260483d302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        {id: 'App4', title: 'Arithmetic App', body: 'This app can be likened to a game (of some sort).  It starts with a number and every 3 seconds it prompts you to click on the button associated with what the prompt says.', src:'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }
    ]
}

const rootReducer = (state = initState,action) => {
    return state;

}


export default rootReducer;