var soy = require("../"),
    should = require("should"),
    gutil = require("gulp-util"),
    closureTemplates = require("closure-templates"),
    fs = require("fs");

require("mocha");


var makeFile = function (path) {
    return new gutil.File({
        path: path,
        cwd: "test/",
        base: "/files",
        contents: fs.readFileSync(path)
    });
};

describe("gulp-soy", function() {

    it("should compile the a.soy template", function (done) {

        var expectedFile = makeFile("test/files/expected/a.js"),
            srcFile = makeFile("test/files/soy/a.soy"),
            stream = soy({
                soyutils: false
            });

        stream.on("error", function (err) {
            should.exist(err);
            done(err);
        });

        stream.on("data", function (newFile) {
            should.exist(newFile);
            should.exist(newFile.contents);
            String(newFile.contents).should.equal(String(expectedFile.contents));
            done();
        });

        stream.write(srcFile);
        stream.end();
    });


    it("should include soyutils.js before the compiled files", function (done) {

        var expectedFile = makeFile("test/files/expected/a.js"),
            srcFile = makeFile("test/files/soy/a.soy"),
            soyutils = makeFile(closureTemplates["soyutils.js"]),
            first = true,
            stream = soy();

        stream.on("error", function (err) {
            should.exist(err);
            done(err);
        });

        stream.on("data", function (newFile) {
            should.exist(newFile);
            should.exist(newFile.contents);
            String(newFile.contents).should.equal(String(first ? soyutils.contents : expectedFile.contents));
            if (!first) {
                done();
            }
            first = false;
        });

        stream.write(srcFile);
        stream.end();
    });

});
