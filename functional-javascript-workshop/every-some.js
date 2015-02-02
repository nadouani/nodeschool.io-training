function checkUsersValid(goodUsers) {
    return function(sumbittedUsers) {
        return sumbittedUsers.every(function(item) {
            return goodUsers.some(function (good){
                return good.id === item.id;
            })
        })
    };
}

module.exports = checkUsersValid;