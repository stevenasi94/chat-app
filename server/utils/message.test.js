var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message");

describe("generateMessage", () => {
    it("should generate correct message object", () => {
        var from = "Stev";
        var text = "Some message";
        var message = generateMessage(from, text);

        expect(typeof (message.createdAt)).toBe("number");
        expect(message).toMatchObject({from, text});
    });
});

describe("generateLocationMessage", () => {
    it("should generate correct location object", () => {
        var from = "Admin"
        var latitude = 1;
        var longitude = 1;
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(typeof(locationMessage.createdAt)).toBe("number");
        expect(locationMessage.url).toBe("https://www.google.com/maps?q=1,1");
    })
})