const expect = require("expect");

const {Users} = require("./users");

describe("Users", () => {
    var users;

        beforeEach(() => {
            users = new Users();
            users.users = [{
                id: "1", 
                name: "Mike",
                room: "Node Course"
            }, {
                id: "2", 
                name: "Jen",
                room: "React Course"
            }, {
                id: "3", 
                name: "Julie",
                room: "Node Course"
            }]
        });

    it("should add new user", () => {
    
        var users = new Users();
        var user = {
            id: "123",
            name: "Andrew",
            room: "The Office Fans"
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it("should remove a user", () => {
        var id = users.users[0].id;
        var removedUser = users.removeUser(id);

        expect(removedUser).toBeNull;
    });

    it("should not remove user", () => {
        var id = "22345";
        var removedUser = users.removeUser(id);

        expect(removedUser).toBeFalsy;
    });

    it("should find user", () => {
        var id = "1";
        var getUser = users.getUser(id);

        expect(getUser).toEqual({
            id: "1", 
            name: "Mike",
            room: "Node Course"
        });
    });

    it("should not find user", () => {
        var id = "1234";
        var getUser = users.getUser(id);

        expect(getUser).toBeFalsy();
    })

    it("should return names for node course", () => {
        var userList = users.getUserList("Node Course");

        expect(userList).toEqual(["Mike", "Julie"]);
    })

    it("should return names for react course", () => {
        var userList = users.getUserList("React Course");

        expect(userList).toEqual(["Jen"]);
    })
});