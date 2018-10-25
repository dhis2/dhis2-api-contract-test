
import app from "../app";
import init from "../app";
import Dredd from 'dredd';

var configuration = {
    server: 'https://play.dhis2.org/2.30/api'
};

var dredd = new Dredd(configuration);

describe("app.js", () => {
    it("should work", (done) => {
        var callback = function() {
            dredd.run((err, stats) => {
                console.log(err);
                console.log(stats);
                done();
            })
        };

        init(callback);
    })

})