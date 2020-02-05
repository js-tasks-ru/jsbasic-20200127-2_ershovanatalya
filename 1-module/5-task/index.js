/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    str1 = "…";
    if (str.length >= maxlength) return (str = str.slice(0, (maxlength - 1)) + str1);
    else return str;
}
