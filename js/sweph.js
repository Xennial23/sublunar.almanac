self.Module = {
    locateFile: function (s) {
        return s;
    },
    // Add this function
    onRuntimeInitialized: function() {
        var query = get();
        postMessage(query);
    }
};

self.importScripts("pmom.js");

self.data = {};

// to pass data from the main JS file
self.onmessage = function(messageEvent) {
    self.data = messageEvent.data; // save the data
}

// gets executed when everything is ready.
self.get = function() {
    var calc = self.Module.ccall('get', 'string', ['number', 'number', 'number', 'number'], [self.data[0], self.data[1], self.data[2], self.data[3]]);
    var result = JSON.parse(calc);
    return result.query;
}
