export type memoItem = {
    [key:string] : number | string;
    id: number,
    title: string,
    memo: string,
    date: string
}

export type memoList = memoItem[]

// 新規にメモ追加
export const addMemo = (title: string, list:memoList): memoList => {
    const newId = list.length + 1;
    const newMemo: memoItem = {
        id: newId,
        title: title,
        memo: "",
        date: currentDate()
    }
    return list.concat([newMemo])
}

// idで指定されたmemoのkeyのvalueを変
export const modMemo = (id:number, list:memoList, key:string, value:string) => {
    const target = list.find(memo => memo.id === id);
    if(!target) return list;
    // 良くない
    target[key] = value;
    return list;
}

// JST現在時刻を返す
const currentDate = ():string => {
    let current = new Date();
    current.setTime(current.getTime() + 60 * 60);

    const year_str = current.getFullYear();
    const month_str = 1 + current.getMonth();
    const day_str = current.getDate();
    const hour_str = current.getHours();
    const minute_str = current.getMinutes();
    const second_str = current.getSeconds();

    let format_str = 'YYYY年MM月DD日 hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, String(year_str));
    format_str = format_str.replace(/MM/g, String(month_str));
    format_str = format_str.replace(/DD/g, String(day_str));
    format_str = format_str.replace(/hh/g, zeroPadding(hour_str, 2));
    format_str = format_str.replace(/mm/g, zeroPadding(minute_str, 2));
    format_str = format_str.replace(/ss/g, zeroPadding(second_str, 2));

    return format_str;
}


  function zeroPadding(num:number, digits:number):string {
    return ("0".repeat(digits) + num).slice(-digits);
  }