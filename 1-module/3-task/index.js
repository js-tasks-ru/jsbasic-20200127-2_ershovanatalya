/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if (!str) return str = "";
    else if (str.length == 1) return (str = str[0].toUpperCase());
    else return (str = str[0].toUpperCase() + str.slice(1));

}


