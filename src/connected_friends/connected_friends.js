const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
    if(Object.keys(graph).length === 0) return false;
    if(endUser === startUser) return true;

    const enqueued = [startUser];
    const discovered = new Queue();

    discovered.enqueue(startUser);

    let result = false;
    while(discovered.first){
        let user = discovered.dequeue();
        graph[user].forEach(followedUser => {
            if(followedUser === endUser) result = true;
            if(!enqueued.includes(followedUser)) {
                enqueued.push(followedUser);
                discovered.enqueue(followedUser)
            }
        })
    }
    return result;
};

module.exports = connected;
