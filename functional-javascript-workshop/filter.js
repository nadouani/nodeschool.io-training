/*
 module.exports = function getShortMessage(messages) {
 return messages.map(function(o){
 return o.message;
 }).filter(function (m) {
 return m.length < 50;
 });
 };
 */

module.exports = function getShortMessage(messages) {
    return messages.filter(function (item) {
        return item.message.length < 50;
    }).map(function (item) {
        return item.message;
    });
};