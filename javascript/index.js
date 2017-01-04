/**
 * Created by zhezhao on 2017/1/3.
 */
$(function() {
    $('#doc-my-tabs').tabs({noSwipe: 1});
})
//加密操作
document.getElementById('Encrypt').onclick = function () {
    var plaintext = document.getElementById('Eninput').value;
    if( plaintext == ''){
        document.getElementById('Eninput').value = '输入内容不能为空';
        return false;
    }
    var result = document.getElementById('Enoutput');
    var obj= document.getElementById('Entype');
    var index = obj.selectedIndex;
    var type = obj[index].value;    //获取选择的加密类型
    var ciphertext = plaintext;
    switch (type){
        case 'url':
            ciphertext = encodeURI(plaintext);
            break;
        case 'base64':
            ciphertext = Base64.encode(plaintext);
            break;
        case 'md5':
            ciphertext = hex_md5(plaintext);
            break;
        case 'sha1':
            ciphertext = hex_sha1(plaintext);
            break;
        case 'sha256':
            ciphertext = hex_sha256(plaintext);
            break;
        case 'sha512':
            ciphertext = hex_sha512(plaintext);
            break;
    }
    result.value = ciphertext;
    return false;
};
//解密操作
document.getElementById('Decrypt').onclick = function () {
    var ciphertext = document.getElementById('Deinput').value;
    if( ciphertext == ''){
        document.getElementById('Deinput').value = '输入内容不能为空';
        return false;
    }
    var result = document.getElementById('Deoutput');
    var obj= document.getElementById('Detype');
    var index = obj.selectedIndex;
    var type = obj[index].value;    //获取选择的加密类型
    var plaintext = ciphertext;
    switch (type){
        case 'url':
            plaintext = decodeURI(ciphertext);
            break;
        case 'base64':
            plaintext = Base64.decode(ciphertext);
            break;
        default:
            plaintext = '该类型不能被解密';
            break;
    }
    result.value = plaintext;
    return false;
};
//自动清空输入框
document.getElementById('Eninput').onclick = function (){
    document.getElementById('Eninput').value = '';
}
document.getElementById('Deinput').onclick = function (){
    document.getElementById('Deinput').value = '';
}