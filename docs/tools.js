export function capitalizeFirstLetter(str) {
    if (!str) return ''; // 处理空字符串
    return str.charAt(0).toUpperCase() + str.slice(1);
}