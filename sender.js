const{amqp,amqpUrl} = require('../helper/require') ; 

amqp.connect(amqpUrl,(error,connetion)=>{
    if(error) {throw error}
    connetion.createChannel((error,chanel)=>{
        if(error){
            throw error
        }
        const Queue = "first" ; 
        chanel.assertQueue(Queue) ; 
        chanel.sendToQueue(Queue,Buffer.from('hello world ')) ; 
        console.log('message send ')
    })
})