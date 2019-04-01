let messages = [];
let id = 0;

module.exports = {
read: (request, response )=>{
    response.status(200).send(messages);
},

create: (request, response)=>{
    const { text, time } = request.body;
    if (request.body){
        messages.push({ id, text, time });
        id++;
        response.status(200).json(messages);  
    } else{
        response.status(500).json("Error.Needs Fixing...");
    }
    
},

update: (request, response) => {
    const { text } = request.body;
    const updateID = request.params.id;
    const messageIndex = messages.findIndex( message => message.id === + updateID );
    let message = messages[ messageIndex ];

    messages[ messageIndex ].text = text;
    //     id: result.id,
    //     text: text || result.text,
    //     time: message.time
    // };
    console.log(messages);
    response.status(200).json( messages );
},

deleteStuff: (request, response) => {
    const deleteID = request.params.id;
    messageIndex = messages.findIndex( message => message.id === deleteID );
    messages.splice(messageIndex, 1);
    response.status(200).json( messages );
    }
};
