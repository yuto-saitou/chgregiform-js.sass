// console.log('接続テスト');
// // ロードが終わったら実行します？
// document.addEventListener('DOMContentLoaded',() =>{
//     const main = new Main();
// });

// //Mainインスタンスに動作を書く
// class Main{
//     //コンストラクタインスタンス生成時に一度だけ呼び出される
//     constructor(){
//         this.DOM = {};//DOMオブジェクト初期化値とキーを入れて使う
//         this._init();//initメソッド呼ぶ
//     }

//     _init(){
//         this.DOM.el = document.querySelector('.select-menu-btn');
//         //↓クリックした時のイベントを設定
//         this.DOM.el.addEventListener('click',this._cd.bind(this));

//     }

//     _cd(){//クリックするたびについたり消えたりさせる
//         document.querySelector('.select-menu').classList.toggle('open');
//     }
// }

