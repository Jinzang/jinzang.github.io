// MLINK -- Hide email addresses from spammer

// Write link
    function mlink(address, name) {
        if (! name) {
            document.write('<a href="mailto:' + dcode(address) + '">' +
                           dcode(address) + '</a>');
        } else {
            document.write('<a href="mailto:' + dcode(address) + '">' +
                           name + '</a>');
        }
    }
// Remove simple encoding
    function dcode(address) {
        if (address.indexOf('@') == -1) {
            var str = '';
            for (var i=0; i<address.length; i=i+2) {
                var h = address.substr(i, 2);
                var n = parseInt(h, 16) ^ 96;
                str = str + String.fromCharCode(n);
            }
            address = str;
        }
        return(address);
    }
