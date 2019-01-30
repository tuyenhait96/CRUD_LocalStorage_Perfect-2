class process {
    static getData() {
        return JSON.parse(localStorage.getItem('arrUser'));
    }

    static getDetail(id) {
        const listOfUsers = JSON.parse(localStorage.getItem('arrUser'));
        return listOfUsers.find(user => +user.id === +id);
    }
}
