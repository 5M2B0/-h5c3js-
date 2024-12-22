const { pinyin } = pinyinPro; // 拼音库
const ipt = document.querySelector('.ipt');
const val = document.querySelector('.val');

function setPinYin() {
    val.innerHTML = "";
    let value = ipt.value;
    let arr = value.split('');

    arr.forEach(item => {
        if (isChineseCharacter(item)) {
            val.innerHTML += `<ruby>${item}<rt>${pinyin(item)}</rt></ruby>`;
        } else {
            val.innerHTML += item;
        }
    });
}

function isChineseCharacter(char) {
    // 判断字符是否为汉字
    return /[\u4e00-\u9fa5]/.test(char);
}

let flag = false;

// 绑定事件
ipt.addEventListener('input', () => {
    if (!flag) {
        setPinYin();
    }
});

ipt.addEventListener('compositionstart', () => {
    flag = true;
});

ipt.addEventListener('compositionend', () => {
    flag = false;
    setPinYin();
});

// 页面加载时初始化标注
window.addEventListener('load', () => {
    setPinYin();
});
