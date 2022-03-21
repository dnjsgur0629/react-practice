import {atom, selector} from "recoil";

export const fontSizeState = atom({
    key: "fontSizeState",
    default: 14,
});
export const fontSizeLabelState = selector({    //selector: state에 변경을 가해서 반환해줌
    key: 'fontSizeLabelState',
    get: ({get}) => {
        const fontSize = get(fontSizeState);
        const unit = 'px';

        return `${fontSize}${unit}`;    //fontSize를 get으로 받아와서 px를 붙여서 반환
    },
});
