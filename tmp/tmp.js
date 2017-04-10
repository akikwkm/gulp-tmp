/* =======================================
      PURE JavaScript
======================================= *
/* bubling */
document.addEventListener('click', (event) => {
	if(event.target.tagName == 'INPUT'){
		console.log(event.target);
	}
});
// targetでどの要素がclickされたかを判断することができる
// inputをclickしたときだけに設定 
// .tagNameはuppercaseで返してくる

document.addEventListener('DOMcontentLoaded', () => { });
// document.addEventListener('ready', () => { });と同等 






/* =======================================
      THINGS TO KNOW
======================================= *
// callbackはfunctionの中で呼ばれるeventhandler
// boundは束縛
// manupulateは操作
// traversalは横切る・document.getで指定したモノからさらに指定する
// querySelectorはcss要素を使用できる
// getElementByTagNameはHTMLCollectionを返す[0]が必要
// getElementByClassName, getElementByIdとかもある
// nextElementSibling 次の要素を取得
// previousElementSibling 前の要素を取得
// children 子要素を取得
// firstElementChild = ○○.children[0];
// lastElementChild = ○○.children[children.length];
// appendChild 最後に配置 | insertBefore 最初に配置
// e.preventDefault(); デフォルトの機能をキャンセル
// addEventListener('submit', () => { }); は'form'に当てる
// DOMcontentLoadedを利用してみる | readyと同等だが早い









